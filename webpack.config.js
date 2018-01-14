var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var pkg = require('./package.json');

var entries = {
    vendor: Object.keys(pkg.dependencies)
};

var routeDir = path.resolve(__dirname, 'src/main/vue/routes/');
var routeFiles = glob.sync(path.resolve(routeDir, '**/main.js'));
routeFiles.forEach(function (fileName) {
    var routeName = fileName.replace(routeDir.replace(/\\/g, '/'), '').replace(/\//g, '').replace('main.js', '');
    entries[routeName] = fileName;
});

var config = {
    entry: entries,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build/generated-resources/vue/static/js')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        })
    ]
};

config.devtool = 'source-map';

module.exports = config;