import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import { Navbar } from './components/Navbar';
import {MainScreen} from './screens/MainScreen';
import {TodoScreen} from './screens/TodoScreen';
import {TodoContext} from './context/todo/todoContext';
import {ScreenContext} from './context/screen/screenContext';
import { THEME } from './theme';

export const MainLayout = () => {
  const {todoId} = useContext(ScreenContext)


  return (
    <View>
      <Navbar title="TodoApp"/>
      <View style={styles.content}>
        { todoId ? <TodoScreen/> : <MainScreen/> }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: THEME.padding_horizontal,
  }
});