import { style } from '@vanilla-extract/css';
import { CarouselSize } from './music-carousel.helpers';

export const root = style({
  position: 'relative',
  width: '100%',
  marginBottom: '30px',
  display: 'flex',
  justifyContent: 'center',
});

export const viewport = style({
  width: CarouselSize.Default.viewport,
});

export const slide = style({
  display: 'flex',
});

export const carouselControls = style({
  width: '100%',
  padding: 0,
});

export const carouselControlButton = style({
  border: 'none',
  width: '40px',
  height: '40px',
  backgroundColor: '#ECF0F8',
});
