export type MatchMediaQueries = [string] | [string, string] | [string, string, string];

export const DeviceVariant = {
  isMobile: 'isMobile',
  isTablet: 'isTablet',
  isDesktop: 'isDesktop',
} as const;

export type DeviceState = {
  [key in keyof typeof DeviceVariant]: boolean;
};

export interface MatchMedia {
  devices?: DeviceState;
}
