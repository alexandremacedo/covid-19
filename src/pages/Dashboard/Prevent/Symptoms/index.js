import React from 'react';
import Background from '~/components/Background';

import {
  Container,
  BackgroundImage,
  SymptomsList,
  SymptomsContent,
  Image,
  Name,
  SymptomsSide,
} from './styles';
import coronavirus from '~/assets/coronavirus.png';
import sickPersonGreen from '~/assets/sick-person-green.png';
import worldmap from '~/assets/coronavirus9.png';

export default function Symptoms() {
  return (
    <Container>
      <BackgroundImage source={sickPersonGreen} />
      <SymptomsList>
        <SymptomsContent>
          <Name>Fever</Name>
        </SymptomsContent>
        <SymptomsContent>
          <Name>Dyspnea</Name>
        </SymptomsContent>
        <SymptomsContent>
          <Name>Headache</Name>
        </SymptomsContent>
        <SymptomsContent>
          <Name>Couch</Name>
        </SymptomsContent>
      </SymptomsList>
    </Container>
  );
}
