import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, StatusBar } from 'react-native';
import { Button, Provider as PaperProvider, Text } from 'react-native-paper';
import { getPacientes } from '../controllers/Pacientes';
import { theme } from '../../styles';

export default function PacienteScreen({ navigation }) {
  const [pacientes, setPacientes] = React.useState([]);

  useEffect(() => {
    getPacientes(1).then(setPacientes).then(console.log);
  }, []);

  const consultaPaciente = (id, item) => {
    navigation.navigate('Detalhes', { item });
  };

  const atendimentoPaciente = (id) => {
    console.log(id);
  };

  const Item = ({ nome, endereco, id, item }) => (
    <View style={styles.item}>
      <Text style={styles.pacienteName}>{nome}</Text>
      <View style={styles.butao}>
        <Button
          icon="account"
          mode="Outlined button"
          onPress={() => consultaPaciente(id, item)}
        />
        <Button
          icon="ballot-outline"
          mode="Contained button"
          onPress={() => atendimentoPaciente(id)}
        />
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item
      nome={item.nome}
      endereco={item.endereco}
      id={item.idPaciente}
      item={item}
    />
  );

  return (
    <PaperProvider theme={theme}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Pacientes</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={pacientes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  butao: {
    flexDirection: 'row',
  },

  item: {
    paddingHorizontal: 15,
    height: 55,
    // backgroundColor: '#Azure',
    borderWidth: 0.5,
    borderColor: 'tomato',

    // flex
    alignItems: 'center',
    // justifyContent: 'space-around'
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pacienteName: {
    fontSize: 20,
  },
  title: {
    fontSize: 30,
  },
  viewTitle: {
    fontSize: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
