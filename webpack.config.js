const { Configuration } = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader/dist/index')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
/**
 * @type {Configuration}
*/
const config = {
    mode: "development",
    entry: "./src/main.ts", // 入口文件
    module: {
        // 配置规则
        rules: [
            {
                test: /\.ts$/,  //解析ts
                loader: "ts-loader",
                options: {
                    configFile: path.resolve(process.cwd(), 'tsconfig.json'), // ts 的配置文件
                    appendTsSuffixTo: [/\.vue$/] // 针对vue 单文件处理
                },
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.less$/, //解析 less
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.css$/, //解析css
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.png/,
                type: 'asset/resource'
            },
            // {
            //     test: /\.m?js$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: "babel-loader"
            //     }
            // },
            
        ]
    },
    output: { // 出口文件
        filename: "[hash].js", // 打完包后的文件名
        path: path.resolve(__dirname, "dist") // 输出的位置
    },

    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src") // 别名
        },
        extensions: ['.js', '.json', '.vue', '.ts', '.tsx'] // 自动识别后缀
    },


    // 配置插件
    plugins: [
        new htmlWebpackPlugin({
            template: "./public/index.html" // html模版
        }),
        new CleanWebpackPlugin(), //打包清空dist
        new VueLoaderPlugin(), //解析vue
        // new FriendlyErrorsWebpackPlugin({
        //     compilationSuccessInfo:{ //美化样式
        //         messages:['You application is running here http://localhost:9001']
        //     }
           
        // })
    ],
    stats:"errors-only", //取消提示
    devServer: {
        proxy: {
            // 跨域
            // '/api': ''
        },
        port: 9001,
        hot: true,
        open: true,
    },
    externals: {
        vue: "Vue" // 性能优化CDN 引入 ，需要在html文件配置CDN地址<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    },

}
module.exports = config