import webpackMerge from 'webpack-merge';
import commonConfig from './baseConfig';
import * as config from './pathConfig';

export default function () {
    return webpackMerge(commonConfig(), {
        devtool: 'cheap-module-source-map',
        output: {
            path: config.DEV_PATH,
            filename: 'js/[name].js',
            publicPath: '/assets/',
            sourceMapFilename: 'js/[name].map',
        },
        devServer: {
            contentBase: config.DEV_PATH,
            compress: true,
            watchContentBase: true,
            port: 7777,
        },
    });
}
