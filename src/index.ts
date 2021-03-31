import {
  BaseQr,
  CircleQr,
  DsjQR,
  FuncQr,
  ImageFillQr,
  ImageQr,
  LineQr,
  RandRectQr,
  SolidQr
} from './lib';

export const SimpleQr = {
  base: BaseQr,
  circle: CircleQr,
  dsj: DsjQR,
  randRect: RandRectQr,
  line: LineQr,
  solid: SolidQr,
  image: ImageQr,
  func: FuncQr,
  imageFill: ImageFillQr
};

export default SimpleQr;
