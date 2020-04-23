import React from 'react';
import { View } from 'react-native';
import Background from '~/components/Background';

import { Container, Logo, AppName, BgWorldMap } from './styles';
import coronavirus from '~/assets/coronavirus.png';
import worldmap from '~/assets/coronavirus9.png';

export default function World() {
  return (
    <Background>
      <BgWorldMap source={worldmap} />
      <Container>
        <Logo source={coronavirus} />
        <AppName>World cases</AppName>
      </Container>
    </Background>
  );
}
