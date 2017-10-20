const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const ProgressPlugin = require('webpack/lib/ProgressPlugin')

module.exports = async function module(moduleOptions) {
  const options = Object.assign({}, moduleOptions)

  this.extendBuild(({plugins}, {isServer}) => {
    // // Ignore SSR bundle
    // if (isServer) {
    //   return;
    // }
    // Add WebpackMonitor plugin

    const badIndex = plugins.findIndex(
      plugin =>
        (plugin.hasOwnProperty('profile') && plugin.profile === undefined) ||
        plugin instanceof ProgressPlugin ||
        plugin instanceof ProgressBarPlugin,
    )

    const env = isServer ? 'SERV' : 'CLIE'
    for (const plugin of plugins) {
      console.log(
        env,
        plugin.hasOwnProperty('profile'),
        plugin.profile === undefined,
        plugin instanceof ProgressPlugin,
        plugin instanceof ProgressBarPlugin,
        plugin,
      )
    }
    console.log(env, 'BAD INDEX:', badIndex)
    if (badIndex !== -1) plugins.splice(badIndex, 1)
    plugins.push(new ProgressPlugin({profile: true}))
  })
}
