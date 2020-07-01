import React from 'react';
import { Text } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function TextInputComponent({ label }) {
  const [text, setText] = React.useState('');
  return (
    <>
      <TextInput
        label={label}
        mode="outlined"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Text>{text}</Text>
    </>
  );
}
