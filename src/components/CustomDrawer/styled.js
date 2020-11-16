import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: #d0ecf7;
`;

export const Item = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #ddd;
`;

export const Info = styled.View`
  margin-left: 10px;
`;

export const Name = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

export const Install = styled.Text`
  font-size: 16px;
  color: #000;
  margin-top: 10px;
`;

export const Bold = styled.Text`
  font-weight: bold;
  color: #83b81a;
`;

export const ItemDrawer = styled.View`
  flex-direction: row;
`;

export const ItemDrawerText = styled.Text`
  font-size: 16px;
  color: #000;
  margin-left: 5px;
`;
