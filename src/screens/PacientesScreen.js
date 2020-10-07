import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, StatusBar, Image } from 'react-native';
import {
  Button,
  Provider as PaperProvider,
  Text,
  ActivityIndicator,
} from 'react-native-paper';
import { getPacientes } from '../controllers/Pacientes';
import { theme } from '../../styles';

export default function PacienteScreen({ navigation }) {
  const [pacientes, setPacientes] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState([]);

  useEffect(() => {
    getPacientes().then(setPacientes).then();
  }, []);

  const consultaPaciente = (id, item) => {
    navigation.navigate('Detalhes', { item });
  };

  const atendimentoPaciente = (id, item) => {
    navigation.navigate('HistoricoPaciente', { item });
    console.log(id);
  };

  const Item = ({ nome, id, item, img }) => (
    <View style={styles.item}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: img,
        }}
      />

      <Text style={styles.pacienteName}>{nome}</Text>
      {setIsLoading(false)}
      <View style={styles.butao}>
        <Button
          icon="account"
          mode="Outlined button"
          onPress={() => consultaPaciente(id, item)}
        />
        <Button
          icon="ballot-outline"
          mode="Contained button"
          onPress={() => atendimentoPaciente(id, item)}
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
      img={item.img}
    />
  );

  return (
    <PaperProvider theme={theme}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Pacientes</Text>
      </View>
      {isLoading ? <ActivityIndicator /> : null}

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
    paddingHorizontal: 12,
    height: 55,
    borderWidth: 0.5,
    borderColor: 'tomato',
    alignItems: 'center',
    // justifyContent: 'space-around'
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tinyLogo: {
    width: 52,
    height: 52,
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
