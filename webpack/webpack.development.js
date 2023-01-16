const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
    mode: "development",
    devServer: {
        hot: true,
        port: 3000,
        client: {
            overlay: true,
        },
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            plugins: [require.resolve("react-refresh/babel")],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.name": JSON.stringify("bangul"),
        }),
        new ReactRefreshWebpackPlugin(),
    ],
};
