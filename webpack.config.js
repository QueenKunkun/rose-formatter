module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    globalObject: 'this',
    library: 'formatter',
    libraryTarget: 'umd',
    filename: 'index.js'
  },
};