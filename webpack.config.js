/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const development = {
    entry: './src/index.tsx',
    mode: 'development',
    name: 'dev', // used in npm scripts
    output: {
        filename: 'bundle.js',
    },
    devtool: 'eval',
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'awesome-typescript-loader',
                options: {
                    configFile: 'tsconfig.json',
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};

const production = {
    ...development,
    devServer: undefined,
    mode: 'production',
    name: 'prod',
    devtool: 'source-maps',
};

module.exports = [development, production];
