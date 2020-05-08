import React from 'react';
import Background from '~/components/Background';

import {
  Container,
  BackgroundImage,
  ContagionList,
  ContagionContent,
  Dot,
  Name,
  Header,
  Info,
  Title,
  Subtitle,
  Content,
} from './styles';
import sickPersonRed from '~/assets/sick-person-red.png';

export default function Contagion() {
  return (
    <Container>
      <BackgroundImage source={sickPersonRed} />
      <Header>
        <Info>
          <Title>Contagion</Title>
          <Subtitle>How to avoid being contaminated?</Subtitle>
        </Info>
      </Header>
      <ContagionList>
        <ContagionContent>
          <Dot />
          <Name>Contaminated objects</Name>
        </ContagionContent>
        <ContagionContent>
          <Dot />
          <Name>Air by cough or sneeze</Name>
        </ContagionContent>
        <ContagionContent>
          <Dot />
          <Name>Human contact</Name>
        </ContagionContent>
      </ContagionList>
    </Container>
  );
}
