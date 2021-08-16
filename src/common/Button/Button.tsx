import React from 'react'
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import { theme } from '../theme';

function Button(props: any) {
  const { onPress, loading, title = 'Save' } = props;
  return (
    <Pressable style={style.button} onPress={onPress}>
      {loading ? <ActivityIndicator size="large" color={theme.white} /> : <Text style={style.text}>{title}</Text>}
    </Pressable>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: theme.white,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    width: '90%',
    borderRadius: 50,
    elevation: 3,
    // backgroundImage: 'linear-gradient(to bottom left, red, #ffba00)',
    backgroundColor: theme.primary
  },
})
export default Button
