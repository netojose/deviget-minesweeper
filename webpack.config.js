module.exports = {
  entry: __dirname + '/resources/assets/js/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: []
};
