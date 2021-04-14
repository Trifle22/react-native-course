import React, {useState} from 'react';
import { View , StyleSheet, TextInput, Button, Modal, Alert} from 'react-native';
import App from '../../App';
import {THEME} from '../theme';
import {AppButton} from './ui/AppButton';

export const EditModal = ({ visible, onCancel, value, onSave }) => {

  const [title, setTitle] = useState(value);

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert('Ошибка', `Минимальная длина названия - 3 символа. Сейчас - ${title.trim().length}`)
    } else {
      onSave(title)
    }
  }

  return (
    <Modal visible={visible} animationType='slide' transparent={false}>
      <View style={styles.wrap}>
        <TextInput 
        value={title}
        onChangeText={setTitle}
        style={styles.input} 
        placeholder='Введите название' 
        autoCapitalize='none' 
        autoCorrect={false}
        maxLength={64}
        />
        <View style={styles.buttons}>
          <AppButton onPress={onCancel} color={THEME.danger_color}>
            Отменить
          </AppButton>
          <AppButton onPress={saveHandler}>
            Сохранить
          </AppButton>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: THEME.main_color,
    width: '80%',
    marginBottom: 20,
    color: 'black',
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})