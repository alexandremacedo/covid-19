import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
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

export const Content = styled.View`
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

export const CountryList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 10px 0 10px;
  padding: 0 20px;
`;

export const HeaderModal = styled.View`
  background: #e67e22;
  border-radius: 4px;
  padding: 15px 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
`;

export const Country = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  flex: 1;
  padding: 10px 10px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;

export const Name = styled.Text`
  color: #333;
  margin: 0 15px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(0, 0, 0, 0.6);
`;
