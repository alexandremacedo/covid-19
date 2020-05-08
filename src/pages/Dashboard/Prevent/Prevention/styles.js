import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const BackgroundImage = styled.Image`
  position: absolute;
  height: 350px;
  width: 350px;
  top: 200px;
  left: -240px;
`;

export const Content = styled.View`
  display: flex;
  min-height: 100%;
`;

export const PreventionList = styled.View`
  flex: 1;

  justify-content: center;
`;

export const PreventionCenter = styled.View`
  display: flex;
  align-items: flex-start;
  margin-left: 100px;
  flex-direction: column;
`;

export const PreventionContent = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 10px 0px 10px 15px;
`;

export const Dot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #222b45;

  margin-right: 11px;
`;
export const Name = styled.Text`
  color: #222b45;
  font-size: 17px;
  font-weight: bold;
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
