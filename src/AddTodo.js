import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

export const AddTodo = ({ onSubmit }) => {

  const pressHandler = () => {
    onSubmit('test')
  }

  return (
    <View style={styles.block}>
      <TextInput style={styles.input}/>
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