import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background: #fff;
`;

export const Header = styled.View`
  display: flex;
  height: 140px;
  background: #222b45;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Back = styled.TouchableOpacity`
  width: 100%;
  position: absolute;
  top: 10px;
  left: 15px;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Country = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
  margin-right: 5px;
  color: #fff;
`;

export const Date = styled.Text`
  font-size: 14px;
  margin-top: 5px;
  color: rgba(255, 255, 255, 0.6);
`;

export const Separator = styled.View`
  margin: 15px 20px;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
`;

export const StatesList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  background: #fff;
`;

export const StateContent = styled.View`
  margin: 0 35px;
`;

export const State = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const ContentStatistics = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #bbb;
  margin-bottom: 5px;
`;

export const ActiveAmount = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #24c2ff;
`;

export const DeathAmount = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

export const SuspectsAmount = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #eb5569;
`;
