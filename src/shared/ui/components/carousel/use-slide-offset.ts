import { useEffect, useState } from 'react';
import { Embla } from '@mantine/carousel';

type UseSlideOffsetProps = {
  embla: Embla | null;
  slideIndex: number;
};

type RangeType = {
  start: number;
  end: number;
};

type RangesType = { left: RangeType; right: RangeType };

const MAX_OFFSET = 1;

const getCalcOffset = (slideSize: number, startLocationSlide: number, currentLocationSlide: number) => {
  const offset = slideSize - Math.abs(startLocationSlide - currentLocationSlide);
  const calcOffsetPrc = Number((MAX_OFFSET - offset / slideSize).toFixed(2));

  // если больше 1, то ограничиваем
  return calcOffsetPrc > MAX_OFFSET ? MAX_OFFSET : calcOffsetPrc;
};

/**
 * Хук расчета сдвига слайда.
 *
 * @param   embla  Объект карусели.
 * @param   slideIndex  Индекс активного слайда.
 * @returns Возвращаем значение сдвига слайда от 0 до 1, где 1 - 100% сдвинут слайд.
 */
export const useSlideOffset = ({ embla, slideIndex }: UseSlideOffsetProps) => {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => {
    if (!embla) return;

    const engine = embla.internalEngine();
    // у всех слайдов должны быть одинаковые размеры
    const slideSize = engine.slideRects[0].width;
    const { scrollSnaps } = engine;
    const startLocationSlide = scrollSnaps[slideIndex];
    const currentLocationSlide = Math.floor(engine.location.get());

    let calcOffset = 0;
    const ranges: RangesType = { left: { start: 0, end: 0 }, right: { start: 0, end: 0 } };

    // высчитаем координаты для первого элемента
    if (slideIndex === 0) {
      const pointStartLeft = scrollSnaps[scrollSnaps.length - 1];

      ranges.left.start = pointStartLeft - slideSize;
      ranges.left.end = pointStartLeft;
      ranges.right.start = startLocationSlide - 1;
      ranges.right.end = scrollSnaps[slideIndex + 1];
      // для последнего
    } else if (slideIndex === scrollSnaps.length - 1) {
      ranges.left.start = startLocationSlide + 1;
      ranges.left.end = scrollSnaps[slideIndex - 1];
      ranges.right.start = startLocationSlide - 1;
      ranges.right.end = startLocationSlide - slideSize;
      // для остальных штатных элементов
    } else {
      ranges.left.start = startLocationSlide + 1;
      ranges.left.end = scrollSnaps[slideIndex - 1];
      ranges.right.start = startLocationSlide - 1;
      ranges.right.end = scrollSnaps[slideIndex + 1];
    }

    // если мы не двигаемся, то 0%
    if (currentLocationSlide === startLocationSlide) {
      calcOffset = 0;
      // если двигаем направо
    } else if (ranges.left.end >= currentLocationSlide && ranges.left.start <= currentLocationSlide) {
      // превращаем в отрицательное число (знак движения вправо)
      calcOffset = -getCalcOffset(slideSize, ranges.left.start, currentLocationSlide);
    } else {
      calcOffset = getCalcOffset(slideSize, ranges.right.start, currentLocationSlide);
    }

    setOffset(calcOffset);
  };

  useEffect(() => {
    setOffset(0);
    if (embla) {
      embla.on('scroll', handleScroll);
    }

    return () => {
      embla && embla.off('scroll', handleScroll);
    };
  }, [embla, slideIndex]);

  return { offset };
};
