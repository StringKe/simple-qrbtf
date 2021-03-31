import test from 'ava';

import { getCombinations, saveFile } from './base.qr.spec';
import LineQr from './line.qr';

test('Qrcode Line', (t) => {
  const allOptions = getCombinations(
    {
      direction: [
        'left-right',
        'up-down',
        'h-v',
        'loop',
        'topLeft-bottomRight',
        'topRight-bottomLeft',
        'cross',
      ],
      posType: ['rect', 'round', 'planet', 'roundRect'],
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
    const name = `${index}-${item.level}-[${item.direction}]-${item.posType}-${item.icon.enabled}`;
    const svg = LineQr({
      content: new Date().toDateString(),
      ...item,
    });
    const content = `<!--
${JSON.stringify(item, null, 2)}
-->

${svg}
`;
    saveFile(name, 'line', content);
  });
  t.pass();
});
