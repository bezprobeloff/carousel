import { style, styleVariants } from '@vanilla-extract/css';
import {
  DEFAULT_TAB_OPACITY,
  DEFAULT_TAB_SCALE,
  DEFAULT_TAB_TRANSLATE3D_X,
  MusicSlideSize,
  SlideType,
} from './slide.helpers';

export const tabContainerBase = style({
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const tabContainer: Record<SlideType, string> = styleVariants({
  active: [tabContainerBase],
  prev: [
    tabContainerBase,
    {
      alignItems: 'flex-end',
    },
  ],
  next: [
    tabContainerBase,
    {
      alignItems: 'flex-start',
    },
  ],
});

export const tabBase = style({
  width: MusicSlideSize.Default.width,
  height: MusicSlideSize.Default.height,
  gap: '8px',
  borderRadius: '12px',
  transition: 'all .3s',
});

export const tab: Record<SlideType, string> = styleVariants({
  active: [
    tabBase,
    {
      padding: '16px',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0px 8px 35px 0px #19377E26',
      opacity: '1',

      transform: 'translate3d(0, 0px, 0px) scale(1)',
    },
  ],

  prev: [
    tabBase,
    {
      padding: '16px 12px',
      cursor: 'pointer',
      transform: `translate3d(${DEFAULT_TAB_TRANSLATE3D_X}%, 0px, 0px) scale(${DEFAULT_TAB_SCALE})`,
      opacity: DEFAULT_TAB_OPACITY,
    },
  ],
  next: [
    tabBase,
    {
      padding: '16px 12px',
      cursor: 'pointer',
      transform: `translate3d(-${DEFAULT_TAB_TRANSLATE3D_X}%, 0px, 0px) scale(${DEFAULT_TAB_SCALE})`,
      opacity: DEFAULT_TAB_OPACITY,
    },
  ],
});

const containerTextBase = style({
  display: 'flex',
  width: '100%',
  height: '100%',
});

export const containerText = styleVariants({
  active: [
    containerTextBase,
    {
      rowGap: '8px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  ],
  prev: [
    containerTextBase,
    {
      columnGap: '8px',
      alignItems: 'flex-start',

      transform: 'rotate(-90deg)',
    },
  ],
  next: [
    containerTextBase,
    {
      columnGap: '8px',
      alignItems: 'flex-end',

      transform: 'rotate(-90deg)',
    },
  ],
});
