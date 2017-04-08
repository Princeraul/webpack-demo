import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import commonConfig from './base';

export default function (env) {
    webpackMerge(commonConfig(), {
        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false,
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production'),
                },
            }),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true,
                },
                compress: {
                    screw_ie8: true,
                },
                comments: false,
            }),
        ],
    });
}

// 提取打包css
// import ExtractTextPlugin from 'extract-text-webpack-plugin';
// 提取公共部分
//
// export default {
//     entry: {
//         bundle: './app/index.js',
//         vendor: 'moment',
//     },
//     output: {
//         filename: '[name].[chunkhash].js',
//         path: path.resolve(__dirname, 'dist'),
//     },
//     module: {
//         rules: [{
//             test: /\.css$/,
//             use: 'css-loader',
//             /**
//             //提取单独css包
//             use: ExtractTextPlugin.extract({
//                 use: 'css-loader',
//             }),
//             */
//         }],
//     },
//
//     plugins: [
//         /**
//         product单独css
//         new ExtractTextPlugin('app.min.css'),
//         将提取vendor单独提出
//         */
//         new webpack.optimize.CommonsChunkPlugin({
//             name: 'vendor',
//             minChunks(module) {
//                 return module.context && module.context.indexOf('node_modules') !== -1;
//             },
//         }),
//         new webpack.optimize.CommonsChunkPlugin({
//             name: 'manifest',
//         }),
//     ],
// };
