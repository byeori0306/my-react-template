const webpack = require("webpack");
const banner = require("./banner.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    plugins: [
        new webpack.DefinePlugin({
            "process.env.name": JSON.stringify("byeori"),
        }),
        new webpack.BannerPlugin(banner),
        new CleanWebpackPlugin(),
    ],
};
