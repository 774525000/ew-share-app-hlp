const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js'
    },

    devServer: {
        port: 3006,
        open: true,
        hot: true
    },


    plugins: [
        new HTMLPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            inject: true,
            hash: true
        })
    ]
}