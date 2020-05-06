import React from 'react';
import Background from '~/components/Background';

import {
  Container,
  Separator,
  TotalTitle,
  TotalAmount,
  ContentBoth,
  ContentBothIndicator,
  Content,
  Title,
  Amount,
  ActiveAmount,
  NewAmount,
  RecoveredAmount,
  CriticalAmount,
  DeathAmount,
  DeathNewAmount,
  ActiveContent,
  TotalCard,
  ScrollContent,
  TotalContent,
  Header,
  ButtonModal,
  SeparatorModal,
  ContentModal,
  HeaderModal,
  TitleModal,
  CountryList,
  Country,
  ContainerModal,
  Logo1,
  Logo2,
  Logo3,
  AppName,
  CountryPicker,
  CountryName,
  Info,
  Date,
  Name,
  Press,
  BgWorldMap,
} from './styles';
import coronavirus from '~/assets/coronavirus.png';
import worldmap from '~/assets/coronavirus9.png';
import PreventRoutes from '~/routes/prevent.routes';

export default function Main() {
  return (
    <Background>
      <Container>
        <Header>
          <Info>
            <CountryName>Stay safe!</CountryName>
          </Info>
          {/* <Logo1 source={coronavirus} />
          <Logo2 source={coronavirus} />
          <Logo3 source={coronavirus} /> */}
        </Header>

        <Content>
          <PreventRoutes />
        </Content>
      </Container>
    </Background>
  );
}
