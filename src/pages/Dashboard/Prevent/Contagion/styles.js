import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;
export const Content = styled.View`
  display: flex;
  background: #fff;
  min-height: 100%;
`;

export const BackgroundImage = styled.Image`
  position: absolute;
  height: 320px;
  width: 320px;
  top: 250px;
  left: 135px;
`;

export const ContagionList = styled.View`
  display: flex;
  height: 100%;
  align-items: flex-start;
  margin: 23px 0;
`;

export const ContagionContent = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 10px 40px;
`;

export const Name = styled.Text`
  color: #222b45;
  font-size: 17px;
  font-weight: bold;
`;

export const Dot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #222b45;

  margin-right: 7px;
`;

export const Header = styled.View`
  display: flex;
  height: 140px;
  background: #222b45;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-right: 5px;
  color: #fff;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  margin-top: 5px;
  color: rgba(255, 255, 255, 0.6);
`;
