interface TabType {
  name: string;
  title: string;
  subTitle: string;
  tabColor: string;
  textColor: string;
}

export const CarouselSize = {
  Default: { viewport: '420px' },
  Mobile: { viewport: '343px' },
};

export const TABS: TabType[] = [
  {
    name: 'The Beatles',
    title: 'Abbey Road',
    subTitle: 'Легендарная группа, изменившая мир музыки.',
    tabColor: '#1C1C1C',
    textColor: 'white',
  },
  {
    name: 'Pink Floyd',
    title: 'The Dark Side of the Moon',
    subTitle: 'Икона прогрессивного рока с уникальной концепцией.',
    tabColor: '#0B3D0B',
    textColor: 'white',
  },
  {
    name: 'Nirvana',
    title: 'Nevermind',
    subTitle: 'Группа, ставшая символом гранжа и поколения 90-х.',
    tabColor: '#FFD700',
    textColor: 'black',
  },
  {
    name: 'Queen',
    title: 'A Night at the Opera',
    subTitle: 'Эксцентричная группа, известная своим ярким стилем и вокалом.',
    tabColor: '#A500A1',
    textColor: 'white',
  },
  {
    name: 'Metallica',
    title: 'Master of Puppets',
    subTitle: 'Определяющая группа в жанре хард-рок и металл.',
    tabColor: '#000000',
    textColor: '#C0C0C0',
  },
  {
    name: 'Блондинка Ксю',
    title: 'Я — блондинка!',
    subTitle: 'Популярная исполнительница с ярким стилем и мелодиями.',
    tabColor: '#FFD700',
    textColor: 'black',
  },
  {
    name: 'Eminem',
    title: 'The Marshall Mathers LP',
    subTitle: 'Влиятельный рэп-артист с уникальным стилем.',
    tabColor: '#1B6CA8',
    textColor: 'white',
  },
];

/**
 * Пересчет сдвига слайда, где 1 = 50% длины слайда.
 *
 * @param   offset  Значение от 0 до 1 (1 - вся длина слайда).
 * @returns Возвращаем адаптированное значение.
 */
export const getRecalcOffset = (offset: number) => {
  const recalOffset = offset * 2;
  const sign = offset < 0 ? '-' : '';

  return Math.abs(recalOffset) > 1 ? Number(`${sign}1`) : recalOffset;
};
