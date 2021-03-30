import test from 'ava';

import BaseQr from './base.qr';

test('Qrcode Base', (t) => {
  const svgString = BaseQr({
    content: 'test inner',
    posType: 'round',
  });
  console.log(svgString);
  t.pass();
});
