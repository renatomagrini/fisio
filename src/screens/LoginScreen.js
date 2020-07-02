import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  Card,
  Button,
  Provider as PaperProvider,
  DefaultTheme,
  Text,
} from 'react-native-paper';
import TextInputComponent from '../components/TextInputComponent';
import { efetuaLogin } from '../controllers/Login';
import { theme } from '../../styles';

export default function LoginScreen({ navigation }) {
  const [textMsg, setTextMsg] = React.useState('');

  const logar = () => {
    const valida = efetuaLogin('texto');
    if (valida == 'sucess') {
      navigation.navigate('Main');
      setTextMsg('');
    } else if (valida == 'error') setTextMsg(`Erro no Login`);
    else if (valida == 'errorPassword') setTextMsg(`Erro na Senha`);
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Image
          style={{
            width: 150,
            height: 175,
            opacity: 0.5,

            top: -50,
          }}
          resizeMode="cover"
          source={require('../../img/fisio.png')}
        />

        <View style={styles.secondView}>
          <TextInputComponent label="E-mail" />
          <Text> </Text>
          <Text> </Text>

          <TextInputComponent label="Password" />
          <Text> </Text>
          <Text style={{ color: 'red' }}>{textMsg}</Text>
          <Text> </Text>

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
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
});
