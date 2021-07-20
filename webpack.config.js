const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  entry: {
    main: "./src/lib.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "lib"),
    library: "portal-ui",
    libraryTarget: "umd",
  },
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[name]_[local]__[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
        include: path.resolve(__dirname, "./src"),
      },
    ],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  mode: "development",
  optimization: {
    usedExports: true,
  },
};
