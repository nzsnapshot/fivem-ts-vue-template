const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const serverBuild = path.resolve(__dirname, "dist/server");
const clientBuild = path.resolve(__dirname, "dist/client");
const Delay = (ms) => new Promise((res) => setTimeout(res, ms));
const axios = require("axios");

const CURRENT_NAME = "lc-ui-typescript-template";

const client = {
  entry: "./client/main.ts",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx", // Or 'ts' if you don't need tsx
          target: "es2015",
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    {
      apply: (compiler) => {
        compiler.hooks.afterCompile.tap("EmitFetch", async () => {
          await Delay(50);
          console.log("Running Restart");
          axios.get(`http://localhost:30110/lc-staff/rr`, {
            method: "GET",
            headers: {
              ["authorization"]: "3faaa109-39a1-4c2f-bb6e-806245f541e7",
            },
          });
        });
      },
    },
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "client.js",
    path: path.resolve(clientBuild),
  },
};

const server = {
  entry: "./server/main.ts",
  target: "node",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx", // Or 'ts' if you don't need tsx
          target: "es2015",
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    {
      apply: (compiler) => {
        compiler.hooks.afterCompile.tap("EmitFetch", async () => {
          await Delay(50);
          console.log("Running Restart");
          axios.get(`http://localhost:30110/lc-staff/rr`, {
            method: "GET",
            headers: {
              ["authorization"]: "3faaa109-39a1-4c2f-bb6e-806245f541e7",
            },
          });
        });
      },
    },
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "server.js",
    path: path.resolve(serverBuild),
  },
};

module.exports = [server, client];
