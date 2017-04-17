
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as config from './pathConfig';

export default function () {
    return {
        entry: {
            bundle: config.SRC_ROOT,
            vendor: 'moment',
        },
        module: {
            rules: [{
                test: /\.css$/,
                // use: 'css-loader',
                // 提取单独css包
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                }),
            }],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'webpack-demo',
                filename: 'index.html',
            }),
            new ExtractTextPlugin('css/app.min.css'),
            /**
            将提取vendor单独提出
            */
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks(module) {
                    return module.context && module.context.indexOf('node_modules') !== -1;
                },
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common',
            }),
        ],
    };
}
