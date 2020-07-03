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

export default function LoginScreen({ navigation }) {
  const [textMsg, setTextMsg] = React.useState('');
  const [textMail, setTextMail] = React.useState('renato');
  const [textPassword, setTextPassword] = React.useState('123456');

  const logar = () => {
    getResults(textMail, textPassword).then((resposta) => {
      if (resposta == 'sucess') {
        navigation.navigate('Main');
        setTextMail('');
        setTextMsg('');
      } else if (resposta == 'error') {
        setTextMsg(`Erro no Login`);
      } else if (resposta == 'errorPassword') setTextMsg(`Erro na Senha`);

      setTextPassword('');
    });
  };

  const handleChangeMail = (event) => {
    setTextMail(event.nativeEvent.text);
  };
  const handleChangePassword = (event) => {
    setTextPassword(event.nativeEvent.text);
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
          <TextInput
            label="User"
            mode="outlined"
            value={textMail}
            onChange={handleChangeMail}
          />
          <Text> </Text>
          <Text> </Text>

          <TextInput
            label="Password"
            mode="outlined"
            value={textPassword}
            onChange={handleChangePassword}
            secureTextEntry
          />
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
