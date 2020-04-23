import React, { useState, useEffect } from 'react';
import Modal from 'react-native-modal';
import {
  Container,
  Logo1,
  Logo2,
  Logo3,
  AppName,
  CountryPicker,
  CountryName,
  Info,
  Date,
  Content,
  ButtonModal,
  ContentModal,
  HeaderModal,
  Title,
  CountryList,
  Country,
  Avatar,
  Name,
  Separator,
} from './styles';
import coronavirus from '~/assets/coronavirus.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({ countryName, setCountryName }) {
  // setCountryName('Italy');
  const [visible, setVisible] = useState(false);

  const countries = ['Brazil', 'USA', 'France', 'Italy'];

  function handleModal() {
    setVisible(!visible);
  }

  function renderItem({ item: country, index }) {
    return (
      <>
        {index === 0 ? (
          <Country
            onPress={() => {
              setCountryName(country);
              handleModal();
            }}>
            <Avatar source={coronavirus} />
            <Name
              onPress={() => {
                setCountryName(country);
                handleModal();
              }}>
              {country}
            </Name>
          </Country>
        ) : (
            <>
              <Separator />
              <Country
                onPress={() => {
                  setCountryName(country);
                  handleModal();
                }}>
                <Avatar source={coronavirus} />
                <Name
                  onPress={() => {
                    setCountryName(country);
                    handleModal();
                  }}>
                  {country}
                </Name>
              </Country>
            </>
          )}
      </>
    );
  }

  return (
    <Container>
      <Modal isVisible={visible}>
        <Content>
          <ButtonModal onPress={handleModal}>
            <Icon name="close" size={20} color="#fff" />
          </ButtonModal>
          <ContentModal>
            <>
              <HeaderModal>
                <Title>Selecione um profissional</Title>
              </HeaderModal>
              <CountryList
                data={countries}
                keyExtractor={(country) => String(country)}
                renderItem={renderItem}
              />
            </>
          </ContentModal>
        </Content>
      </Modal>

      <Info>
        <AppName>COVID-19 statistics</AppName>
        <CountryPicker onPress={handleModal}>
          <CountryName onPress={handleModal}>{countryName}</CountryName>
          <Icon name="arrow-drop-down" size={30} color="#fff" />
        </CountryPicker>
        <Date>Last update 2 hours ago</Date>
      </Info>
      <Logo1 source={coronavirus} />
      <Logo2 source={coronavirus} />
      <Logo3 source={coronavirus} />
    </Container>
  );
}
