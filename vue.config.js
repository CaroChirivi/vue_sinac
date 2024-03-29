module.exports = {
  "lintOnSave": false,
  "transpileDependencies": [
    "vuetify"
  ],
  "pages": {
    "index": {
      "entry": 'src/main.js',
      "title": 'SINAC'
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    // add replacement loader(s)
    svgRule
      .use('vue-svg-loader')
        .loader('vue-svg-loader')
    config.module.rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader').loader('file-loader')
  }
};