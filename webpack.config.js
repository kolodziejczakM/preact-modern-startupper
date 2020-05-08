/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/camelcase */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const OfflinePlugin = require('offline-plugin');
const Dotenv = require('dotenv-webpack');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const CircularDependencyPlugin = require('circular-dependency-plugin');

const pwaManifest = new WebpackPwaManifest({
    name: 'preact-modern-startupper',
    short_name: 'preact',
    description: 'Minimalistic & modern boilerplate',
    background_color: '#ffffff',
    crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
    icons: [],
});

const htmlPluginSetup = new HtmlWebpackPlugin({
    template: './src/index.html',
    favicon: './src/assets/favicon-16x16.png',
});

const development = {
    entry: './src/index.tsx',
    mode: 'development',
    name: 'dev', // used in npm scripts
    output: {
        filename: 'bundle.js',
    },
    devtool: 'eval',
    stats: {
        colors: true,
        entrypoints: false,
        modules: false,
    },
    devServer: {
        hot: true,
        historyApiFallback: {
            disableDotRule: true,
        },
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'babel-loader',
            },
            {
                test: /\.(webp|png|svg|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        htmlPluginSetup,
        new Dotenv(),
        new webpack.HotModuleReplacementPlugin(),
        pwaManifest,
        new OfflinePlugin(),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
        }),
    ],
};

const production = {
    ...development,
    devServer: undefined,
    mode: 'production',
    name: 'prod',
    devtool: 'source-maps',
    plugins: [
        new CleanWebpackPlugin(),
        htmlPluginSetup,
        new Dotenv(), // NOTE: It's recommended to declare your production envs outside application code.
        new PrerenderSPAPlugin({
            staticDir: path.join(__dirname, 'dist'),
            routes: ['/', '/about-me'], // These pages will be pre-rendered
            minify: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                decodeEntities: true,
                keepClosingSlash: true,
                sortAttributes: true,
            },
            renderer: new Renderer(),
        }),
        pwaManifest,
        new OfflinePlugin({
            externals: ['about-me/index.html'], // to support refresh on pre-rendered document while being offline
            responseStrategy: 'network-first',
            rewrites: (asset) => {
                if (asset.endsWith('html') && asset !== 'index.html') {
                    return asset.split('/')[0];
                } else if (asset === 'index.html') {
                    return '/';
                }

                return asset;
            },
        }),
    ],
};

module.exports = [development, production];
