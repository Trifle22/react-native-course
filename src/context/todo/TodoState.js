import React, {useReducer, useContext} from 'react';
import { Alert } from 'react-native'
import {TodoContext} from './todoContext';
import {todoReducer} from './todoReducer';
import {ScreenContext} from '../screen/screenContext';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, HIDE_LOADER, SHOW_LOADER, SHOW_ERROR, CLEAR_ERROR, FETCH_TODOS } from '../types';
import {Http} from '../../http'


export const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
    loading: false,
    error: null,
  }
  const {changeScreen} = useContext(ScreenContext)
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = async title => {
    clearError()
    try {
      const data = await Http.post('https://react-native-todo-app-d4a60-default-rtdb.firebaseio.com/todos.json', {title})
      dispatch({ type: ADD_TODO, title, id: data.name })
    } catch (e) {
      showError('Что-то пошло не так...')
    }
  }

  const removeTodo = id => {
    const todo = state.todos.find(todo => todo.id === id);
    Alert.alert(
      "Удаление элемента",
      `Вы уверены, что хотите удалить "${todo.title}"?`,
      [
        {
          text: "Отмена",
          style: "cancel",
        },
        {
          text: "Удалить",
          style: 'destructive',
          onPress: async () => {
            clearError();
            try {
              changeScreen(null)
              await Http.delete('https://react-native-todo-app-d4a60-default-rtdb.firebaseio.com/todos/${id}.json');
              dispatch({ type: REMOVE_TODO, id })
            } catch(error) {
              showError('Что-то пошло не так...')
            }
        }
        }
      ],
    );

  }

  const fetchTodos = async () => {
    showLoader();
    clearError();
    try {
      let data = await 
      Http.get('https://react-native-todo-app-d4a60-default-rtdb.firebaseio.com/todos.json')
      let todos;
      if (data) {
        todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
      } else {
        data = [];
      }
      todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
      dispatch({ type: FETCH_TODOS, todos });
    } catch(error) {
      showError('Что-то пошло не так...')
      console.log(error);
    } finally {
      hideLoader()
    }
  }

  const updateTodo = async (id, title) => {
    clearError()
    try {
      await Http.patch('https://react-native-todo-app-d4a60-default-rtdb.firebaseio.com/todos/${id}.json', {title})
      dispatch({ type: UPDATE_TODO, id, title })
    } catch (error) {
      showError('Что-то пошло не так...')
      console.log(error);
    }
  }

  const showLoader = () => dispatch({type: SHOW_LOADER})
  
  const hideLoader = () => dispatch({type: HIDE_LOADER})

  const showError = error => dispatch({type: SHOW_ERROR, error})

  const clearError = () => dispatch({type: CLEAR_ERROR})



  return (
    <TodoContext.Provider 
    value={{
      todos: state.todos,
      loading: state.loading,
      error: state.error,
      addTodo, 
      removeTodo, 
      updateTodo,
      fetchTodos
    }}>
      {children}
      </TodoContext.Provider>
  )

}