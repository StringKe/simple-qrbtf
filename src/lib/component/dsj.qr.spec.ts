import test from 'ava';

import { getCombinations, saveFile } from './base.qr.spec';
import DSJQr from './dsj.qr';

test('Qrcode DSJ', (t) => {
  const allOptions = getCombinations(
    {
      posType: ['rect', 'dsj'],
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
    const name = `${index}-${item.level}-${item.posType}-${item.icon.enabled}`;
    const svg = DSJQr({
      content: new Date().toDateString(),
      ...item,
    });
    const content = `<!--
${JSON.stringify(item, null, 2)}
-->

${svg}
`;
    saveFile(name, 'dsj', content);
  });
  t.pass();
});
