var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var pkg = require('./package.json');

var entries = {
    vendor: Object.keys(pkg.dependencies),
    global: path.resolve(__dirname, 'src/main/react/global.js')
};

var controllerDir = path.resolve(__dirname, 'src/main/react/controller/');
var controllerFiles = glob.sync(path.resolve(controllerDir, '*.js'));
controllerFiles.forEach(function (fileName) {
    var controllerName = fileName.replace(controllerDir.replace(/\\/g, '/'), '').replace('/', '').replace('.js', '');
    entries[controllerName] = fileName;
});

var config = {
    entry: entries,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build/generated-resources/react/static/js')
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, 'src/main/react')
            ],
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})
        }, {
            test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)|\.png($|\?)/,
            loader: 'url-loader'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        }),
        new ExtractTextPlugin('../css/[name].css')
    ],
    resolve: {
        alias: {
            component: path.resolve(__dirname, 'src/main/react/component/')
        }
    }
};

config.devtool = 'source-map';

module.exports = config;