import { createRenderer, DefaultRendererOptions, Renderer } from '../renderer';

interface BaseQrOptions extends DefaultRendererOptions {
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
