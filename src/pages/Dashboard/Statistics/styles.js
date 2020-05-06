import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const TotalContent = styled.View`
  background: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const ScrollContent = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  background: #fff;
`;

export const Separator = styled.View`
  margin: 0 10px;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
`;

export const TotalCard = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  padding: 30px 0;
`;

export const TotalTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #222b45;
`;
export const TotalAmount = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #222b45;
`;

export const ContentBoth = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

export const ContentBothIndicator = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const ActiveContent = styled.View`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Content = styled.View`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #bbb;
  margin-bottom: 5px;
`;
export const Amount = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #6c757d;
`;

export const ActiveAmount = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #24c2ff;
  margin-right: 5px;
`;
export const NewAmount = styled.Text`
  font-size: 16px;
  color: #24c2ff;
`;

export const RecoveredAmount = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #28a745;
`;
export const CriticalAmount = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #eb5569;
`;

export const DeathAmount = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #333;
  margin-right: 5px;
`;
export const DeathNewAmount = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const ContainerModal = styled.View`
  top: -6%;
  max-height: 70%;
`;

export const ContentModal = styled.View`
  background: #fff;
  border-radius: 4px;
  margin: 0 15px;
  margin-top: -15px;
`;

export const ButtonModal = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  z-index: 5;
  background: #797793;
`;

export const SeparatorModal = styled.View`
  height: 1px;
  background: rgba(0, 0, 0, 0.2);
`;

export const CountryList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 10px 0 10px;
  padding: 0 20px;
`;

export const HeaderModal = styled.View`
  background: #eb5569;
  border-radius: 4px;
  padding: 20px 15px;
`;

export const TitleModal = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
`;

export const Country = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: 10px 10px;
  flex-direction: row;
  align-items: center;
`;

export const Flag = styled.Image`
  height: 40px;
  width: 40px;
`;

export const Name = styled.Text`
  color: #333;
  padding: 10px 0;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
`;

export const Header = styled.View`
  height: 200px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: -15px 25px 0;
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

export const Date = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
`;

export const Logo1 = styled.Image`
  width: 140px;
  height: 140px;
  position: absolute;
  top: 130px;
  left: -60px;
`;

export const Logo2 = styled.Image`
  width: 90px;
  height: 90px;
  right: -20px;
  top: 5px;
  position: absolute;
`;
export const Logo3 = styled.Image`
  width: 60px;
  height: 60px;
  position: absolute;
  right: 70px;
  top: 170px;
`;

export const Press = styled.Text`
  position: absolute !important;
  color: transparent !important;
  z-index: 5;
  height: 130%;
  background: transparent !important;
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

export const LoadingCountry = styled.View`
  display: flex;
  background: #fff;
  align-items: center;
  justify-content: center;

  flex: 1;
`;
