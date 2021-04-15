import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {AppTextBold} from '../components/ui/AppTextBold';
import {THEME} from '../theme';

export const Navbar = ({title}) => {
  return (
    <View style={{...styles.navbar, ...Platform.select({
      ios: styles.navbarIos,
      android: styles.navbarAndroid,
    })}}>
      <AppTextBold style={styles.text}>{title}</AppTextBold>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingBottom: 10,
      marginBottom: 10,
  },

  navbarAndroid: {
    backgroundColor: THEME.main_color,
  },

  navbarIos: {
    backgroundColor: 'transparent',
    borderBottomColor: THEME.main_color,
    borderBottomWidth: 1,
  },

  text: {
    color: Platform.OS === 'android' ? 'white' : THEME.main_color,
    fontSize: 20,
  }

})
