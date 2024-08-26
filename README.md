<p align='right'>
  <a href='./README_CN.md' target='_blank' hreflang='zh-cn'>简体中文</a>
</p>

# simple-qrbtf

Most of the code in this project comes from [ciaochaos/qrbtf](https://github.com/ciaochaos/qrbtf). Compared
with [ciaochaos/qrbtf](https://github.com/ciaochaos/qrbtf), it removes the framework limitation and supports the use
of `node` and `browser` in environments.

# preview

| base                                                     | circle                                                     | dsj                                                     |
| -------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------- |
| <img src="./assets/base.png" width="80px" height="80px"> | <img src="./assets/circle.png" width="80px" height="80px"> | <img src="./assets/dsj.png" width="80px" height="80px"> |

| func                                                    | image                                                     | imagefill                                                     |
| ------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <img src="./assets/fun.png" width="80px" height="80px"> | <img src="./assets/image.png" width="80px" height="80px"> | <img src="./assets/imagefill.png" width="80px" height="80px"> |

| line                                                     | rand-rect                                                    | solid(2.5D)                                               |
| -------------------------------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------- |
| <img src="./assets/line.png" width="80px" height="80px"> | <img src="./assets/randrect.png" width="80px" height="80px"> | <img src="./assets/solid.png" width="80px" height="80px"> |

# install

```bash
npm i simple-qrbtf
```

```bash
yarn add simple-qrbtf
```

```bash
pnpm add simple-qrbtf
```

# use

additional parameters can be found in the typescript type definition

es6

```javascript
import SimpleQr from 'simple-qrbtf';

console.log(SimpleQr.base());
```

node

```javascript
const SimpleQr = require('simple-qrbtf');

console.log(SimpleQr.base());
```
