import React, { useEffect } from 'react';
import { View, StyleSheet, StatusBar, FlatList } from 'react-native';
import {
  Provider as PaperProvider,
  Text,
  Card,
  Title,
  ActivityIndicator,
  FAB,
} from 'react-native-paper';
import { getHistorico } from '../controllers/Historico';
import { theme } from '../../styles';

export default function HistoricoAtendimento({ navigation, route }) {
  const [historico, setHistorico] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState([]);
  const { item } = route.params;

  useEffect(() => {
    setHistorico(null);
    console.log('Entrei aqui na use');
    getHistorico(item.idPaciente).then(setHistorico).then(console.log);
  }, []);

  const novoAtendimento = () => {
    navigation.navigate('NovoAtendimento', { item });
  };

  const Item = ({ nome }) => (
    <View>
      <Text>{nome}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <View style={styles.cardView}>
        <Item nome={item.dataAtendimento} />
      </View>
      <View style={styles.cardViewItens}>
        <Item nome={item.resumo} id={item.idPaciente} item={item} />
      </View>
      <View style={styles.cardViewItens}>
        <Item nome={item.historico} id={item.idPaciente} item={item} />
      </View>
      <View style={styles.cardViewItens}>
        <Text>Evolução: </Text>
        <Item nome={item.evolucao} id={item.idPaciente} item={item} />
      </View>
      <View style={styles.cardViewItens}>
        <Text>Duração: </Text>
      </View>
    </Card>
  );

  return (
    <PaperProvider theme={theme}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Historico de Atendimento</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={historico}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <FAB
        style={styles.fab}
        big
        icon="plus"
        color="red"
        onPress={() => novoAtendimento()}
      />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  card: {
    margin: 10,
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
  },
  cardView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardViewItens: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 3,
  },
  fontBold: {
    fontWeight: 'bold',
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
