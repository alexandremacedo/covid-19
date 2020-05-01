import React, { useState, useEffect, useMemo } from 'react';
import Background from '~/components/Background';
import Modal from 'react-native-modal';
import { ActivityIndicator } from 'react-native';
import Loading from '~/components/Loading';
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
  Logo1,
  Logo2,
  Logo3,
  AppName,
  CountryPicker,
  CountryName,
  Info,
  Date,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import coronavirus from '~/assets/coronavirus.png';
import api from '~/services/api';
import format from '~/utils/format';

export default function World() {
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    async function loadStatistics() {
      const response = await api.get('statistics');
      const countryStatistics = response.data.response.find(
        (stat) => stat.country === 'All',
      );
      setCountry(countryStatistics);

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    loadStatistics();
  }, []);

  function calculatePercent(total, partial) {
    const percent = (partial * 100) / total;
    return `${percent.toFixed(2)}%`;
  }

  function isNull(data) {
    if (data === null) {
      return '--';
    }
    return data;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Background>
      <Container>
        <Header>
          <Info>
            <AppName>COVID-19 statistics</AppName>
            <CountryPicker>
              <CountryName>World</CountryName>
            </CountryPicker>
            <Date>Last update {format(country.time)}</Date>
          </Info>
          <Logo1 source={coronavirus} />
          <Logo2 source={coronavirus} />
          <Logo3 source={coronavirus} />
        </Header>

        <TotalContent>
          <TotalCard>
            <TotalTitle>CASES</TotalTitle>
            <TotalAmount>{country.cases.total}</TotalAmount>
          </TotalCard>
        </TotalContent>
        <ScrollContent>
          <ContentBoth>
            <ActiveContent>
              <Title>ACTIVE</Title>
              <ContentBothIndicator>
                <ActiveAmount>{isNull(country.cases.active)}</ActiveAmount>
                {country.cases.new ? (
                  <>
                    <Icon name="arrow-upward" size={15} color="#24c2ff" />
                    <NewAmount>{parseInt(country.cases.new)}</NewAmount>
                  </>
                ) : (
                    <></>
                  )}
              </ContentBothIndicator>
            </ActiveContent>
          </ContentBoth>

          <Separator />

          <ContentBoth>
            <Content>
              <Title>RECOVERED</Title>
              <RecoveredAmount>
                {isNull(country.cases.recovered)}
              </RecoveredAmount>
            </Content>
            <Content>
              <Title>CRITICAL</Title>
              <CriticalAmount>{isNull(country.cases.critical)}</CriticalAmount>
            </Content>
          </ContentBoth>

          <Separator />

          <ContentBoth>
            <Content>
              <Title>DEATHS</Title>
              <ContentBothIndicator>
                <DeathAmount>{isNull(country.deaths.total)}</DeathAmount>
                {country.deaths.new ? (
                  <>
                    <Icon name="arrow-upward" size={15} color="#333" />
                    <DeathNewAmount>
                      {parseInt(country.deaths.new)}
                    </DeathNewAmount>
                  </>
                ) : (
                    <></>
                  )}
              </ContentBothIndicator>
            </Content>
            <Content>
              <Title>TESTS</Title>
              <Amount>{isNull(country.tests.total)}</Amount>
            </Content>
          </ContentBoth>

          <Separator />

          <ContentBoth>
            <Content>
              <Title>MORTALITY</Title>
              <Amount>
                {calculatePercent(country.cases.total, country.deaths.total)}
              </Amount>
            </Content>
            <Content>
              <Title>RECOVERY</Title>
              <Amount>
                {calculatePercent(country.cases.total, country.cases.recovered)}
              </Amount>
            </Content>
          </ContentBoth>
        </ScrollContent>
      </Container>
    </Background>
  );
}
