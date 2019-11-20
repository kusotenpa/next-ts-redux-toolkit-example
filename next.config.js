const withStylus = require('@zeit/next-stylus')
const poststylus = require('poststylus')
const autoprefixer = require('autoprefixer')

module.exports = withStylus({
  cssModules: true,
  stylusLoaderOptions: {
    use: [
      poststylus([
        autoprefixer(),
      ]),
    ],
  },
  webpack(config) {
    config.plugins = config.plugins.filter(plugin => {
      return plugin.constructor.name !== 'ForkTsCheckerWebpackPlugin'
    })

    return config
  },
})
