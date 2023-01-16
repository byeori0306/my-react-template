const webpack = require("webpack");
const banner = require("./banner.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.name": JSON.stringify("byeori"),
        }),
        new webpack.BannerPlugin(banner),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],
    optimization: {
        minimizer: [`...`, new CssMinimizerPlugin()],
    },
};
