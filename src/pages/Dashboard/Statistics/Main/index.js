import React, { useState, useEffect, useMemo } from 'react';
import Background from '~/components/Background';
import Modal from 'react-native-modal';
import { StyleSheet } from 'react-native';
import Loading from '~/components/Loading';
import ContentLoader from 'react-native-easy-content-loader';

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
  DetailButton,
  DetailTitle,
  DotsContainer,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import coronavirus from '~/assets/coronavirus.png';
import api from '~/services/api';
import format from '~/utils/format';
import numberWithCommas from '~/utils/numberWithCommas';

import Dots from '~/components/Indicator';

import formatCountryName from '~/utils/formatCountryName';

const styles = StyleSheet.create({
  title: {
    width: '100%',
    height: 25,
    marginTop: 5,
  },
  titleTotal: {
    width: '60%',
    alignSelf: 'center',
    height: 35,
    marginTop: 10,
  },
});

export default function Statistics({ navigation }) {
  const [country, setCountry] = useState({});
  const [countryName, setCountryName] = useState('Brazil');
  const [countryNameForSearch, setCountryNameForSearch] = useState('Brazil');

  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  const [loadingCountry, setLoadingCountry] = useState(true);

  const [countries, setCountries] = useState([]);
  const [countriesFormatted, setCountriesFormatted] = useState([]);

  useEffect(() => {
    async function loadStatistics() {
      const response = await api.get('statistics');
      const countriesName = response.data.response.map(
        (country) => country.country,
      );

      setCountries(countriesName);
      setCountriesFormatted(formatCountryName(countriesName));

      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
    loadStatistics();
  }, []);

  useEffect(() => {
    async function loadCountryStatistcs() {
      const response = await api.get('statistics');
      const countryStatistics = response.data.response.find(
        (stat) => stat.country === countryNameForSearch,
      );

      setCountry(countryStatistics);

      setTimeout(() => {
        setLoadingCountry(false);
      }, 1000);
    }
    loadCountryStatistcs();
  }, [countryNameForSearch]);

  function calculatePercent(total, partial) {
    const percent = (partial * 100) / total;
    return `${percent.toFixed(2)}%`;
  }

  function handleModal() {
    setVisible(!visible);
  }

  function handleLoadingCountry() {
    setLoadingCountry(!loadingCountry);
  }

  function isNull(data) {
    if (data === null) {
      return '--';
    }
    return data;
  }

  function renderItem({ item: country, index }) {
    return (
      <Country>
        <Name
          onPress={() => {
            setCountryName(country);
            setCountryNameForSearch(countries[index]);
            handleModal();
            handleLoadingCountry();
          }}>
          {country}
        </Name>
      </Country>
    );
  }

  if (country.time === undefined) {
    return <Loading />;
  }

  return (
    <Background>
      <Container>
        <Modal isVisible={visible}>
          <ContainerModal>
            <ButtonModal onPress={handleModal}>
              <Icon name="close" size={20} color="#fff" />
            </ButtonModal>
            <ContentModal>
              <HeaderModal>
                <TitleModal>Countries</TitleModal>
              </HeaderModal>
              <CountryList
                data={countriesFormatted}
                ItemSeparatorComponent={() => <SeparatorModal />}
                keyExtractor={(country) => String(country)}
                renderItem={renderItem}
                removeClippedSubviews={true}
                initialNumToRender={5}
                maxToRenderPerBatch={10}
                windowSize={10}
              />
            </ContentModal>
          </ContainerModal>
        </Modal>

        <Header>
          <Info>
            <AppName>COVID-19 statistics</AppName>
            <CountryPicker>
              <Press
                onPress={() => {
                  handleModal();
                }}>
                RectButton onPress is not working?????
              </Press>
              <CountryName>{countryName}</CountryName>
              <Icon name="arrow-drop-down" size={30} color="#fff" />
            </CountryPicker>
            <Date>Last update {format(country.time)}</Date>
          </Info>
          <Logo1 source={coronavirus} />
          <Logo2 source={coronavirus} />
          <Logo3 source={coronavirus} />
        </Header>

        <TotalContent>
          <TotalCard
            onPress={() => {
              countryName === 'Brazil' ? navigation.navigate('State') : null;
            }}>
            <TotalTitle>ALL CASES</TotalTitle>
            <ContentLoader
              active
              titleStyles={styles.titleTotal}
              pRows={0}
              loading={loadingCountry}>
              <TotalAmount>
                {numberWithCommas(isNull(country.cases.total))}
              </TotalAmount>
            </ContentLoader>
          </TotalCard>
        </TotalContent>
        <ScrollContent>
          <ContentBoth>
            <ActiveContent>
              <Title>ACTIVE</Title>
              <ContentLoader
                active
                titleStyles={styles.title}
                pRows={0}
                loading={loadingCountry}>
                <ContentBothIndicator>
                  <ActiveAmount>
                    {numberWithCommas(isNull(country.cases.active))}
                  </ActiveAmount>
                  {country.cases.new ? (
                    <>
                      <Icon name="arrow-upward" size={15} color="#24c2ff" />
                      <NewAmount>{parseInt(country.cases.new)}</NewAmount>
                    </>
                  ) : (
                      <></>
                    )}
                </ContentBothIndicator>
              </ContentLoader>
            </ActiveContent>
          </ContentBoth>

          <Separator />

          <ContentBoth>
            <Content>
              <Title>RECOVERED</Title>

              <ContentLoader
                active
                titleStyles={styles.title}
                pRows={0}
                loading={loadingCountry}>
                <RecoveredAmount>
                  {numberWithCommas(isNull(country.cases.recovered))}
                </RecoveredAmount>
              </ContentLoader>
            </Content>
            <Content>
              <Title>CRITICAL</Title>
              <ContentLoader
                active
                titleStyles={styles.title}
                pRows={0}
                loading={loadingCountry}>
                <CriticalAmount>
                  {numberWithCommas(isNull(country.cases.critical))}
                </CriticalAmount>
              </ContentLoader>
            </Content>
          </ContentBoth>

          <Separator />

          <ContentBoth>
            <Content>
              <Title>DEATHS</Title>
              <ContentLoader
                active
                titleStyles={styles.title}
                pRows={0}
                loading={loadingCountry}>
                <ContentBothIndicator>
                  <DeathAmount>
                    {numberWithCommas(isNull(country.deaths.total))}
                  </DeathAmount>
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
              </ContentLoader>
            </Content>
            <Content>
              <Title>TESTS</Title>
              <ContentLoader
                active
                titleStyles={styles.title}
                pRows={0}
                loading={loadingCountry}>
                <Amount>{numberWithCommas(isNull(country.tests.total))}</Amount>
              </ContentLoader>
            </Content>
          </ContentBoth>

          <Separator />

          <ContentBoth>
            <Content>
              <Title>MORTALITY</Title>
              <ContentLoader
                active
                titleStyles={styles.title}
                pRows={0}
                loading={loadingCountry}>
                <Amount>
                  {calculatePercent(country.cases.total, country.deaths.total)}
                </Amount>
              </ContentLoader>
            </Content>
            <Content>
              <Title>RECOVERY</Title>
              <ContentLoader
                active
                titleStyles={styles.title}
                pRows={0}
                loading={loadingCountry}>
                <Amount>
                  {calculatePercent(
                    country.cases.total,
                    country.cases.recovered,
                  )}
                </Amount>
              </ContentLoader>
            </Content>
          </ContentBoth>
        </ScrollContent>
      </Container>
    </Background>
  );
}
