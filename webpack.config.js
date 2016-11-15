var path = require('path');
var fs = require('fs');

var nodeModules = {};

fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

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