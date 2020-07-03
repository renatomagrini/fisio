import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';

import { theme } from '../../styles';

import teste from '../screens/teste1';
import teste2 from '../screens/teste2';
import Login from '../screens/LoginScreen';
import Main from '../screens/MainScreen';

const Stack = createStackNavigator();

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
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={thema} />
          <Stack.Screen name="Main" component={Main} options={thema} />
          <Stack.Screen name="teste2" component={teste2} options={thema} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export function Router1() {
  console.log('chamei');
  return <Stack.Screen name="teste" component={teste} />;
}
export default Router;
