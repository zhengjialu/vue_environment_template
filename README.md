# Vue 单页面 Template 环境

> 框架 Vue：https://cn.vuejs.org/  
> UI 库 Element：https://element.eleme.cn/#/zh-CN  
> 路由 Vue-router：https://router.vuejs.org/zh/  
> 状态管理 Vuex：https://vuex.vuejs.org/zh/

```
├── README.md
├── config                         环境配置目录
│   ├── project.config.js          开发环境配置项
│   └── webpack.config.js          webpack 配置
├── mock                           mock 数据配置目录
│   └── mock-hello.json
├── package.json
├── postcss.config.js              CSS 预处理配置
├── .babelrc                       babel 配置项
├── .nycrc                         单元测试配置项
├── .gitignore
├── src                            页面开发
│   ├── assets                     项目资源
│   │   ├── icons                  项目 icon 资源
│   │   └── images                 项目 image 资源
│   ├── common                     公共方法
│   │   ├── request-io.js          IO 请求工具
│   │   └── utils.js               自定义工具函数
│   ├── components                 页面组件
│   ├── index.ejs                  入口文件
│   ├── layout                     项目页面布局
│   │   ├── frame                  项目全局框架
│   │   │   ├── frame.styl
│   │   │   ├── frame.vue
│   │   │   ├── index.js
│   │   │   ├── nav.vue
│   │   │   └── routerLink.js      路由链接配置
│   ├── pages                      前端页面
│   │   ├── index.js               全局组件注册
│   │   └── page-hello             项目模块
│   │       ├── hello.styl         模块样式
│   │       ├── index.js           模块资源入口文件
│   │       ├── io.js              页面 IO 定义
│   │       ├── page-hello.vue     模块开发内容
│   │       └── store.js           私有状态管理
│   ├── router                     路由组件渲染配置
│   │   └── index.js
│   └── store                      全局状态管理配置
│       ├── actions.js
│       ├── getters.js
│       ├── index.js
│       ├── modules.js             私有状态管理注册
│       └── mutations.js
├── test                           单元测试
│   └── *.test.js                  单元测试文件
└── vue-project-tree
```
