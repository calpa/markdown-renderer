const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      main: './lambda/functions/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
