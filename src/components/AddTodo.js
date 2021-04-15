import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Alert, Keyboard} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { THEME } from '../theme';

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('')

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
      Keyboard.dismiss();
    } else {
      Alert.alert('Введите название задачи')
    }
  }

  return (
    <View style={styles.block}>
      <TextInput style={styles.input}
      onChangeText={setValue}
      value={value}
      placeholder="Введите задачу..."
      autoCorrect={false}
      autoCapitalize="none"
      />
      <AntDesign.Button onPress={pressHandler} name="pluscircleo" style={styles.buttonPlus}>
      Добавить
      </AntDesign.Button>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    paddingTop: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,    
  },

  input : {
    width: '65%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: THEME.main_color,
    padding: 10,
    paddingLeft: 0,
  },
  buttonPlus: {
    backgroundColor: THEME.main_color,
  }

})