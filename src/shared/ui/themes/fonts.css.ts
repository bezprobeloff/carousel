import { globalFontFace, style, styleVariants } from '@vanilla-extract/css';

export const TTNormsProRegular = 'TT Norms Pro Regular';
export const TTNormsProMedium = 'TT Norms Pro Medium';
export const RobotoRegular = 'Roboto Regular';
export const RobotoMedium = 'Roboto Medium';

globalFontFace(TTNormsProRegular, {
  fontWeight: 400,
  src: 'url("/assets/fonts/TTNORMSPROREGULAR.TTF") format("truetype")',
});

globalFontFace(TTNormsProMedium, {
  fontWeight: 500,
  src: 'url("/assets/fonts/TTNORMSPROMEDIUM.TTF") format("truetype")',
});

globalFontFace(RobotoRegular, {
  fontWeight: 400,
  src: 'url("/assets/fonts/ROBOTOREGULAR.TTF") format("truetype")',
});

globalFontFace(RobotoMedium, {
  fontWeight: 500,
  src: 'url("/assets/fonts/ROBOTOMEDIUM.TTF") format("truetype")',
});

const TTNormsProMediumFont = style({
  fontFamily: TTNormsProMedium,
  fontWeight: '500',
});

const RobotoRegularFont = style({
  fontFamily: RobotoRegular,
  fontWeight: '400',
});

const RobotoMediumFont = style({
  fontFamily: RobotoMedium,
  fontWeight: '500',
});

export const headingFonts = styleVariants({
  h1: [
    TTNormsProMediumFont,
    {
      fontSize: '56px',
      lineHeight: '64px',
    },
  ],
  h2: [
    TTNormsProMediumFont,
    {
      fontSize: '40px',
      lineHeight: '48px',
    },
  ],
  h3: [
    TTNormsProMediumFont,
    {
      fontSize: '32px',
      lineHeight: '36px',
    },
  ],
  h4: [
    TTNormsProMediumFont,
    {
      fontSize: '24px',
      lineHeight: '28px',
    },
  ],
  h5: [
    TTNormsProMediumFont,
    {
      fontSize: '20px',
      lineHeight: '24px',
    },
  ],
  h6: [
    TTNormsProMediumFont,
    {
      fontSize: '16px',
      lineHeight: '20px',
    },
  ],
  h7: [
    TTNormsProMediumFont,
    {
      fontSize: '16px',
      lineHeight: '16px',
    },
  ],
});

export const labelFonts = styleVariants({
  l1_regular: [
    RobotoRegularFont,
    {
      fontSize: '24px',
      lineHeight: '24px',
    },
  ],
  l2_regular: [
    RobotoRegularFont,
    {
      fontSize: '20px',
      lineHeight: '20px',
    },
  ],
  l3_regular: [
    RobotoRegularFont,
    {
      fontSize: '16px',
      lineHeight: '16px',
    },
  ],
  l4_regular: [
    RobotoRegularFont,
    {
      fontSize: '14px',
      lineHeight: '14px',
    },
  ],
  l5_regular: [
    RobotoRegularFont,
    {
      fontSize: '12px',
      lineHeight: '12px',
    },
  ],
  l6_regular: [
    RobotoRegularFont,
    {
      fontSize: '11px',
      lineHeight: '12px',
    },
  ],
  l1_medium: [
    RobotoMediumFont,
    {
      fontSize: '24px',
      lineHeight: '24px',
    },
  ],
  l2_medium: [
    RobotoMediumFont,
    {
      fontSize: '20px',
      lineHeight: '20px',
    },
  ],
  l3_medium: [
    RobotoMediumFont,
    {
      fontSize: '16px',
      lineHeight: '16px',
    },
  ],
  l4_medium: [
    RobotoMediumFont,
    {
      fontSize: '14px',
      lineHeight: '14px',
    },
  ],
  l5_medium: [
    RobotoMediumFont,
    {
      fontSize: '12px',
      lineHeight: '12px',
    },
  ],
  l6_medium: [
    RobotoMediumFont,
    {
      fontSize: '11px',
      lineHeight: '12px',
    },
  ],
});

export const shortTextFonts = styleVariants({
  t1: [
    RobotoRegularFont,
    {
      fontSize: '32px',
      lineHeight: '36px',
    },
  ],
  t2: [
    RobotoRegularFont,
    {
      fontSize: '24px',
      lineHeight: '28px',
    },
  ],
  t3: [
    RobotoRegularFont,
    {
      fontSize: '20px',
      lineHeight: '24px',
    },
  ],
  t4: [
    RobotoRegularFont,
    {
      fontSize: '16px',
      lineHeight: '20px',
    },
  ],
  t5: [
    RobotoRegularFont,
    {
      fontSize: '14px',
      lineHeight: '18px',
    },
  ],
  t6: [
    RobotoRegularFont,
    {
      fontSize: '12px',
      lineHeight: '16px',
    },
  ],
});

export const paragraphFonts = styleVariants({
  p1: [
    RobotoRegularFont,
    {
      fontSize: '32px',
      lineHeight: '44px',
    },
  ],
  p2: [
    RobotoRegularFont,
    {
      fontSize: '24px',
      lineHeight: '34px',
    },
  ],
  p3: [
    RobotoRegularFont,
    {
      fontSize: '20px',
      lineHeight: '30px',
    },
  ],
  p4: [
    RobotoRegularFont,
    {
      fontSize: '16px',
      lineHeight: '24px',
    },
  ],
  p5: [
    RobotoRegularFont,
    {
      fontSize: '14px',
      lineHeight: '20px',
    },
  ],
  p6: [
    RobotoRegularFont,
    {
      fontSize: '12px',
      lineHeight: '18px',
    },
  ],
});
