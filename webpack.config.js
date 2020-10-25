const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: {
		dummpApp: './dummy/src/index.js',
	},
	output: {
		path: path.resolve('./dist/dummyApp'),
	},
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
      template: "./dummy/src/assets/index.html",
      filename: "./index.html"
    })
  ],
};
