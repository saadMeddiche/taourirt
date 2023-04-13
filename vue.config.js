const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // https://cli.vuejs.org/config/#publicpath
  publicPath: process.env.NODE_ENV === 'production'
  ? '/taourirt/'
  : '/'
})
