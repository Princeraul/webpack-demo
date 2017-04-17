import webpack from 'webpack';
// import ManifestPlugin from 'webpack-manifest-plugin';
import webpackMerge from 'webpack-merge';
import commonConfig from './baseConfig';
import * as config from './pathConfig';


export default function () {
    return webpackMerge(commonConfig(), {
        output: {
            path: config.BUILD_PATH,
            filename: './js/[name].[chunkhash].js',
        },
        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false,
            }),
            // new ManifestPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production'),
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
