const webpack = require("webpack");
const banner = require("./banner.js");

module.exports = {
    mode: "production",
    plugins: [
        new webpack.DefinePlugin({
            "process.env.name": JSON.stringify("byeori"),
        }),
        new webpack.BannerPlugin(banner),
    ],
};
