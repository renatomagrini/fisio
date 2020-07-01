import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  Card,
  Button,
  Provider as PaperProvider,
  DefaultTheme,
} from 'react-native-paper';
import TextInputComponent from '../components/TextInputComponent';
import { efetuaLogin } from '../controllers/Login';

export default function LoginScreen({ navigation }) {
  const [textMsg, setTextMsg] = React.useState('');

  const logar = () => {
    const valida = efetuaLogin('texto');
    if (valida) navigation.navigate('Main');
    else setTextMsg(`Não logou`);
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text style={{ fontSize: 40 }}>Fisio</Text>
        <View style={styles.secondView}>
          <Card>
            <TextInputComponent label="Email" />
            <Text> </Text>
            <Text> </Text>

            <TextInputComponent label="Password" />
            <Text> </Text>
            <Text style={{ color: 'red' }}>{textMsg}</Text>
            <Text> </Text>
          </Card>
          <Button icon="login" mode="outlined" onPress={logar}>
            Logar
          </Button>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  secondView: {
    width: '95%',
  },
});

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};
