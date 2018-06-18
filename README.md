
<div align="center">
  <img width="50%" src="http://pre06.deviantart.net/ebef/th/pre/i/2016/175/b/a/spongebob_spongebob_squarepants_33210738_2284_2140_by_holmesxeoncore-da7ikxm.jpg" alt="Spongebob"/>
</div>
<h1 align="center">imready</h1>
<div align="center">
  <strong>Promise based wrapper for DOMContentLoaded</strong>
</div>
<div align="center">
  <a href="https://npmjs.org/package/@tiaanduplessis/imready">
    <img src="https://img.shields.io/npm/v/@tiaanduplessis/imready.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/@tiaanduplessis/imready">
  <img src="https://img.shields.io/npm/dm/@tiaanduplessis/imready.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/imready">
    <img src="https://img.shields.io/travis/tiaanduplessis/imready.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/imready/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/@tiaanduplessis/imready.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/imready/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/imready.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/imready/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/imready.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20imready!%20https://github.com/tiaanduplessis/imready%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/imready.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="https://github.com/tiaanduplessis">tiaanduplessis</a> and <a href="https://github.com/tiaanduplessis/imready/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/imready.svg)](https://greenkeeper.io/)

```sh
$ npm install @tiaanduplessis/imready
# OR
$ yarn add @tiaanduplessis/imready
```

## Usage

The module exports a singelton promise that can be used in different modules. This ensures that only one `DOMContentLoaded` handler is bound.

```js
import imready from '@tiaanduplessis/imready'

imready.then(loaded => console.log('DOM Loaded:', loaded))
```

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/imready/issues).

## License

Licensed under the MIT License.
