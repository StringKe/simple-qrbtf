<p align='right'>
  <a href='./README_CN.md' target='_blank' hreflang='zh-cn'>English</a>
</p>

# simple-qrbtf
此项目大部分代码来自 [ciaochaos/qrbtf](https://github.com/ciaochaos/qrbtf)， 仅去除框架支持可以在 `node` 或 `browser` 中使用。

# 预览

| base                                                     | circle                                                     | dsj                                                     |
| -------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------- |
| <img src="./assets/base.png" width="80px" height="80px"> | <img src="./assets/circle.png" width="80px" height="80px"> | <img src="./assets/dsj.png" width="80px" height="80px"> |

| func                                                    | image                                                     | imagefill                                                     |
| ------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <img src="./assets/fun.png" width="80px" height="80px"> | <img src="./assets/image.png" width="80px" height="80px"> | <img src="./assets/imagefill.png" width="80px" height="80px"> |

| line                                                     | rand-rect                                                    | solid(2.5D)                                               |
| -------------------------------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------- |
| <img src="./assets/line.png" width="80px" height="80px"> | <img src="./assets/randrect.png" width="80px" height="80px"> | <img src="./assets/solid.png" width="80px" height="80px"> |


# 安装
`npm i simple-qrbtf`

# 完整 API 文档
[https://stringke.github.io/simple-qrbtf/](https://stringke.github.io/simple-qrbtf/)  

此文档随发布版本更新，无法查看旧版本。

# 使用
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
