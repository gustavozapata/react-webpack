const path = require("path");

module.exports = {
  // this is where the files are sent once they are bundled
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
  },
  // server with live updates
  devServer: {
    port: 3010,
    hot: true, //watch for changes
  },
  module: {
    // these rules handle different set of files
    rules: [
      {
        test: /\.(js|jsx)$/, // matches .js and .jsx file
        exclude: /node_modules/, // exclude node_modules
        // when we find the above files, do
        use: {
          // load into webpack using the babel loader
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
