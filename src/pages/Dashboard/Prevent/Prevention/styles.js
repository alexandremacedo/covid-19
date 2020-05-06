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
  left: -260px;
`;

export const PreventionList = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const PreventionCenter = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-left: 80px;
  flex-direction: column;
`;

export const PreventionContent = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 10px 40px;
`;

export const Image = styled.Image`
  height: 50px;
  width: 50px;
  margin-right: 10px;
`;

export const Name = styled.Text`
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;
