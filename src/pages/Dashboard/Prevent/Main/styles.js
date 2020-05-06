import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Content = styled.View`
  background: #fff;
  flex: 1;
`;
export const Header = styled.View`
  height: 100px;
  background: #222b45;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: column;
`;

export const AppName = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const CountryPicker = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0 0px;
`;

export const CountryName = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-right: 5px;
  color: #fff;
`;

export const Logo1 = styled.Image`
  width: 130px;
  height: 130px;
  position: absolute;
  top: 55px;
  right: -60px;
`;

export const Logo2 = styled.Image`
  width: 90px;
  height: 90px;
  top: 0px;
  left: -30px;
  position: absolute;
`;
export const Logo3 = styled.Image`
  width: 60px;
  height: 60px;
  position: absolute;
  left: 40px;
  top: 120px;
`;

export const BgWorldMap = styled.Image`
  position: absolute;
  z-index: -5;
  width: 100%;
  height: 100%;
`;
