import * as React from 'react';
import { Text } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';

export default function TextInputComponent({ label }) {
  const [text, setText] = React.useState('');

  const onChangeText = (text) => setText(text);

  if (label == 'Email') {
    console.log(text.length);
    const hasErrors = () => {
      return !text.includes('@');
    };
  }

  return (
    <>
      <TextInput
        label={label}
        mode="outlined"
        value={text}
        onChangeText={onChangeText}
        onFocus={() => console.log(`no foco ${label}`)}
      />
    </>
  );
}
