import React from 'react';
import { View, StyleSheet } from 'react-native'

export const AppCard = props => (
  <View style={ {...styles.default, ...props.style} }>
    {props.children}
  </View>
)

const styles = StyleSheet.create({
  default : {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    backgroundColor: 'white',
    borderRadius: 10,

  }
})