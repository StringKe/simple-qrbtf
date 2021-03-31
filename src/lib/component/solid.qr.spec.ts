import test from 'ava';

import { getCombinations, saveFile } from './base.qr.spec';
import SolidQr from './solid.qr';

test('Qrcode Solid', (t) => {
  const allOptions = getCombinations(
    {
      upColor: ['#f64c4c'],
      leftColor: ['#ffa8a8'],
      rightColor: ['#926060'],
      height: [1, 2, 3, 4],
      lpHeight: [1, 2, 3, 4],
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
    const svg = SolidQr({
      content: new Date().toDateString(),
      ...item,
    });
    const content = `<!--
${JSON.stringify(item, null, 2)}
-->

${svg}
`;
    saveFile(name, 'solid', content);
  });
  t.pass();
});
