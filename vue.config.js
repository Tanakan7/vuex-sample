const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .options({
        fix: true,
      })
  },
  publicPath: "./",
  assetsDir: "",
  outputDir: "dist"
}
