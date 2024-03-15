import './style.css';
import SimpleQr from '../lib';

const baseQr = SimpleQr.base({
    type: 'rect',
    content: 'https://github.com/stringke/simple-qrbtf',
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = baseQr;
