const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const tsConfigPath = path.resolve(__dirname, "..", "./tsconfig.json");

module.exports = {
    entry: path.resolve(__dirname, "..", "./src/index.tsx"),
    resolve: {
        plugins: [
            new TsconfigPathsPlugin({
                configFile: tsConfigPath,
            }),
        ],
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource",
                generator: {
                    filename: "static/image/[name].[ext]?[hash]",
                },
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ["@svgr/webpack"],
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: "asset",
                generator: {
                    filename: "static/font/[name].[ext]?[hash]",
                },
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "..", "./.build"),
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "..", "./src/index.html"),
        }),
    ],
};
