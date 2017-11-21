const ProgressPlugin = require('webpack/lib/ProgressPlugin')

module.exports = async function module (moduleOptions) {
  const options = Object.assign({
    enabled: process.argv.indexOf('--profile') !== -1
  }, moduleOptions)

  // Ignore if disabled
  if (!options.enabled) {
    return
  }

  this.extendBuild((config, { isServer }) => {
    // Apply defaults
    // https://github.com/webpackmonitor/webpackmonitor
    // Ignore SSR bundle
    if (isServer) {
      return
    }

    // Remove fancy progress bar plugin
    const progressPlugin = config.plugins.find(plugin => plugin.constructor.name === 'ProgressPlugin')
    config.plugins = config.plugins.filter(p => p !== progressPlugin)

    // Add progress plugin with progress enabled
    config.plugins.push(new ProgressPlugin({ profile: true }))
  })
}
