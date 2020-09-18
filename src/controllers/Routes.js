import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar, View, Button } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';

import { theme } from '../../styles';

import Pacientes from '../screens/PacientesScreen';
import teste from '../screens/teste1';
import teste2 from '../screens/teste2';
import Login from '../screens/LoginScreen';
import Main from '../screens/MainScreen';
import Agenda from '../screens/AgendaScreen';
import Atendimentos from '../screens/AtendimentosScreen';
import DetalhePaciente from '../screens/DetalhePacienteScrren';

const Drawer = createDrawerNavigator();
const SettingsStack = createStackNavigator();

const thema = {
  headerTintColor: '#006b3f',
  headerStyle: { backgroundColor: 'white' },
  headerTitleAlign: 'center',
};

export default function Router() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Pacientes">
          <Drawer.Screen name="Main" component={Main} options={thema} />
          <Drawer.Screen name="Agenda" component={Agenda} options={thema} />
          <Drawer.Screen
            name="Atendimentos"
            component={Atendimentos}
            options={thema}
          />
          <Drawer.Screen
            name="Pacientes"
            component={Pacientes}
            options={thema}
          />

          <Drawer.Screen
            name="Sair"
            component={Login}
            options={{ gestureEnabled: false }}
          />

          <SettingsStack.Screen
            name="Detalhes"
            component={DetalhePaciente}
            options={{ gestureEnabled: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
