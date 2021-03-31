import test from 'ava';

import { getCombinations, saveFile } from './base.qr.spec';
import FuncQr from './func.qr';

test('Qrcode Func', (t) => {
  const allOptions = getCombinations(
    {
      funcType: ['A', 'B'],
      type: ['rect', 'round'],
      posType: ['rect', 'round', 'planet', 'roundRect'],
      otherColor1: ['#000'],
      otherColor2: ['#999'],
      posColor: ['#777'],
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
    const name = `${index}-${item.level}-${item.funcType}-${item.type}-${item.posType}-${item.icon.enabled}`;
    const svg = FuncQr({
      content: new Date().toDateString(),
      ...item,
    });
    const content = `<!--
${JSON.stringify(item, null, 2)}
-->

${svg}
`;
    saveFile(name, 'func', content);
  });
  t.pass();
});
