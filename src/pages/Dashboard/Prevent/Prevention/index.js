import React from 'react';
import Background from '~/components/Background';

import {
  Container,
  BackgroundImage,
  PreventionList,
  PreventionContent,
  Image,
  Name,
  PreventionCenter,
} from './styles';
import coronavirus from '~/assets/coronavirus.png';
import sickPersonGreen from '~/assets/sick-person-green.png';
import worldmap from '~/assets/coronavirus9.png';

export default function Prevent() {
  return (
    <Container>
      <BackgroundImage source={sickPersonGreen} />
      <PreventionList>
        <PreventionCenter>
          <PreventionContent>
            <Name>Wash your hands</Name>
          </PreventionContent>
          <PreventionContent>
            <Name>Sneeze into your elbow</Name>
          </PreventionContent>
          <PreventionContent>
            <Name>Avoid crowded placed</Name>
          </PreventionContent>
        </PreventionCenter>
      </PreventionList>
    </Container>
  );
}
