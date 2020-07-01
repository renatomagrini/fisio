import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Button, TextInput, Title, Paragraph } from 'react-native-paper';
import TextInputComponent from '../components/TextInputComponent';
import { efetuaLogin } from '../controllers/Login';

export default function LoginScreen() {
  const [text, setText] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>Fisio</Text>
      <View style={styles.secondView}>
        <Card>
          <Card.Content />
          <TextInputComponent label="Email" />
          <Text> </Text>
          <Text> </Text>

          <TextInputComponent label="Password" />
          <Text> </Text>
          <Text> </Text>
        </Card>
        <Button icon="login" mode="outlined" onPress={logar}>
          Logar
        </Button>
      </View>
    </View>
  );
}

const logar = () => {
  efetuaLogin('texto');
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondView: {
    width: '95%',
  },
});
