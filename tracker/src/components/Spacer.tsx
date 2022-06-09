import {
    StyleSheet,
    View
    } from 'react-native'
import React from 'react'

type Props = {
  children: any
}

const spacer = ({children}: Props) => {
  return (

  <View
   style={styles.spacer}>
     {children}
     </View>
  )
  
};

export default spacer;

const styles = StyleSheet.create({
  spacer: {
    margin: 15
  }
});
