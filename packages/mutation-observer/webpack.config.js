const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',

    entry: './src/index.ts',

    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js'
    },

    devServer: {
        port: 3000,
        open: true,
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    plugins: [
        new HTMLPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            inject: true,
            hash: true
        })
    ]
}