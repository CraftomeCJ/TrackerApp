import {
    StyleSheet,
    View
    } from 'react-native';
import React, { useState, useContext } from 'react';

import { Input, Button, Text } from '@rneui/base';

import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

type Props = {
  navigation: any;
};

const SignupScreen = ({ navigation }: Props): React.ReactElement => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // console.log(state);

  return (

    <View style={styles.container}>

      <Spacer children={undefined} />
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>

      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        />

      <Spacer children={undefined} />

      <Input
        secureTextEntry={true}
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        />

        {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
      <Button title="Sign Up" onPress={() => signup({ email, password })} />
      </Spacer>

    </View>

  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  marginBottom: 150
},
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  },
});
