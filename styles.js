import { DefaultTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#006b3f',
    accent: 'yellow',
    text: 'green',
    // background: '#F8F8FF',
    // contained: 'red',
    // placeholder: 'red',
  },
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    //  textAlign: 'center',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
