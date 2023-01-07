const { merge } = require("webpack-merge");

module.exports = (envVariables) => {
    const { env } = envVariables;
    const commonConfig = require("./webpack.common.js");
    const envConfig = require(`./webpack.${env}.js`);
    const config = merge(commonConfig, envConfig);

    return config;
};
