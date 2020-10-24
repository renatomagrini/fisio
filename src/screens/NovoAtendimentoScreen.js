import React, { useState } from 'react';
import { View, StyleSheet, Alert, BackHandler, CheckBox } from 'react-native';
import {
  Provider as PaperProvider,
  Text,
  ProgressBar,
  Colors,
  TextInput,
  Button,
  Checkbox,
} from 'react-native-paper';
import { getResults } from '../controllers/Login';
import { postAtendimento } from '../controllers/NovoAendimento';
import { theme } from '../../styles';

export default function NovoAtendimento({ navigation, route }) {
  const { item } = route.params;
  const [novaEvolucao, setNovaEvolucao] = React.useState('');
  const [resumo, setResumo] = React.useState('');
  const [dia, setDia] = React.useState('');
  const [mes, setMes] = React.useState('');
  const [ano, setAno] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [atendimento, setAtendimento] = React.useState('');
  const [msgErro, setMsgErro] = React.useState('teste');
  const progressoEvolucao = item.evolucao / 100;

  // limpa os campos
  const clear = () => {
    setAno('');
    setMes('');
    setDia('');
    setAtendimento('');
    setNovaEvolucao('');
    setResumo('');
  };

  const alerta = (msg) => {
    Alert.alert(
      'Erro',
      msg,
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  };

  const salvar = () => {
    if (novaEvolucao == '') {
      console.log('evolucao ta em branco');
      alerta('Campo Evolução esta em branco.');
      return;
    }
    if (novaEvolucao >= 101) {
      console.log('evolução nao esta entre 0 a 100');
      alerta('Evolução deve ficar entre 0 a 100!');
      return;
    }
    if (resumo == '') {
      console.log('resumo ta em branco');
      alerta('Campo Resumo esta em branco.');
      return;
    }
    if (atendimento == '') {
      console.log('atendimento ta em branco');
      alerta('Campo Atendimento esta em branco.');
      return;
    }
    console.log('esta tudo certo');
    postAtendimento(item.idPaciente, novaEvolucao, resumo, atendimento);

    Alert.alert(
      'Alerta',
      'Tudo certo, gostaria de salvarr atendimento?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Sim', onPress: () => postAtendimento() },
      ],
      { cancelable: false }
    );
  };

  // captura o volta e limpa os campos
  BackHandler.addEventListener('hardwareBackPress', clear);

  return (
    <PaperProvider theme={theme}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Novo Atendimento</Text>
      </View>
      <View style={styles.container}>
        <Text>Evolução atual: {item.evolucao} </Text>
      </View>
      <View>
        {progressoEvolucao <= 0.5 ? (
          <ProgressBar progress={item.evolucao / 100} color={Colors.red800} />
        ) : (
          <ProgressBar progress={item.evolucao / 100} color={Colors.green800} />
        )}
      </View>
      <View style={styles.textEvolucao}>
        <TextInput
          label="evolução"
          value={novaEvolucao}
          onChangeText={(novaEvolucao) => setNovaEvolucao(novaEvolucao)}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.textTittle}>
        <TextInput
          label="Resumo"
          value={resumo}
          onChangeText={(resumo) => setResumo(resumo)}
        />
      </View>
      <View style={styles.textAtendimento}>
        <TextInput
          label="Atendimneto"
          value={atendimento}
          onChangeText={(atendimento) => setAtendimento(atendimento)}
          multiline
          numberOfLines={7}
        />
      </View>

      <View style={styles.checkbox}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={styles.checkboxText}>Possui proximo atendimento?</Text>
      </View>
      {console.log(checked)}

      <View style={styles.data}>
        <TextInput
          label="Dia"
          style={styles.campoData}
          value={dia}
          onChangeText={(dia) => setDia(dia)}
          keyboardType="number-pad"
          maxLength={2}
        />
        <Text> </Text>
        <Text> </Text>
        <TextInput
          style={styles.campoData}
          label="Mes"
          value={mes}
          onChangeText={(mes) => setMes(mes)}
          keyboardType="number-pad"
          maxLength={2}
        />
        <Text> </Text>
        <Text> </Text>
        <TextInput
          style={styles.campoData}
          label="Ano"
          value={ano}
          onChangeText={(ano) => setAno(ano)}
          keyboardType="number-pad"
          maxLength={4}
        />
      </View>
      <View style={styles.container}>
        <Text>{msgErro}</Text>
      </View>

      <View style={styles.btn}>
        <Button icon="file-upload" mode="outlined" onPress={salvar}>
          Salvar
        </Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
  },
  data: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  checkbox: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  checkboxText: {
    marginTop: 7,
  },
  campoData: {
    width: 80,
  },
  textEvolucao: {
    marginTop: 25,
    paddingLeft: 150,
    paddingRight: 150,
  },
  textTittle: {
    marginTop: 25,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textAtendimento: {
    marginTop: 25,
    paddingLeft: 10,
    paddingRight: 10,
  },
  btn: {
    marginTop: 30,
    paddingLeft: 120,
    paddingRight: 120,
  },
  fontBold: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
  },
  cardCenter: {
    alignItems: 'center',
  },
  img: {
    width: 250,
    marginTop: 3,
    marginEnd: 3,
  },
  viewTitle: {
    fontSize: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
