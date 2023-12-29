const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const resolvePath = (relativePath) => path.resolve(__dirname, relativePath);
const distPath = resolvePath('../dist');

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: distPath,
        filename: '[name].[contenthash].js',
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        open: false,
        static: distPath,
        compress: true,
        port: 9000,
        hot: true,
        historyApiFallback: true,
    },
    optimization: {
        minimize: false,
    },
    performance: {
        hints: false,
    },
});
