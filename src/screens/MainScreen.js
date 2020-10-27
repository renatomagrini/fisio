import * as React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import { theme } from '../../styles';

export default function MainScreen({ navigation }) {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Inicio</Text>
      </View>
      <View style={styles.container}>
        <Text>Inicio</Text>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
