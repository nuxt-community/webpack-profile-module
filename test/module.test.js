jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000
process.env.PORT = process.env.PORT || 5060
process.env.NODE_ENV = 'production'

const {Nuxt, Builder} = require('nuxt')

const stdMocks = require('std-mocks')

const config = require('./fixture/nuxt.config')

describe('Module', () => {
  test('profile', async () => {
    let nuxt = new Nuxt(config)
    stdMocks.use()
    await new Builder(nuxt).build()
    stdMocks.restore()

    const output = stdMocks.flush().stderr.join('\r\n')
    expect(output).toContain('additional chunk assets processing')
  })
})
