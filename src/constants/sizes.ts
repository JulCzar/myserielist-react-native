import { Dimensions } from 'react-native';

export const viewport = {
  get width() {
    return Dimensions.get('window').width;
  },
  get height() {
    return Dimensions.get('window').height;
  },
  vh(value: number) {
    return (value * this.height) / 100;
  },
  vw(value: number) {
    return (value * this.width) / 100;
  },
  vmin(value: number) {
    const min = Math.min(this.width, this.height);
    return (value * min) / 100;
  },
  vmax(value: number) {
    const max = Math.max(this.width, this.height);
    return (value * max) / 100;
  },
};
