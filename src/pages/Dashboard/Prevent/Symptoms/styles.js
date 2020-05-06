import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  justify-content: center;
`;

export const BackgroundImage = styled.Image`
  position: absolute;
  height: 400px;
  width: 400px;
  right: -140px;
`;

export const SymptomsList = styled.View`
  flex: 1;
  align-items: flex-start;
  margin: 30px 0;
`;

export const SymptomsSide = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SymptomsContent = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 10px 40px;
`;

export const Name = styled.Text`
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;
