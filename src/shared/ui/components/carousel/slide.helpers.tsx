export enum SlideType {
  Active = 'active',
  Prev = 'prev',
  Next = 'next',
}

export const DEFAULT_TAB_SCALE = 0.85;
export const DEFAULT_TAB_OPACITY = 0.85;
export const DEFAULT_TAB_TRANSLATE3D_X = 65;
export const MusicSlideSize = {
  Default: { width: '240px', height: '240px' },
  Mobile: { width: '210px', height: '220px' },
};

export const getCalcSize = (start: number, end: number, offset: number) => {
  return start + offset * (end - start);
};

const getSign = (type: SlideType) => {
  return type === SlideType.Next ? '-' : '';
};

export const getTabStyleBackground = (type: SlideType, colorSlide: string) => {
  if (type === SlideType.Active) {
    return colorSlide;
  } else {
    const sign = getSign(type);

    return `linear-gradient(${sign}270deg, rgba(255, 255, 255, 0.5) -50%, ${colorSlide} 100%)`;
  }
};

export const getTabStyleTransform = (type: SlideType, slideOffset: number) => {
  const sign = getSign(type);
  const offsetX = getCalcSize(Number(`${sign}${DEFAULT_TAB_TRANSLATE3D_X}`), 0, Math.abs(slideOffset));
  const scale = getCalcSize(DEFAULT_TAB_SCALE, 1, Math.abs(slideOffset));

  if ((type === SlideType.Prev && slideOffset < 0) || (type === SlideType.Next && slideOffset > 0)) {
    return `translate3d(${offsetX}%, 0px, 0px) scale(${scale})`;
  }

  return '';
};
