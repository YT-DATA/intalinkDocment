# 安装与部署指南

## 目录
1. 技术参数
   1.1. 技术架构
   1.2. 部署环境
   1.3. 应用最低配置
2. 安装手册
   2.1. 安装 MySQL
   2.2. 安装 Nginx
3. IntaLink 系统部署

---

## 1. 技术参数

### 1.1. 技术架构
![image](https://github.com/user-attachments/assets/0dae9956-b525-47bf-88f0-f1fd8df742b4)

### 1.2. 部署环境
- JDK, MySQL, Nginx

### 1.3. 应用最低配置
- **JDK**: 1.8
- **MySQL**: 5.7
- **Nginx**: 1.24

---

## 2. 安装手册

### 2.1. 安装 Docker Desktop

**下载 Docker Desktop**
下载地址：[Docker Desktop 下载](https://www.docker.com/products/docker-desktop)
点击 **Download Docker Desktop for Mac** 按钮，下载 Docker Desktop 安装包。

**安装 Docker Desktop**
在“应用程序”文件夹中找到 Docker，双击启动。
初次启动时，Docker 会请求您输入系统密码以获取管理员权限。安装完成后，Docker 图标会出现在顶部菜单栏中。
![image](https://github.com/user-attachments/assets/27b1fabc-8e0d-4431-a515-d5c9a7be514a)

**Docker Desktop 界面概览**
- **主导航栏**：位于左侧，提供快速访问各个功能模块。
- **状态栏**：位于顶部，显示 Docker 的运行状态和其他信息。
- **主面板**：展示容器和镜像的详细信息。

**Docker Desktop 界面组件**
| 组件           | 描述                                                         |
|----------------|--------------------------------------------------------------|
| 容器选项卡      | 列出当前运行和停止的容器，可以启动、停止或删除容器。        |
| 镜像选项卡      | 列出本地镜像，支持拉取、删除或查看镜像详情。                |
| 设置选项卡      | 配置 Docker 的各种选项，如资源分配、网络设置等。             |
| 状态指示器      | 显示 Docker 的运行状态（如正在运行、已停止、出错等）。      |

### 2.2. 配置 Docker Desktop

**配置资源**
Docker Desktop 允许您配置系统资源，如 CPU 和内存。按照以下步骤进行配置：
![image](https://github.com/user-attachments/assets/af24272e-16b6-4e2e-afb3-0d1c0cb15cc9)

1. 点击右上角的 **设置**（齿轮图标）。
2. 在弹出的窗口中选择 **资源** 选项卡。
3. 根据您的系统配置调整 CPU、内存和交换空间等设置。

推荐的资源分配：
- **CPU**：控制 Docker 可以使用的处理器核心数量。增加此值可以提高性能。
- **内存**：调整 Docker 可以使用的最大内存量，视需求进行调整。
- **磁盘镜像大小**：设置 Docker 存储镜像和容器的最大磁盘空间。

**网络配置**
在 **网络** 选项卡中配置 Docker 的网络设置：
![image](https://github.com/user-attachments/assets/878f82a0-0ed2-4c06-93d7-49e171f3645b)

1. 在设置窗口中选择 **网络** 选项卡。
2. 配置 DNS 服务器和代理设置。

### 2.3. 系统搭建

**从 Docker Hub 拉取镜像**
使用以下命令拉取所需镜像：
```bash
docker pull yuantuo/intalink_nginx:1.23.1
```
![image](https://github.com/user-attachments/assets/2fd60fbb-499e-47fa-af03-a8e13632dbec)
```bash
docker pull yuantuo/intalink_service:8_latest
```
![image](https://github.com/user-attachments/assets/14f41aa0-359b-41f0-acb5-591e3089eacf)

```bash
docker pull yuantuo/intalink_mysql:8.0.27
```
![image](https://github.com/user-attachments/assets/5a7fdc9b-abd9-4fde-a86f-c072634773a9)

```bash
 docker pull yuantuo/intalink_redis:6.2.6
```
![image](https://github.com/user-attachments/assets/573927e3-b10e-4807-bdd0-b4b2b658cf02)

或者，您也可以解压 `docker_images.zip` 文件并使用以下命令将镜像加载到 Docker 中：
```bash
docker load -i <path>/yuantuo_intalink_mysql_8.0.27.tar
docker load -i <path>/yuantuo_intalink_nginx_1.23.1.tar
docker load -i <path>/yuantuo_intalink_redis_6.2.6.tar
docker load -i <path>/yuantuo_intalink_service_8_latest.tar
```

使用 `docker images` 命令确认镜像是否已成功加载。

**创建 Docker Compose 文件夹**
创建一个文件夹（例如 `D:\docker-compose`），并在该文件夹中创建一个 `docker-compose.yaml` 文件，内容如下：
```bash
version: '2.2'

networks: yuantuo: driver: bridge
```
```bash
services:
 intalink-mysql:
   image: yuantuo/intalink_mysql:8.0.27
   ports: - "3306:3306"
   volumes: - D:\docker-compose\mysql:/var/lib/mysql
   networks: - yuantuo
   restart: always
```
```bash
intalink-redis:
 image: yuantuo/intalink_redis:6.2.6
 ports: - "16379:6379"
 volumes: - D:\docker-compose\redis:/data
 command: --requirepass 2RSD.YTXX.INTALINK
 networks: - yuantuo
   restart: always
```
```bash
intalink-service:
  image: yuantuo/intalink_service:8_latest
  ports: - "9207:9207"
  depends_on: - intalink-mysql - intalink-redis
   networks: - yuantuo
  restart: always
```
```bash
intalink-nginx:
  image: yuantuo/intalink_nginx:1.23.1
  ports: - "80:80"
  depends_on: - intalink-service
  networks: - yuantuo
  restart: always
```

### 2.4. 启动容器

以管理员身份打开 PowerShell，进入 `docker-compose.yaml` 文件所在的目录，并运行以下命令启动容器：
```bash
docker-compose up -d
```
![image](https://github.com/user-attachments/assets/a3a5a39d-25e1-4b04-a4aa-ffbfd1f51a9f)

此命令会启动容器，您可以在 Docker Desktop 界面中看到容器正在运行。

---

## 3. IntaLink 系统部署

**访问应用程序**
部署完成后，您可以通过 URL 访问 IntaLink 系统



请将 `<IP>` 替换为您的服务器实际 IP 地址。
![image](https://github.com/user-attachments/assets/e9755bb7-4f02-41a3-93b0-3f52531fc0b5)
