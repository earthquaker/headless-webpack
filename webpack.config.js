var path = require('path');

module.exports = {
    context: path.resolve('js'),
    entry: ["../src"],
    output: {
        path: path.resolve('build/'),
        publicPath: '/public/',
        filename: "index.js"
    },
    devServer: {
        contentBase: 'public'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    }
};