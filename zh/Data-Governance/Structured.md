
### 三. 结构化规范

#### 3.1 基础

vue 项目中的所有命名一定要与后端命名统一
比如权限：后端 privilege, 前端无论 router , store, api 等都必须使用 privilege 单词

#### 3.2 使用 Vue-cli 脚手架

使用 vue-cli 来初始化项目，项目名按照上面的命名规范

#### 3.3 目录说明

    src                                  源码目录
    |-- api                              所有api接口
    |-- assets                           静态资源，images, icons, styles等
    |-- components                       公用组件
    |-- config                           配置信息
    |-- constants                        常量信息，项目所有Enum, 全局常量等
    |-- directives                       自定义指令
    |-- filters                          过滤器，全局工具
    |-- datas                            模拟数据，临时存放
    |-- lib                              外部引用的插件存放及修改文件
    |-- mock                             模拟接口，临时存放
    |-- plugins                          插件，全局使用
    |-- router                           路由，统一管理
    |-- store                            vuex, 统一管理
    |-- themes                           自定义样式主题
    |-- views                            视图目录
    |   |-- role                                 role模块名
    |   |-- |-- role-list.vue                    role列表页面
    |   |-- |-- role-add.vue                     role新建页面
    |   |-- |-- role-update.vue                  role更新页面
    |   |-- |-- components                       role模块通用组件文件夹
    |   |-- employee                             employee模块

###### 3.3.1 api 目录

*   api 中的方法名字要与后端 api url 尽量保持语义高度一致性
*   对于 api 中的每个方法要添加注释，注释与后端api文档保持一致

```javascript
正例：

后端api url:
/employee/add
/employee/delete/{id}
/employee/update

前端： employee.js
// 添加员工
addEmployee: (data) => {
    return postAxios('/employee/add', data)
},
// 更新员工信息
updateEmployee: (data) => {
    return postAxios('/employee/update', data)
},
// 删除员工
deleteEmployee: (employeeId) => {
    return postAxios('/employee/delete/' + employeeId)
}
```

###### 3.3.2 assets 目录

assets 为静态资源，里面存放 images, styles, icons 等静态资源，静态资源命名格式为 kebab-case规则

###### 3.3.3 components 目录

此目录应按照组件进行目录划分，目录命名为 PascalBase，组件命名规则也为 PascalBase

###### 3.3.4 constants 目录

此目录存放项目所有常量

    目录结构示例：
    
    |constants
    |-- index.js
    |-- role.js
    |-- employee.js

例如：employee.js

```javascript
export const EMPLOYEE_STATUS = {
  NORMAL: {
    value: 1,
    desc: '正常'
  },
  DISABLED: {
    value: 1,
    desc: '禁用'
  },
  DELETED: {
    value: 2,
    desc: '已删除'
  }
};
export default {
  EMPLOYEE_STATUS
};
```

###### 3.3.5 router 与 store 目录

*   这两个目录一定要将业务进行拆分，不能放到一个 js 文件里
*   router 尽量按照 views 中的结构保持一致
*   store 按照业务进行拆分不同的 js 文件

###### 3.3.6 views 目录

命名要与后端、router、api 等保持一致

    目录结构示例：
    
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