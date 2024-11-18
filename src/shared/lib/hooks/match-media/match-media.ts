import { useLayoutEffect, useState } from 'react';
import { DeviceState, DeviceVariant, MatchMediaQueries } from './match-media.types';

const MATCH_MEDIA_QUERIES: MatchMediaQueries = [
  '(max-width: 767px)',
  '(min-width: 768px) and (max-width: 1200px)',
  '(min-width: 1201px)',
];
const mediaQueryLists = MATCH_MEDIA_QUERIES.map(query => matchMedia(query));

export const useMatchMedia = (): DeviceState => {
  const getValues = () => mediaQueryLists.map(mediaQuery => mediaQuery.matches);

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach(mediaQuery => mediaQuery.addEventListener('change', handler));

    return () => mediaQueryLists.forEach(mediaQuery => mediaQuery.removeEventListener('change', handler));
  }, []);

  return Object.values(DeviceVariant).reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {},
  ) as DeviceState;
};
