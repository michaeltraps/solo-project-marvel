const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
    mode: 'development',
    devServer: {
        hot: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        proxy: {
            '/api**': {
                target: 'http://localhost:3000/',
                secure: false,
            },
            '/assets/**': {
                target: 'http://localhost:3000/',
                secure: false,
            },
        },
    },
    module: {
        rules: [
            {
            test: /.js|jsx$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
        },
        {
            test: /.(css|scss)$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
        }
    ],
    },
    plugins: [
        new HWP(
            {template: path.join(__dirname, '/src/index.html')
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    
};