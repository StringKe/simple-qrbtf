import test from 'ava';

import BaseQr from './base.qr';

test('Qrcode Base', () => {
  const svgString = BaseQr({
    content: 'test inner',
  });
  console.log(svgString);
});
