import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import teste from '../screens/teste1';
import teste2 from '../screens/teste2';
import Login from '../screens/LoginScreen';
import Main from '../screens/MainScreen';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="teste2" component={teste2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function Router1() {
  console.log('chamei');
  return <Stack.Screen name="teste" component={teste} />;
}
export default Router;
