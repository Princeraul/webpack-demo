function buildConfig(env) {
    return require('./webpack/' + env + '.js')(env);
}

module.exports = buildConfig;

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
