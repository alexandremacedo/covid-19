import React from 'react';
import Background from '~/components/Background';

import {
  Container,
  BackgroundImage,
  SymptomsList,
  SymptomsContent,
  Dot,
  Name,
  Header,
  Info,
  Title,
  Subtitle,
} from './styles';

import sickPersonBlue from '~/assets/sick-person-blue.png';

export default function Symptoms() {
  return (
    <Container>
      <BackgroundImage source={sickPersonBlue} />

      <Header>
        <Info>
          <Title>Symptoms</Title>
          <Subtitle>How to identify your symptoms?</Subtitle>
        </Info>
      </Header>
      <SymptomsList>
        <SymptomsContent>
          <Dot />
          <Name>Fever</Name>
        </SymptomsContent>
        <SymptomsContent>
          <Dot />
          <Name>Sore throat</Name>
        </SymptomsContent>
        <SymptomsContent>
          <Dot />
          <Name>Headache</Name>
        </SymptomsContent>
        <SymptomsContent>
          <Dot />
          <Name>Couch</Name>
        </SymptomsContent>
      </SymptomsList>
    </Container>
  );
}
