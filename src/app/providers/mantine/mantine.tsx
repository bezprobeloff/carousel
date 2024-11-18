import { FC, ReactNode } from 'react';
import '@mantine/carousel/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  components: {},
});

interface MantineProps {
  children: ReactNode;
}

export const Mantine: FC<MantineProps> = ({ children }) => <MantineProvider theme={theme}>{children}</MantineProvider>;
