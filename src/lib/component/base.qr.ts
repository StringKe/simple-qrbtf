import { createRenderer, Renderer } from '../renderer';

interface BaseQrOptions {
  test: string;
}

const BaseQr: Renderer<BaseQrOptions> = {
  defaultProps: {
    test: '',
  },
  listPoints: (props) => {
    props.qrcode.getPositionTable();
    return [];
  },
};

export default createRenderer<BaseQrOptions>(BaseQr);
