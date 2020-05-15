import React, { useState, useEffect } from 'react';
import Background from '~/components/Background';
import { StyleSheet, View } from 'react-native';
import ContentLoader from 'react-native-easy-content-loader';

import {
  Container,
  StatesList,
  Separator,
  StateContent,
  State,
  ContentStatistics,
  Content,
  Title,
  ActiveAmount,
  DeathAmount,
  SuspectsAmount,
  Header,
  Country,
  Info,
  Date,
  Back,
  SeparatorState,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/apiBrazil';
import format from '~/utils/format';

import numberWithCommas from '~/utils/numberWithCommas';

const styles = StyleSheet.create({
  title: {
    width: '100%',
    height: 25,
    marginTop: 5,
  },
  date: {
    width: '60%',
    alignSelf: 'center',
    height: 20,
    marginTop: 10,
  },
  state: {
    width: '60%',
    height: 25,
    marginTop: 10,
  },
});

export default function Statistics({ navigation }) {
  const [states, setStates] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStatesStatistcs() {
      const response = await api.get();
      const statesStatistics = response.data.data;

      setStates(statesStatistics);

      console.log(states);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    loadStatesStatistcs();
  }, []);

  function isNull(data) {
    if (data === null || data === undefined) {
      return '--';
    }
    return data;
  }

  function renderItem({ item: state, index }) {
    return (
      <>
        {index === 0 ? <View style={{ marginTop: 5 }} /> : <></>}
        <StateContent>
          <ContentLoader
            active
            titleStyles={styles.state}
            pRows={0}
            loading={loading}>
            {loading ? (
              <></>
            ) : (
                <>
                  <State>{loading ? '' : state.state}</State>
                </>
              )}
          </ContentLoader>
          <Separator />
          <ContentStatistics>
            <Content>
              <Title>CONFIRMED</Title>
              <ContentLoader
                active
                titleStyles={styles.title}
                pRows={0}
                loading={loading}>
                {loading ? (
                  <></>
                ) : (
                    <>
                      <ActiveAmount>
                        {numberWithCommas(isNull(state.cases))}
                      </ActiveAmount>
                    </>
                  )}
              </ContentLoader>
            </Content>
            <Content>
              <Title>DEATH</Title>
              <ContentLoader
                active
                titleStyles={styles.title}
                pRows={0}
                loading={loading}>
                {loading ? (
                  <></>
                ) : (
                    <>
                      <DeathAmount>
                        {numberWithCommas(isNull(state.deaths))}
                      </DeathAmount>
                    </>
                  )}
              </ContentLoader>
            </Content>
            <Content>
              <Title>SUSPECTS</Title>
              <ContentLoader
                active
                titleStyles={styles.title}
                pRows={0}
                loading={loading}>
                {loading ? (
                  <></>
                ) : (
                    <>
                      <SuspectsAmount>
                        {numberWithCommas(isNull(state.suspects))}
                      </SuspectsAmount>
                    </>
                  )}
              </ContentLoader>
            </Content>
          </ContentStatistics>
        </StateContent>

        {index === 26 ? <View style={{ marginBottom: 20 }} /> : <></>}
      </>
    );
  }

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <Background>
      <Container>
        <Header>
          <Back onPress={() => navigation.goBack(null)}>
            <Icon name="arrow-back" size={25} color="#fff" />
          </Back>
          <Info>
            <Country>States</Country>
            <ContentLoader
              active
              titleStyles={styles.date}
              pRows={0}
              loading={loading}>
              {loading ? (
                <></>
              ) : (
                  <>
                    <Date>Last update {isNull(format(states[0].datetime))}</Date>
                  </>
                )}
            </ContentLoader>
          </Info>
        </Header>
        <StatesList
          data={states}
          // ItemSeparatorComponent={() => <Separator />}
          keyExtractor={(states) => String(states.state)}
          renderItem={renderItem}
        />
      </Container>
    </Background>
  );
}
