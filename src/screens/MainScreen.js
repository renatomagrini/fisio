import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Banner } from 'react-native-paper';

export default function MainScreen({ navigation }) {
  const [visible, setVisible] = React.useState(true);
  return (
    <Banner
      visible={visible}
      actions={[
        {
          label: 'Fix it',
          onPress: () => setVisible(false),
        },
        {
          label: 'Learn more',
          onPress: () => setVisible(false),
        },
      ]}
      icon={({ size }) => (
        <Image
          source={{
            uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
          }}
          style={{
            width: size,
            height: size,
          }}
        />
      )}
    >
      Seja Bem, Renato Dominato Magrini Possui 0 atualizaçoes
    </Banner>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  secondView: {
    width: '95%',
  },
});
