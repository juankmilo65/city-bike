const path = require("path");
var nodeExternals = require("webpack-node-externals");

const serverConfig = {
    mode: process.env.NODE_ENV || "development",
    entry: "./src/server/server.js",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    configFile: "tsconfig.server.json"
                }
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: "./",
        hot: true
    },
    output: {
        filename: "server.js",
        path: path.resolve(__dirname, "dist")
    },
    target: "node",
    node: {
        __dirname: false
    },
    externals: [nodeExternals()]
};

module.exports = [serverConfig];
