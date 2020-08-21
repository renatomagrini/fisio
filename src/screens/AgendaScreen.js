import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import { getResults } from '../controllers/Login';
import { theme } from '../../styles';

export default function AgendaScreen({ navigation }) {
  return (
    <PaperProvider theme={theme}>
      <View>
        <Text>agenda</Text>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
