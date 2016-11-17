const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var NODE_ENV = process.env.NODE_ENV || 'development';

var webpackConf = {
    cache: true,
    context: path.join(__dirname, 'src'),
    devtool: 'eval',
    entry: './app.js',
    output: {
        path: path.join(__dirname, 'bin'),
        filename: 'app.bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules']

    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.html$/,
            loader: 'html-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            loader: 'file-loader'
        }]
    },
    plugins: [

        new ngAnnotatePlugin({
            add: true,
            // other ng-annotate options here
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};

if (NODE_ENV === 'production') {
    webpackConf.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: true
        }
    }));
}

module.exports = webpackConf;
