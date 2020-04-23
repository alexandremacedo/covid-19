import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BgWorldMap = styled.Image`
  position: absolute;
  z-index: -5;
  width: 100%;
  height: 100%;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

export const AppName = styled.Text`
  color: #eb5569;
  font-size: 18px;
  font-weight: bold;
`;
