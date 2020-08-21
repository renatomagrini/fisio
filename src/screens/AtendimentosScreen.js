import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  Button,
  Provider as PaperProvider,
  Text,
  TextInput,
} from 'react-native-paper';
import { getResults } from '../controllers/Login';
import { theme } from '../../styles';

export default function AtendimentosScreen({ navigation }) {
  return (
    <PaperProvider theme={theme}>
      <View>
        <Text>Tela de pacientes</Text>
      </View>
    </PaperProvider>
  );
}
