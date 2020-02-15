const { join } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
    entry: join(__dirname, './src/main.js'),
    output: {
        path: join(__dirname, './dist'),
        filename: '[name]-[hash].bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: [
            '.js',
            '.vue',
        ],
        alias: {
            '@': join(__dirname, 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
    devServer: {
        compress: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        overlay: true,
        port: 5001,
        stats: {
            normal: true,
        },
    },
    plugins: [
        new HTMLWebpackPlugin({
            showErrors: true,
            title: 'The Selling App mockup',
            template: './src/index.html',
        }),
        new VueLoaderPlugin(),
        new HotModuleReplacementPlugin(),
    ],
};