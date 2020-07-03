import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar, View, Button } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';

import { theme } from '../../styles';

import teste from '../screens/teste1';
import teste2 from '../screens/teste2';
import Login from '../screens/LoginScreen';
import Main from '../screens/MainScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const thema = {
  headerTintColor: '#006b3f',
  headerStyle: { backgroundColor: 'white' },
  headerTitleAlign: 'center',
};

function Router() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Sair">
          <Drawer.Screen name="Main" component={Main} options={thema} />
          <Drawer.Screen name="teste2" component={teste2} options={thema} />
          <Drawer.Screen
            name="Sair"
            component={Login}
            options={{ gestureEnabled: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export function Router1() {
  console.log('chamei');
  return <Stack.Screen name="teste" component={teste} />;
}
export default Router;
