process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')
const base = environment.toWebpackConfig()

module.exports = {
  ...base,
  devServer: {
    hot: true,
  }
}
