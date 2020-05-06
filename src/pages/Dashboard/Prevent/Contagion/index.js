import React from 'react';
import Background from '~/components/Background';

import {
  Container,
  BackgroundImage,
  ContagionList,
  ContagionContent,
  Image,
  Name,
  ContagionSide,
} from './styles';
import coronavirus from '~/assets/coronavirus.png';
import sickPersonRed from '~/assets/sick-person-red.png';

// import sickPersonBlue from '~/assets/sick-person-blue.png';

import sickPersonBlue from '~/assets/sick-person-blue-coffe-left.png';
import worldmap from '~/assets/coronavirus9.png';

export default function Contagion() {
  return (
    <Background>
      <Container>
        <BackgroundImage source={sickPersonRed} />
        <ContagionList>
          <ContagionContent>
            <Name>Contaminated objects</Name>
          </ContagionContent>
          <ContagionContent>
            <Name>Air by cough or sneeze</Name>
          </ContagionContent>
          <ContagionContent>
            <Name>Human contact</Name>
          </ContagionContent>
        </ContagionList>
      </Container>
    </Background>
  );
}
