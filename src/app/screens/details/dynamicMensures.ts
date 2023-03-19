import { viewport } from '../../../constants';

// Essas medidas são dinâmicas, pois dependem do tamanho da tela, como está se
// tornando tendencia celulares com telas dobráveis e possivelmente
// redimensionáveis, o app está preparado para isso.
export const dynamicMensures = {
  get CANVAS_WIDTH() {
    return viewport.vmin(100) - 16;
  },
  get CANVAS_HEIGHT() {
    return viewport.vmin(150);
  },
  get IMAGE_HEIGHT() {
    return viewport.vw(75);
  },
  get IMAGE_WIDTH() {
    return viewport.vw(50);
  },
  get IMAGE_X0() {
    return dynamicMensures.CANVAS_WIDTH / 2 - viewport.vw(25);
  },
  get IMAGE_Y0() {
    return dynamicMensures.CANVAS_WIDTH / 2 - viewport.vw(35);
  },
};
export const IMAGE_RADIUS = 16;
