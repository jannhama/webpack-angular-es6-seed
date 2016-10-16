const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + '/src',
    devtool: 'source-map',
    entry: './app.js',
    output: {
        path: __dirname + '/bin',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: /node_modules/
            },
        ]
    }
};