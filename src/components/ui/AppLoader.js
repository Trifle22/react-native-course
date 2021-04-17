import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { THEME } from '../../theme';

export const AppLoader = () => (
  <View style={styles.center}>
    <ActivityIndicator size="large" color={THEME.main_color}/>
  </View>
)

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})