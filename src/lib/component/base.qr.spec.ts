import * as fs from 'fs';
import path from 'path';

import test from 'ava';

import BaseQr from './base.qr';

export function saveFile(name: string, type: string, content: string) {
  const savePath = path.join(process.cwd(), 'test_output');
  const fullPath = path.join(savePath, type);
  const fullFilePath = path.join(fullPath, `${name}.svg`);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath);
  }
  fs.writeFileSync(fullFilePath, content);
}

export function getCombinations(options, optionIndex, results, current): any[] {
  const allKeys = Object.keys(options);
  const optionKey = allKeys[optionIndex];

  const values = options[optionKey];

  for (let i = 0; i < values.length; i++) {
    current[optionKey] = values[i];

    if (optionIndex + 1 < allKeys.length) {
      getCombinations(options, optionIndex + 1, results, current);
    } else {
      const res = JSON.parse(JSON.stringify(current));
      results.push(res);
    }
  }

  return results;
}

test('Qrcode Base', (t) => {
  const allOptions = getCombinations(
    {
      type: ['round', 'rect', 'rand'],
      posType: ['round', 'rect', 'planet', 'roundRect'],
      otherColor: ['#000000'],
      posColor: ['#ff8d8d'],
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
    const svg = BaseQr({
      content: new Date().toDateString(),
      ...item,
    });
    const content = `<!--
${JSON.stringify(item, null, 2)}
-->

${svg}
`;
    saveFile(name, 'base', content);
  });
  t.pass();
});
