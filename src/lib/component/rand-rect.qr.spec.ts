import test from 'ava';

import { getCombinations, saveFile } from './base.qr.spec';
import RandRectQr from './rand-rect.qr';

test('Qrcode Rand Rect', (t) => {
  const allOptions = getCombinations(
    {
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
    const name = `${index}-${item.level}-${item.icon.enabled}`;
    const svg = RandRectQr({
      content: new Date().toDateString(),
      ...item,
    });
    const content = `<!--
${JSON.stringify(item, null, 2)}
-->

${svg}
`;
    saveFile(name, 'rand-rect', content);
  });
  t.pass();
});
