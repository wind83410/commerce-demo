module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/commerce-demo/'
    : '/',
  pluginOptions: {
    i18n: {
      locale: 'tw',
      fallbackLocale: 'en',
      localeDir: 'src',
      enableInSFC: false
    }
  }
}
