const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/index.jsx'),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.join(__dirname, '/public/'),
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, "/client/"),
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: path.join(__dirname, '/public/'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ]
  },
  mode: "development"
}
