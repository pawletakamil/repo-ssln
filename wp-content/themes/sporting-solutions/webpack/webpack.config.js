const Path = require('path');
const Webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractSASS = new ExtractTextPlugin('style.css');
const processImgs = require('./webpack-img-processor.js');

module.exports = (options) => {
    const dest = Path.join(__dirname, '../dist');
    const wpThemeImages = Path.join(__dirname, '../images');
    const wpThemeFonts = Path.join(__dirname, '../fonts');

    let webpackConfig = {
        devtool: options.devtool,
        entry: [
            './src/scripts/index'
        ],
        output: {
            path: dest,
            filename: 'main.js'
        },
        plugins: [
            new Webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(options.isProduction ? 'production' : 'development')
                }
            }),
            new Webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                'window.jQuery': 'jquery',
                "Tether": 'tether'
            }),
            new CopyWebpackPlugin([
                {from: 'src/styles/images/', to: wpThemeImages, transform: processImgs},
                {from: 'src/styles/images', to: 'images', transform: processImgs},

            ])
        ],
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-2']
                    }
                }
            },
            {
                test: /\.(eot|ttf|svg|woff|woff2|png|jp(e*)g|gif)$/,
                use: {
                    loader: 'file-loader'
                }
            }]

        }
    };

    if (options.isProduction) {
        webpackConfig.entry = ['./src/scripts/index'];

        webpackConfig.plugins.push(
            new Webpack.optimize.UglifyJsPlugin({
                compressor: {
                    warnings: false,
                    drop_console: true
                }
            }),
            ExtractSASS
        );

        webpackConfig.module.rules.push({
            test: /\.s?css/i,
            use: ExtractSASS.extract(['css-loader?sourceMap=true&minimize=true', 'sass-loader'])
        });

    } else {
        webpackConfig.plugins.push( ExtractSASS );

        webpackConfig.module.rules.push({
            test: /\.s?css$/i,
            use: ExtractSASS.extract(['css-loader?sourceMap=true&minimize=true', 'sass-loader'])
        }, {
            test: /\.js$/,
            use: 'eslint-loader',
            exclude: /node_modules/
        });

    }

    return webpackConfig;

};
