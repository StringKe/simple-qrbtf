import test from 'ava';

import { getCombinations, saveFile } from './base.qr.spec';
import ImageFillQr from './image-fill.qr';

test('Qrcode Image Fill', (t) => {
  const allOptions = getCombinations(
    {
      color: ['rgba(0,0,0,0)', '#000'],
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
    const name = `${index}-${item.level}-${
      item.color === '#000' ? 'Color' : 'Image'
    }-${item.icon.enabled}`;
    const svg = ImageFillQr({
      content: new Date().toDateString(),
      ...item,
    });
    const content = `<!--
${JSON.stringify(item, null, 2)}
-->

${svg}
`;
    saveFile(name, 'image-fill', content);
  });
  t.pass();
});
