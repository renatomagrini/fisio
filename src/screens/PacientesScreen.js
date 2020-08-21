import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, FlatList, StatusBar } from 'react-native';
import {
  Button,
  Provider as PaperProvider,
  Text,
  Avatar,
} from 'react-native-paper';
import { getPacientes } from '../controllers/Pacientes';
import { theme, style } from '../../styles';

export default function PacienteScreen({ navigation }) {
  const [pacientes, setPacientes] = React.useState([]);

  console.log(pacientes);

  useEffect(() => {
    getPacientes(1).then(setPacientes).then(console.log);
  }, []);

  const Item = ({ nome, endereco }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{nome}</Text>
      <Button
        icon="camera"
        mode="Outlined"
        onPress={() => console.log('Pressed')}
      />
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}
      />
    </View>
  );

  const renderItem = ({ item }) => (
    <Item nome={item.nome} endereco={item.endereco} />
  );

  return (
    <PaperProvider theme={theme}>
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
    width: 1,
    height: 29,
  },

  item: {
    paddingHorizontal: 15,
    height: 50,
    // backgroundColor: '#Azure',
    borderWidth: 0.5,
    borderColor: 'tomato',

    // flex
    alignItems: 'center',
    // justifyContent: 'space-around'
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
  },
  p: {
    fontSize: 12,
  },
});
