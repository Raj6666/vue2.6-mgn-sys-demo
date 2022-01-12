# vue2.6-standard-demo

vue 标准化项目

### 项目文件树

```
.
├─ .env.development                 —— 开发环境变量
├─ .env.production                  —— 测试环境变量
├─ .env.rc                          —— 预发布环境变量
├─ .env.test                        —— 生产环境变量
├─ src
│    ├─ App.vue                     —— 项目根组件
│    ├─ main.js                     —— 项目入口文件
│    ├─ apis
│    │    ├─ index.js               —— 对api请求对象的封装以及所有模块api的自动引入
│    │    └─ modules                —— 请求api集合,内部必须遵循文件夹包含index.js的声明方式
│    │           ├─ home
│    │           └─ userModule
│    ├─ assets                      —— 项目静态资源
│    │    ├─ images
│    │    │    └─ logo.png
│    │    └─ styles                 —— 全局引用样式资源
│    │           ├─ border.css      —— 重置border样式
│    │           ├─ common.scss     —— 全局公共样式
│    │           └─ variables.scss  —— 全局公共常用工具样式，代码中以@include方式进行引用
│    ├─ components
│    │    ├─ common                 —— 全局公共组件
│    │    │    └─ HelloWorld.vue
│    │    └─ index.js               —— 全局公共组件的全局注册
│    ├─ request
│    │    ├─ axios.js               —— axios请求封装，并添加公共的请求成功与请求失败回调函数（包含全局loading状态调整）
│    │    ├─ interceptors.js        —— 请求拦截器，对请求返回不同状态码的统一处理
│    │    └─ mock
│    │           ├─ index.js        —— 请求数据模拟
│    │           └─ mockAdapter.js  —— 需要模拟异常状态请求所需的请求
│    ├─ router
│    │    ├─ auth-guard.js          —— 路由守卫
│    │    ├─ index.js               —— 自动引入所有modules模块中的路由，以及标准的单页路由配置
│    │    └─ modules
│    │           └─ userModule.js   —— 标准模块路由示例
│    ├─ store
│    │    └─ index.js               —— store 仓库
│    ├─ utils                       —— 工具类仓库
│    │    ├─ date-util.js
│    │    └─ types.js
│    └─ views                       —— 页面
│           ├─ Error.vue
│           ├─ Home.vue
│           └─ userModule
│                  ├─ home.vue
│                  └─ tradeManagement
└─ vue.config.js                        —— 项目基础配置

```

## Project setup

```
npm install -f  vvic-element-ui vvic-common  element-theme-chalk --registry=http://121.196.209.126:4873
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## node

```bash
推荐使用node10.13.0/12.13.0
推荐使用nvm进行切换，请自行google下载(NVM)

```

[⬆ Back to Top](#项目文件树)

### ⌨️Changelog

```bash
待补充

```

[⬆ Back to Top](#项目文件树)

## 📦commit 规范

为了流程规范化，我们采用了 git commit [规范](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits)

共用下列类型

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing or correcting existing tests
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

[⬆ Back to Top](#项目文件树)

## 🌱FAQ

- <a href='./FAQ.md' target='_blank'>常见问题</a>

[⬆ Back to Top](#项目文件树)
