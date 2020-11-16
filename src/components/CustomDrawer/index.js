import React from 'react';
import { CommonActions } from '@react-navigation/native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import {
  Container,
  Item,
  Header,
  Avatar,
  Info,
  Name,
  Install,
  Bold,
  ItemDrawer,
  ItemDrawerText,
} from './styled';

export default function CustomDrawer(props) {
  const logout = () => {
    props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
    );
  };
  return (
    <Container>
      <Item>
        <Header>
          <Avatar
            source={{
              uri:
                'https://www.gravatar.com/avatar/3fefcffd132a31977368a615b12e60a7?s=120',
            }}
          />
          <Info>
            <Name>Olá Fulano,</Name>
            <Name>seja bem vindo!</Name>
            <Install>
              Instalação: <Bold>000000000</Bold>
            </Install>
          </Info>
        </Header>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            label={() => {
              return (
                <ItemDrawer>
                  <AntDesign name="setting" size={20} color="black" />
                  <ItemDrawerText>CONFIGURAÇÕES</ItemDrawerText>
                </ItemDrawer>
              );
            }}
            onPress={() => alert('Tela em desenvolvimento')}
          />
          <DrawerItem
            label={() => {
              return (
                <ItemDrawer>
                  <MaterialCommunityIcons
                    name="logout"
                    size={20}
                    color="black"
                  />
                  <ItemDrawerText>SAIR</ItemDrawerText>
                </ItemDrawer>
              );
            }}
            onPress={logout}
          />
        </DrawerContentScrollView>
      </Item>
    </Container>
  );
}
