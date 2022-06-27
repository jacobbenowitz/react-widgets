// webpack.config.js
var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    
    entry: [
        path.resolve(__dirname, 'frontend', 'widgets.jsx'),
        path.resolve(__dirname, 'index.css'),
    ],
    output: {
        path: path.join(__dirname, 'dist'), // bundled file in dist/
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s?[ac]ss$/, 
                use: [
                    MiniCssExtractPlugin.loader, // create bundled css file
                    {
                        loader: 'css-loader', 
                        options: { url: false } 
                    },
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
};

// module.exports = {
    
//     entry: [
//         path.resolve(__dirname, 'frontend', 'widgets.jsx'),
//         path.resolve(__dirname, 'index.css'),
//     ],
//     output: {
//         path: path.join(__dirname, 'dist'), // bundled file in dist/
//         filename: 'bundle.js',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/, // applies to js files
//                 use: ['babel-loader'], // transpiles your js
//                 exclude: /node_modules/, // don't transpile node modules
//             },
//             {
//                 test: /\.s?[ac]ss$/, // applies to css/scss/sass files
//                 use: [
//                     MiniCssExtractPlugin.loader, // create bundled css file
//                     {
//                         loader: 'css-loader', // resolves @import statements
//                         options: { url: false } // don't resolve url() statements
//                     },
//                 ]
//             }
//         ],
//     },
//     plugins: [new MiniCssExtractPlugin()],
//     devtool: 'source-map',
//     resolve: {
//         extensions: ['.js', '.jsx', '*']
//     }
// };