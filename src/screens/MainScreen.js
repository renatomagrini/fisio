import * as React from 'react';
import { Text } from 'react-native-paper';
import { getId, getNome } from '../../global';

export default function MainScreen({ navigation }) {
  const nome = getNome();
  return <Text>Teste</Text>;
}
