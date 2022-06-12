import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'

import { Button } from '@rneui/base';
import Spacer from '../reusableComponents/Spacer';
import useAuth from '../hooks/useAuth';

const AccountScreen = () => {
  const { signOut } = useAuth();

  return (
      <SafeAreaView>
          <Text style = {{ fontSize: 48 }}>Account Screen</Text>
          <Spacer>
              <Button title = "Sign Out" onPress={ signOut }  />
          </Spacer>
      </SafeAreaView>
  );
};

export default AccountScreen

const styles = StyleSheet.create({})
