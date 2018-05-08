/**
 * Created by 70469 on 2018/4/9.
 */
const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude:path.resolve(__dirname, 'node_modules'),
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
    }
};