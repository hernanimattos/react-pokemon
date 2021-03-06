/* eslint-disable no-undef */
'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function () {
    return {
        mode: 'development',
        entry: { index: path.resolve(__dirname, 'src', 'index.js') },
        output: {
            path: path.resolve(__dirname, 'public'),
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'eslint-loader',
                    options: {
                        emitWarning: true,
                        failOnError: false,
                        failOnWarning: false,
                    },
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/transform-runtime'],
                    },
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        [
                                            'postcss-preset-env',
                                            {
                                                browsers: 'last 2 versions',
                                            },
                                        ],
                                    ],
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                        },
                    ],
                },
                {
                    test: /\.(png|jp(e*)g|svg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['*', '.js', '.jsx'],
        },
        devServer: {
            historyApiFallback: true,
            contentBase: './',
            hot: true,
            open: 'Chrome',
            port: 9000,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'index.html'),
            }),
        ],
    };
};
