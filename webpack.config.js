// webpack.config.js
const path = require('path');

module.exports = {
    context: __dirname,
    entry: './frontend/widgets.jsx',
    output: {
        path: path.join(__dirname),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: [
                            '@babel/env',
                            '@babel/preset-react'
                        ]
                    }
                },
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};