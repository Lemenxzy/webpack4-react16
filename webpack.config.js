/**
 * Created by 70469 on 2018/4/3.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackHarddiskPlugin =  require('html-webpack-harddisk-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = (env,argv)=>{

    //html-webpack-harddisk-plugin 插件配置
    let obj = {
        inject: true,
        template:  path.resolve(__dirname, 'index.html'),
        //强行寫入html的script标签
        alwaysWriteToDisk: true,
        hash: true
    };
    if (argv.mode === 'production'){
        obj = Object.assign({},obj,{
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            }
        })
    }

    return {
        entry: ['babel-polyfill','./src/example/index.js'],
        devtool: 'cheap-module-source-map',
        devServer: {
            contentBase: './dist',
            historyApiFallback:true,
            port:9000
        },
        module: {
            rules: [
                {
                    test: /\.js|jsx$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-es2015","@babel/preset-stage-0","@babel/preset-react"]
                        }
                  
                {
                    test: /\.scss$/,
                    exclude:path.reso  }
        },lve(__dirname, 'node_modules'),
                    use: [
                        require.resolve('style-loader'),
                        {
                            loader: require.resolve('css-loader'),
                            options: {
                                importLoaders: 1,
                                modules:true,
                                localIdentName:'[name]__[local]-[hash:base64:6]'
                            },
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                }
            ]
        },
        plugins: [
            //每次编译前先删除dist
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin(obj),
            //强行寫入html的script标签
            new HtmlWebpackHarddiskPlugin(),
            new OpenBrowserPlugin({ url: 'http://localhost:9000' })
        ]
    }
};