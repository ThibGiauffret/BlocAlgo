const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CreateFileWebpack = require("create-file-webpack");
const path = require("path");
const util = require("util");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const rootPath = path.resolve(__dirname, "..");
const buildPath = path.join(rootPath, "build");
const assetsPath = path.join(buildPath, "assets");
const devDependencies = require(path.join(
  rootPath,
  "package.json"
)).devDependencies;
const kernelVersion = devDependencies["@basthon/gui-base"];

// build sys_info variable
async function sys_info() {
  if (this.sys_info != null) return this.sys_info;
  var gitRepoInfo = require("git-repo-info")();
  this.sys_info = {
    "kernel-version": kernelVersion,
    "commit-hash": gitRepoInfo.sha,
    "commit-date": gitRepoInfo.committerDate,
  };
  return this.sys_info;
}

// build version file
async function versionFile() {
  return new CreateFileWebpack({
    content: JSON.stringify(await sys_info(), null, 2),
    fileName: "assets/version",
    path: buildPath,
  });
}

// generate index.html from template src/templates/index.html
async function html() {
  const sysInfo = JSON.stringify(await sys_info());
  return new HtmlWebpackPlugin({
    hash: true,
    sys_info: sysInfo,
    template: "./src/templates/index.html",
    filename: `index.html`,
    publicPath: "",
  });
}

// bundle css
function css() {
  return new MiniCssExtractPlugin({
    filename: "assets/[name].[contenthash].css",
  });
}

function copies() {
  return new CopyPlugin({
    patterns: [
      {
        // htaccess
        from: "./src/.htaccess",
        to: buildPath,
      },
      {
        // python3 files
        from: "**/*",
        context: "./node_modules/@basthon/kernel-python3/lib/dist/",
        to: path.join(assetsPath, kernelVersion, "python3"),
        toType: "dir",
      },
      {
        // examples
        from: "**/*",
        context: "./src/examples/",
        to: buildPath + "/examples",
      },
    ],
  });
}

// ace's webpack-resolver needs this to put files under assets/
function inlineFileLoader() {
  return new webpack.NormalModuleReplacementPlugin(
    /^file-loader\?esModule=false!(.*)/,
    (res) => {
      const out = res.request.replace(
        /^file-loader\?esModule=false!/,
        "file-loader?esModule=false&outputPath=assets!"
      );
      res.request = out;
    }
  );
}

async function main() {
  return {
    entry: "./src/ts/main.ts",
    output: {
      filename: "assets/[name].[contenthash].js",
      chunkFilename: "assets/[name].[contenthash].js",
      assetModuleFilename: "assets/[hash][ext][query]",
      path: buildPath,
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          // specific rule for kernel-sql
          resourceQuery: /asset-url/,
          type: "asset/resource",
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
      fallback: {
        // for ocaml bundle
        constants: require.resolve("constants-browserify"),
        tty: require.resolve("tty-browserify"),
        fs: false,
        child_process: false,
        // for sql bundle
        crypto: require.resolve("crypto-browserify"),
        path: require.resolve("path-browserify"),
        buffer: require.resolve("buffer"),
        stream: require.resolve("stream-browserify"),
      },
    },
    plugins: [
      await html(),
      css(),
      inlineFileLoader(),
      await versionFile(),
      copies(),
    ],
    devServer: {
      static: {
        directory: buildPath,
      },
      devMiddleware: {
        writeToDisk: true,
      },
      compress: true,
      port: 8888,
    },
  };
}

module.exports = main;
