import React from 'react';
import Background from '~/components/Background';

import {
  Container,
  BackgroundImage,
  PreventionList,
  PreventionContent,
  Dot,
  Name,
  PreventionCenter,
  Header,
  Info,
  Title,
  Subtitle,
  Content,
} from './styles';

import sickPersonBlue from '~/assets/sick-person-blue.png';

export default function Prevent() {
  return (
    <Container>
      <BackgroundImage source={sickPersonBlue} />
      <Content>
        <Header>
          <Info>
            <Title>Prevention</Title>
            <Subtitle>How to keep yourself forewarned?</Subtitle>
          </Info>
        </Header>
        <PreventionList>
          <PreventionCenter>
            <PreventionContent>
              <Dot />
              <Name>Wash your hands</Name>
            </PreventionContent>
            <PreventionContent>
              <Dot />
              <Name>Sneeze into your elbow</Name>
            </PreventionContent>
            <PreventionContent>
              <Dot />
              <Name>Avoid crowded places</Name>
            </PreventionContent>
          </PreventionCenter>
        </PreventionList>
      </Content>
    </Container>
  );
}
