import * as React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import {
  Provider as PaperProvider,
  Text,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';
import { theme } from '../../styles';

export default function DetalhePaciente({ navigation, route }) {
  const { item } = route.params;
  console.log(item);

  const B = (props) => (
    <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
  );

  return (
    <PaperProvider theme={theme}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Detalhes do Paciente</Text>
      </View>
      <View style={styles.container}>
        <Card style={styles.cardCenter}>
          <Card.Cover
            style={styles.img}
            source={{
              uri: item.img,
            }}
          />
          <Card.Content>
            <Title>{item.nome}</Title>
            <Paragraph>
              <B>Idade:</B> {item.idade}
            </Paragraph>
            <Paragraph>
              <B>Telefone:</B> {item.telefone}
            </Paragraph>
            <Paragraph>
              <B>Celular:</B> {item.celular}
            </Paragraph>
            <Paragraph>
              <B>Endereço:</B> {item.endereco}
            </Paragraph>
            <Paragraph>
              <B>Cep:</B> {item.cep}
            </Paragraph>
            <Paragraph>
              <B>E-mail:</B> {item.email}
            </Paragraph>
            <Paragraph>
              <B>lesão:</B> {item.lesao}
            </Paragraph>
            <Paragraph>
              <B>Evolução:</B> {item.evolucao}%
            </Paragraph>
            <Paragraph>
              <B>Proximo Atendimento:</B> {item.proximoAtendimento}
            </Paragraph>
            <Paragraph>
              <B>Ultimo Atendimento:</B> {item.ultimoAtendimento}
            </Paragraph>
          </Card.Content>
        </Card>
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
