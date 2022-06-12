import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Screen, NavLinkProps } from '../type/TypeLibrary';
import Spacer from './Spacer'

const NavLink:React.FC<NavLinkProps> = ({ text, routeName }) => {
  const { navigate } = useNavigation<Screen>();
  return (
      <Spacer>
          <TouchableOpacity onPress={ ()=> navigate( routeName ) }>
              <Text style = { styles.link }>{ text }</Text>
          </TouchableOpacity>
      </Spacer>
  );
};

export default NavLink

const styles = StyleSheet.create({
  link: {
      color: "blue",
      fontSize: 16
  }
})
