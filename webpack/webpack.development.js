const webpack = require("webpack");

module.exports = {
    mode: "development",
    devServer: {
        port: 3000,
        client: {
            overlay: true,
        },
    },
    devtool: "cheap-module-source-map",
    plugins: [
        new webpack.DefinePlugin({
            "process.env.name": JSON.stringify("bangul"),
        }),
    ],
};
