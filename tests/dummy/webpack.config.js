const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader"
        }]
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/assets/index.html",
      filename: "./index.html"
    })
  ],
  resolve: {
    alias: {
      'dxCommon/test': path.resolve(__dirname, '../../packages/dx-header/lib/dx-header.js'),
    }
  },
};
