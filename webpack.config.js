const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
    entry: './src/main.js',
    output: {
        publicPath: './',
        path: path.resolve(__dirname, 'dist'),
        filename: 'nh-helper.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.json', '.vue', '.scss', '.css', 'ts'],
        alias: {
            '@': resolve('src'),
        },
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            hash: true,
            template: path.join(__dirname, 'src/assets/index.html'),
        }),
    ],
    mode: 'production',
}
