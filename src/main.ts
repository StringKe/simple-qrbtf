import SimpleQr from '../lib';

const baseQr = SimpleQr.line({
    content: 'https://github.com/stringke/simple-qrbtf',
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = baseQr;
