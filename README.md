<p align='right'>
  <a href='./README_CN.md' target='_blank' hreflang='zh-cn'>简体中文</a>
</p>

# simple-qrbtf
Most of the code in this project comes from [ciaochaos/qrbtf](https://github.com/ciaochaos/qrbtf). Compared with [ciaochaos/qrbtf](https://github.com/ciaochaos/qrbtf), it removes the framework limitation and supports the use of `node` and `browser` in environments.

# install
`npm i simple-qrbtf`

# full api document
[https://stringke.github.io/simple-qrbtf/](https://stringke.github.io/simple-qrbtf/)  

this document is automatically updated, the old version cannot be viewed.

# use
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
