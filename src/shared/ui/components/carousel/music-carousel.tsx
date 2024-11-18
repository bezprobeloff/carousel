import { FC, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import * as styles from './music-carousel.css.ts';
import { getRecalcOffset, TABS } from './music-carousel.helpers.tsx';
import { MusicSlideSize, SlideType } from './slide.helpers.tsx';
import { Slide } from './slide.tsx';
import { useSlideOffset } from './use-slide-offset.ts';

export const MusicCarousel: FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const { offset } = useSlideOffset({ embla, slideIndex });

  const onSlideChange = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <Carousel
      loop
      withIndicators
      height={MusicSlideSize.Default.height}
      slideSize={MusicSlideSize.Default.width}
      slideGap={0}
      getEmblaApi={setEmbla}
      onSlideChange={onSlideChange}
      draggable
      classNames={{
        root: styles.root,
        viewport: styles.viewport,
        slide: styles.slide,

        controls: styles.carouselControls,
        control: styles.carouselControlButton,
      }}
    >
      {TABS?.map((tab, index) => {
        const isActive = slideIndex === index;

        const getType = (index: number) => {
          if (isActive) return SlideType.Active;

          const lastIndex = TABS.length - 1;
          const prevIndex = slideIndex === 0 ? lastIndex : slideIndex - 1;

          return prevIndex === index ? SlideType.Prev : SlideType.Next;
        };

        return (
          <Carousel.Slide key={tab.name} style={{ zIndex: !isActive ? -1 : 0 }}>
            <Slide
              name={tab.name}
              title={tab.title}
              subTitle={tab.subTitle}
              type={getType(index)}
              colorSlide={tab.tabColor}
              colorText={tab.textColor}
              slideOffset={getRecalcOffset(offset)}
              onClick={() => {
                // тоже самое что и onSlideChange, но для элемента
                embla?.scrollTo(index, false);
              }}
            />
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
};
