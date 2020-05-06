import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const BackgroundImage = styled.Image`
  position: absolute;
  height: 300px;
  width: 300px;
  bottom: 10px;
  right: -50px;
`;

export const ContagionList = styled.View`
  flex: 1;
  align-items: flex-start;
  margin: 30px 0;
`;

export const ContagionContent = styled.View`
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
