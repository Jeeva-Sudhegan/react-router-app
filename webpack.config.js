var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: "/node_modules/",
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }   // comes from back to first i.e. first css-loader and then style-loader
        ]
    },
    mode: "development",    // "production"
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}

module.exports = config;