const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.coffee',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.coffee$/,
        use: ['coffee-loader'],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        use: {
          loader: 'babel-loader',
          options: { presets: [['@babel/preset-env', { targets: 'defaults' }]] },
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: { pretty: true },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.coffee', '.js', '.pug'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      scriptLoading: 'blocking',
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    open: true,
    port: 8080,
    static: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        uglifyOptions: {
          compress: {
            drop_console: true,
          },
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};
