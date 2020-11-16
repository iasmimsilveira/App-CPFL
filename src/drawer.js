import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import CustomDrawer from './components/CustomDrawer';
import Home from './home';
import Perfil from './perfil';
import Servicos from './servicos';
import Ajuda from './ajuda';
import Fatura from './fatura';
import { Image, TouchableOpacity } from 'react-native';

const Drawer = createDrawerNavigator();

export default function AppDrawer({ navigation }) {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#d0ecf7',
          },
          // eslint-disable-next-line react/display-name
          headerTitle: () => <Image source={require('./../assets/logo.png')} />,
          // eslint-disable-next-line react/display-name
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Image source={require('./../assets/menu_icon.png')} />
            </TouchableOpacity>
          ),
          // eslint-disable-next-line react/display-name
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => alert('Tela em desenvolvimento')}
            >
              <Image source={require('./../assets/sino.png')} />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="PERFIL"
        component={Perfil}
        options={{
          headerStyle: {
            backgroundColor: '#d0ecf7',
          },
          // eslint-disable-next-line react/display-name
          headerTitle: () => <Image source={require('./../assets/logo.png')} />,
          // eslint-disable-next-line react/display-name
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Image source={require('./../assets/menu_icon.png')} />
            </TouchableOpacity>
          ),
          // eslint-disable-next-line react/display-name
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => alert('Tela em desenvolvimento')}
            >
              <Image source={require('./../assets/sino.png')} />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="FATURA"
        component={Fatura}
        options={{
          headerStyle: {
            backgroundColor: '#d0ecf7',
          },
          // eslint-disable-next-line react/display-name
          headerTitle: () => <Image source={require('./../assets/logo.png')} />,
          // eslint-disable-next-line react/display-name
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Image source={require('./../assets/menu_icon.png')} />
            </TouchableOpacity>
          ),
          // eslint-disable-next-line react/display-name
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => alert('Tela em desenvolvimento')}
            >
              <Image source={require('./../assets/sino.png')} />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="SERVICOS"
        component={Servicos}
        options={{
          headerStyle: {
            backgroundColor: '#d0ecf7',
          },
          // eslint-disable-next-line react/display-name
          headerTitle: () => <Image source={require('./../assets/logo.png')} />,
          // eslint-disable-next-line react/display-name
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Image source={require('./../assets/menu_icon.png')} />
            </TouchableOpacity>
          ),
          // eslint-disable-next-line react/display-name
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => alert('Tela em desenvolvimento')}
            >
              <Image source={require('./../assets/sino.png')} />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="AJUDA"
        component={Ajuda}
        options={{
          headerStyle: {
            backgroundColor: '#d0ecf7',
          },
          // eslint-disable-next-line react/display-name
          headerTitle: () => <Image source={require('./../assets/logo.png')} />,
          // eslint-disable-next-line react/display-name
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Image source={require('./../assets/menu_icon.png')} />
            </TouchableOpacity>
          ),
          // eslint-disable-next-line react/display-name
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => alert('Tela em desenvolvimento')}
            >
              <Image source={require('./../assets/sino.png')} />
            </TouchableOpacity>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
