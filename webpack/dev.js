import path from 'path';

export default {
    output: {
        devtool: 'cleap-module-source-map',
        path: path.join(__dirname, '../dist/assets'),
        publicPath: './publicPath',
        sourceMapFileName: '[name].map',
    },
    devsever: {
        port: 7777,
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
    },
};
