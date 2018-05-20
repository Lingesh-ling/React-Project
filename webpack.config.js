const path = require('path')
module.exports = {
  entry:'./src/app.js',
  output:{
    path:path.join(__dirname,'Public'),
    filename:'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {loader: 'babel-loader'},
        ],
        exclude: /node_modules/
      },
      {
        test:/\.s?css$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool:'cheap-module-eval-source-map',
  devServer:{
    contentBase:path.join(__dirname,'Public'),
    historyApiFallback:true
  }

}
