import React, { useState } from 'react';
import { View, StyleSheet, Image, StatusBar, Picker } from 'react-native';
import {
  Provider as PaperProvider,
  Text,
  ProgressBar,
  Colors,
  TextInput,
  Button,
} from 'react-native-paper';
import { getResults } from '../controllers/Login';
import { theme } from '../../styles';

export default function NovoAtendimento({ navigation, route }) {
  const { item } = route.params;
  const [novaEvolucao, setNovaEvolucao] = React.useState('');
  const [resumo, setResumo] = React.useState('');
  const [atendimento, setAtendimento] = React.useState('');
  const progressoEvolucao = item.evolucao / 100;

  const salvar = () => {
    if (novaEvolucao == '') {
      console.log('evolucao ta em branco');
    }
    if (resumo == '') {
      console.log('resumo ta em branco');
    }
    if (atendimento == '') {
      console.log('atendimento ta em branco');
    }
  };

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
        />
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
