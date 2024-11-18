import { Card, Flex } from '@mantine/core';
import { useMatchMedia } from '~shared/lib/hooks';
import { MusicCarousel } from '~shared/ui/components';
import { shadow } from '~themes/shadow.css';
import { Mantine } from './providers/mantine/mantine';
import './app-style.css';

export const App = () => {
  const { isMobile } = useMatchMedia();

  return (
    <Mantine>
      <Flex direction='column' w='100%' h='100vh' justify='center' align='center'>
        <Card style={{ boxShadow: shadow.card }} padding='16px 0'>
          <Flex w={isMobile ? '100%' : 550}>
            <MusicCarousel />
          </Flex>
        </Card>
      </Flex>
    </Mantine>
  );
};
