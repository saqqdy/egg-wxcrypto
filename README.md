<div style="text-align: center;" align="center">

# egg-wxcrypto

扩展支持微信消息加解密 nodejs 版本的 egg 插件

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

<div style="text-align: center; margin-bottom: 20px;" align="center">

</div>

## Install

```bash
# use pnpm
$ pnpm install egg-wxcrypto

# use yarn
$ yarn add egg-wxcrypto
```

## Usage

```js
// {app_root}/config/plugin.js
exports.wxcrypto = {
  enable: true,
  package: 'egg-wxcrypto'
}
```

## Configurations

```js
// {app_root}/config/config.default.js
exports.wxcrypto = {
  // convert: false,
  // wxcryptoRoot: false,
}
```

module.exports = HomeController

````

## Extend Rules

- app.js

```js
app.validator.addRule('object', (rule, value) => {
  try {
    JSON.parse(value)
  } catch (err) {
    return 'must be json string'
  }
})
````

## Change logs

[Change logs](./CHANGELOG.md)

## Questions & Suggestions

Please open an issue [here](https://github.com/saqqdy/egg-wxcrypto/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/egg-wxcrypto.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-wxcrypto
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/egg-wxcrypto/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/egg-wxcrypto&utm_campaign=Badge_Grade
[snyk-image]: https://snyk.io/test/npm/egg-wxcrypto/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-wxcrypto
[download-image]: https://img.shields.io/npm/dm/egg-wxcrypto.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-wxcrypto
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_egg-wxcrypto
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_egg-wxcrypto
