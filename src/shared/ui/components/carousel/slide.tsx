import { FC } from 'react';
import { Flex, MantineStyleProp, Text } from '@mantine/core';
import { headingFonts, shortTextFonts } from '~themes/fonts.css.ts';
import {
  DEFAULT_TAB_OPACITY,
  getCalcSize,
  getTabStyleBackground,
  getTabStyleTransform,
  SlideType,
} from './slide.helpers';
import * as styles from './slide.css';

type SlideProps = {
  name: string;
  title: string;
  subTitle: string;
  colorSlide: string;
  colorText: string;
  onClick: VoidFunction;
  type: SlideType;

  slideOffset: number;
};

export const Slide: FC<SlideProps> = ({ name, title, subTitle, colorSlide, onClick, type, colorText, slideOffset }) => {
  const tabStyle: MantineStyleProp = {
    background: getTabStyleBackground(type, colorSlide),
  };

  if (type !== SlideType.Active) {
    tabStyle.transform = getTabStyleTransform(type, slideOffset);
    tabStyle.opacity = getCalcSize(DEFAULT_TAB_OPACITY, 1, slideOffset);
  }

  return (
    <Flex className={styles.tabContainer[type]}>
      <Flex className={styles.tab[type]} style={{ ...tabStyle }} onClick={onClick}>
        <Flex className={styles.containerText[type]}>
          {type !== 'active' && (
            <Flex w='100%' h='fit-content' justify='center' align='center'>
              <Text span className={headingFonts.h5} c={colorText}>
                {name}
              </Text>
            </Flex>
          )}

          {type === 'active' && (
            <Flex h='100%' direction='column' rowGap='8px' justify='space-around'>
              <Text span className={headingFonts.h5} c={colorText}>
                {name}
              </Text>
              <Text span className={headingFonts.h6} c={colorText}>
                {title}
              </Text>
              <Text span className={shortTextFonts.t5} c={colorText}>
                {subTitle}
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
