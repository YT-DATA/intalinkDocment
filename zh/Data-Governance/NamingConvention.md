### 二. 命名规范

#### 2.1 项目命名

命名方法：采用kebab-case规则命名

    正例：my-project-name
    反例：my_project_name / myProjectName

#### 2.2 目录命名

命名方法：采用kebab-case规则命名
命名规范：有复数结构时，要采用复数命名法，缩写不用复数。

    正例：scripts / styles / components / images / assets / views / utils / custom-themes / layout / img / doc / api / router
    反例：script / style / util / imgs / docs / apis / routers

#### 2.3 JS、CSS、LESS、HTML、PNG文件命名

命名方法：采用kebab-case规则命名

```javascript
正例：render-dom.js / home.css / home-banner.png
反例：renderDom.js / Home.css / homeBanner.png
```

#### 2.4 views 下的文件命名

*   文件夹
    1.  普通文件夹使用kebab-case命名规则，只有一个单词的全部都要小写，文件夹名称代表模块内容
    2.  组件文件夹使用components,components下的文件使用PascalBase命名规则
*   vue 文件命名
    1.  路由router直接访问的文件要与文件夹名称保持一致
    2.  只有一个文件的情况下不会出现文件夹，是直接放在 views目录下面，如 login.vue、log.vue
```
    示例：
     
    ├── views                                   # 路由页面组件
    │   ├── home                                # home模块
    │   │   ├── home.vue                        # home页面
    │   │   ├── components                      # home页面拆分组件
    │   │   │    ├── StatisticalList.vue        # home页面统计列表组件
    │   │   │    ├── Modal.vue                  # home页面弹窗组件
    │   ├── role                                # role模块
    │   │   ├── role.vue                        # role页面
    │   │   ├── role-list.vue                   # role列表页面
    │   ├── login.vue                           # login页面
    │   ├── behavior-log                        # behavior-log模块
```


#### 2.5 普通变量命名

*   命名方法：驼峰命名法
*   命名规范：
    1.  命名必须是跟需求的内容相关的词，比如说我想声明一个变量，用来表示我的学校，那么我们可以这样定义：
    ```javascript
    const mySchool = "我的学校";
    ```
    1.  命名是复数的时候需要加s，比如说我想声明一个数组，表示很多人的名字，那么我们可以这样定义：
    ```javascript
    const names = new Array();
    ```

#### 2.6 常量

*   命名方法：全部大写
*   命名规范：使用大写字母和下划线来组合命名，下划线用以分割单词。

```javascript
const MAX_COUNT = 10
const URL = 'https://www.baidu.com/'
```

#### 2.7 组件命名

###### PascalCase命名规则是最通用的声明约定

###### kebab-case命名规则是最通用的使用约定

*   组件名应该始终是多个单词的，根组件 App 除外
*   有意义的名词、简短、具有可读性
*   命名遵循 PascalCase 规则
    1.  公用组件以组件内容命名，如:（DatePicker,Table）
    2.  页面内部组件以组件模块名简写为开头，Item为结尾，如（StaffBenchToChargeItem，StaffBenchAppNotArrItem）
*   使用遵循 kebab-case 规则
    1.  在页面中使用组件需要前后闭合，并以短线分隔，如（<date-picker></date-picker>）
*   导入及注册组件时，遵循 PascalCase 约定
*   同时还需要注意：必须符合自定义元素规范，切勿使用保留字（例如：abstract、double、goto、native、static、boolean、enum、implements、package、super、byte、char、class、const、public等等）。

#### 2.8 methods 方法命名

*   驼峰式命名，统一使用动词或者动词+名词形式，做到见文识义

```javascript
示例：
jumpPage、openCarInfoDialog、nextPage
```

*   请求数据方法，以 data 结尾

```javascript
正例：getListData、postFormData、confirmData
反例：take、postForm
```
*   init、refresh 单词除外
*   尽量使用常用单词开头（set、get、go、can、has、is）
    附： 函数方法常用的动词:

```
get 获取/set 设置,
add 增加/remove 删除
create 创建/destory 移除
start 启动/stop 停止
open 打开/close 关闭,
read 读取/write 写入
load 载入/save 保存,
create 创建/destroy 销毁
begin 开始/end 结束,
backup 备份/restore 恢复
import 导入/export 导出,
split 分割/merge 合并
inject 注入/extract 提取,
attach 附着/detach 脱离
bind 绑定/separate 分离,
view 查看/browse 浏览
edit 编辑/modify 修改,
select 选取/mark 标记
copy 复制/paste 粘贴,
undo 撤销/redo 重做
insert 插入/delete 移除,
add 加入/append 添加
clean 清理/clear 清除,
index 索引/sort 排序
find 查找/search 搜索,
increase 增加/decrease 减少
play 播放/pause 暂停,
launch 启动/run 运行
compile 编译/execute 执行,
debug 调试/trace 跟踪
observe 观察/listen 监听,
build 构建/publish 发布
input 输入/output 输出,
encode 编码/decode 解码
encrypt 加密/decrypt 解密,
compress 压缩/decompress 解压缩
pack 打包/unpack 解包,
parse 解析/emit 生成
connect 连接/disconnect 断开,
send 发送/receive 接收
download 下载/upload 上传,
refresh 刷新/synchronize 同步
update 更新/revert 复原,
lock 锁定/unlock 解锁
check out 签出/check in 签入,
submit 提交/commit 交付
push 推/pull 拉,
expand 展开/collapse 折叠
begin 起始/end 结束,
start 开始/finish 完成
enter 进入/exit 退出,
abort 放弃/quit 离开
obsolete 废弃/depreciate 废旧,
collect 收集/aggregate 聚集
```

#### 2.9 props 命名

在声明 prop 的时候，其命名应该始终使用camelCase规则，而在模板中应该始终使用 kebab-case规则

```javascript
<!-- 正例 -->
<script>
props: {
  greetingText: String
}
</script>

<welcome-message greeting-text="hi"></welcome-message>

<!-- 反例 -->
<script>
props: {
  'greeting-text': String
}
</script>

<welcome-message greetingText="hi"></welcome-message>
```

#### 2.10 例外情况

*   作用域不大临时变量可以简写，比如：str，num，bol，obj，fun，arr
*   循环变量可以简写，比如：i，j，k 等