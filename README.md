手写webpck 
1. 创建文件
2. npm init -y  生成webpack.json
3. tsc --init  或者 npm init -g typescript 生成tsconfig.json
4. src pulic 文件下 新建项目文件 
5. 新建webpack.config.js  配置文件 
6. 安装 npm i webpack webpack-cli
7. 启动服务 npm install  webpack-dev-server
8. 安装插件 npm install html-webpack-plugin
9. 配置webpack.config.js
10. 配置打包命令package.json "build": "webpack"  "dev":"webpack-dev-serve"
11. 安装依赖
    "dependencies": {
        "@vue/compiler-sfc": "^3.2.38", //解析vue文件
        "clean-webpack-plugin": "^4.0.0", //打包 的时候清空dist
        "css-loader": "^6.7.1", //处理css文件
        "friendly-errors-webpack-plugin": "^1.7.0", //美化dev
        "html-webpack-plugin": "^5.5.0", //html 模板
        "less": "^4.1.3",  //处理less
        "less-loader": "^11.0.0", //处理less文件
        "style-loader": "^3.3.1", //处理style样式
        "ts-loader": "^9.3.1", //处理ts
        "typescript": "^4.8.2", //ts
        "vue": "^3.2.38", //vue
        "vue-loader": "^17.0.0", //解析vue
        "webpack": "^5.74.0",
        "webpack-cli": "^4.10.0",
        "webpack-dev-server": "^4.10.0"
    }

12. vue 的声明文件 env.d.ts
