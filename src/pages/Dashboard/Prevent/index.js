import React from 'react';
import Background from '~/components/Background';

import { Container, Logo, AppName, BgWorldMap } from './styles';
import coronavirus from '~/assets/coronavirus.png';
import worldmap from '~/assets/coronavirus9.png';

export default function Prevent() {
  return (
    <Background>
      <BgWorldMap source={worldmap} />
      <Container>
        <Logo source={coronavirus} />
        <AppName>Prevent</AppName>
      </Container>
    </Background>
  );
}
