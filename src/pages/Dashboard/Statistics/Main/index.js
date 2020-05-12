import React, { useState } from 'react';
import Background from '~/components/Background';

import { Container, Header, CountryName, Info } from './styles';

import Country from '../Country';
import State from '../State';

import ViewPager from '@react-native-community/viewpager';
import Dots from '~/components/Indicator';

export default function Main() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Background>
      <Container>
        <ViewPager
          style={{ flex: 1 }}
          onPageScroll={(e) => setCurrentPage(e.nativeEvent.position)}
          showPageIndicator={true}
          initialPage={0}>
          <Country key="1" />
          <State key="2" />
        </ViewPager>
        <Dots
          length={3}
          activeDotWidth={8}
          activeDotHeight={8}
          activeColor={'#222b45'}
          activeBorderWidth={10}
          passiveDotWidth={8}
          passiveDotHeight={8}
          paddingVertical={20}
          paddingHorizontal={10}
          active={currentPage}
        />
      </Container>
    </Background>
  );
}
