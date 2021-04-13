import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('')

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
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
      <Button title="Добавить" onPress={pressHandler}/>
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
    width: '70%',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'indianred',
    padding: 10,
  }

})