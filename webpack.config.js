const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (mode) => {
  const isDev = (mode === 'development');
  return {
    mode,
    entry: './src/index.js',
    output: {
      filename: isDev ? 'relativetime.js' : 'relativetime.min.js',
      path: path.join(__dirname, 'dist'),
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'relative time',
        tempalte: path.join(__dirname, './tpl/index.html'),
      }),
    ],
    devtool: isDev ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
  };
};
