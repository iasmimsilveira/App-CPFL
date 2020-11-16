import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './splash';
import Apresentacao from './apresentacao';
import Empresa from './empresa';
import AppDrawer from './drawer';
import LoginView from './login';
import Cadastro from './cadastro';
import Fim from './fim';
import Solicitacao from './solicitacao';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Apresentacao" component={Apresentacao} />
        <Stack.Screen name="Empresa" component={Empresa} />
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Solicitacao" component={Solicitacao} />
        <Stack.Screen name="Fim" component={Fim} />
        <Stack.Screen name="Drawer" component={AppDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*export default App;*/
