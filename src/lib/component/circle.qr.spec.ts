import test from 'ava';

import { getCombinations, saveFile } from './base.qr.spec';
import CircleQr from './circle.qr';

test('Qrcode Circle', (t) => {
  const allOptions = getCombinations(
    {
      upColor: ['#f64c4c'],
      posColor: ['#ffa8a8'],
      level: ['L', 'M', 'Q', 'H'],
      icon: [
        {
          enabled: 0,
        },
        {
          enabled: 2,
        },
        {
          enabled: 3,
        },
        {
          enabled: 4,
        },
        {
          enabled: 5,
        },
      ],
    },
    0,
    [],
    {}
  );

  allOptions.forEach((item, index) => {
    const name = `${index}-${item.level}-${item.height}-${item.lpHeight}-${item.icon.enabled}`;
    const svg = CircleQr({
      content: new Date().toDateString(),
      ...item,
    });
    const content = `<!--
${JSON.stringify(item, null, 2)}
-->

${svg}
`;
    saveFile(name, 'circle', content);
  });
  t.pass();
});
