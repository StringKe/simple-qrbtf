import test from 'ava';

import { getCombinations, saveFile } from './base.qr.spec';
import ImageQr from './image.qr';

test('Qrcode Image', (t) => {
  const allOptions = getCombinations(
    {
      type: ['rect', 'round'],
      posType: ['rect', 'round', 'planet'],
      darkColor: ['#926060'],
      lightColor: ['#ffa8a8'],
      posColor: ['#f64c4c'],

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
    const name = `${index}-${item.level}-${item.type}-${item.posType}-${item.icon.enabled}`;
    const svg = ImageQr({
      content: new Date().toDateString(),
      ...item,
    });
    const content = `<!--
${JSON.stringify(item, null, 2)}
-->

${svg}
`;
    saveFile(name, 'image', content);
  });
  t.pass();
});
