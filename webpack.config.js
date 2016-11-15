var path = require('path');

var nodeModules = {};

nodeModules['casper'] = 'commonjs casper';

module.exports = {
    context: path.resolve('js'),
    entry: ["../src"],
    output: {
        path: path.resolve('build/'),
        publicPath: '/public/',
        filename: "index.js"
    },
    externals: nodeModules,
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