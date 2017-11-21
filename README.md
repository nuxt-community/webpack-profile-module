# Webpack profile module for Nuxt.js
[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/webpack-profile/latest.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/webpack-profile)
[![npm](https://img.shields.io/npm/dt/@nuxtjs/webpack-profile.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/webpack-profile)
[![CircleCI](https://img.shields.io/circleci/project/github/nuxt-community/webpack-profile-module.svg?style=flat-square)](https://circleci.com/gh/nuxt-community/webpack-profile-module)
[![Codecov](https://img.shields.io/codecov/c/github/nuxt-community/webpack-profile-module.svg?style=flat-square)](https://codecov.io/gh/nuxt-community/webpack-profile-module)
[![Dependencies](https://david-dm.org/nuxt-community/webpack-profile-module/status.svg?style=flat-square)](https://david-dm.org/)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> Nuxt module to display webpack build progress steps with core ProgressPlugin

[📖 **Release Notes**](./CHANGELOG.md)

## Setup
- Add `@nuxtjs/webpack-profile` dependency using yarn or npm to your project
- Add `@nuxtjs/webpack-profile` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    '@nuxtjs/webpack-profile',
 ]
}
```

## Usage

You can use `yarn nuxt build --profile` to disable fancy progress bar and inspect build stats and timings.

## Example output

```ini
15034ms building modules
55ms sealing
1ms optimizing
0ms basic module optimization
0ms module optimization
10ms advanced module optimization
20ms basic chunk optimization
0ms chunk optimization
1ms advanced chunk optimization
1856ms building modules
0ms module and chunk tree optimization
0ms chunk modules optimization
0ms advanced chunk modules optimization
0ms module reviving
49ms module order optimization
2ms module id optimization
0ms chunk reviving
4ms chunk order optimization
19ms chunk id optimization
44ms hashing
1ms module assets processing
78ms chunk assets processing
3ms additional chunk assets processing
3ms recording
2395ms additional asset processing
3526ms chunk asset optimization
407ms asset optimization
94ms emitting
Hash: 536cd574c2466b29c1d5
Version: webpack 3.8.1
Time: 34621ms
```

## License

[MIT License](./LICENSE)

Copyright (c) Nuxt Community
