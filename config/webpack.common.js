const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const resolvePath = (relativePath) => path.resolve(__dirname, relativePath);
const srcPath = resolvePath('../src');
const distPath = resolvePath('../dist');

module.exports = {
    context: srcPath,
    entry: './index.jsx',
    output: {
        filename: '[name].[contenthash].js',
        path: distPath,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.(png|svg|ico)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.scss$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[local]--[hash:base64:5]',
                        },
                    },
                }, 'sass-loader']
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: 'app/**/*.*',
                    to: distPath,
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: true,
            minify: false,
        }),
        new ESLintPlugin({
            extensions: ['js', 'jsx'],
            exclude: ['node_modules'],
            overrideConfigFile: resolvePath('.eslintrc.js'),
            failOnError: false,
            quiet: true,
        }),
    ],
    resolve: {
        alias: {
            'shared/ui': resolvePath('../src/shared/ui'),
            'app/icons': resolvePath('../src/app/icons'),
        },
        extensions: ['.js', '.jsx'],
    },
};
