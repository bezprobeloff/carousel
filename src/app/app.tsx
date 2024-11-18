import { Card, Flex } from '@mantine/core';
import { MusicCarousel } from '~shared/ui/components';
import { shadow } from '~themes/shadow.css';
import { Mantine } from './providers/mantine/mantine';
import './app-style.css';

export const App = () => (
  <Mantine>
    <Flex direction='column' w='100%' h='100vh' justify='center' align='center'>
      <Card style={{ boxShadow: shadow.card }}>
        <Flex w={550}>
          <MusicCarousel />
        </Flex>
      </Card>
    </Flex>
  </Mantine>
);
