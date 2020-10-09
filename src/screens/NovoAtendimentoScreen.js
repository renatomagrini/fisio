import React, { useState } from 'react';
import { View, StyleSheet, Image, StatusBar, Picker } from 'react-native';
import {
  Provider as PaperProvider,
  Text,
  ProgressBar,
  Colors,
} from 'react-native-paper';
import { getResults } from '../controllers/Login';
import { theme } from '../../styles';

export default function NovoAtendimento({ navigation, route }) {
  const { item } = route.params;
  const [selectedValue, setSelectedValue] = useState('java');
  const progressoEvolucao = item.evolucao / 100;

  console.log(item);
  console.log(item.evolucao / 100);

  return (
    <PaperProvider theme={theme}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Historico de Atendimento</Text>
      </View>
      <View style={styles.container}>
        <Text>Evolução:</Text>
      </View>
      <View>
        {progressoEvolucao <= 0.5 ? (
          <ProgressBar progress={item.evolucao / 100} color={Colors.red800} />
        ) : (
          <ProgressBar progress={item.evolucao / 100} color={Colors.green800} />
        )}
      </View>
      <View style={styles.container}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
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
