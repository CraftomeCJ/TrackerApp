import { StyleSheet } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

// react-native-elements
import { Text, Button, Input } from '@rneui/base';

// helper components
import Spacer from './Spacer';

// hooks
import  useAuth from '../hooks/useAuth';

// type
import { AuthFormProps } from '../type/TypeLibrary';

const AuthForm:React.FC<AuthFormProps> = ({
  headerText,
  errorMessage,
  onSubmit,
  submitButtonText }) => {
    // state storage
  const { setOptions } = useNavigation();
  const [ email , setEmail ] = useState( "" );
  const [ password , setPassword ] = useState ( "" );
  const { clearErrorMessage } = useAuth();

  // lifecycle methods
  useEffect( () => {
      setOptions({
          header: ()=> null
      });
  }, [] )

  useFocusEffect(
      useCallback( () => {
          setEmail("");
          setPassword("");
          clearErrorMessage();
      }, [] )
  )

  return (
      <>
          <Spacer>
              <Text h1>{headerText}</Text>
          </Spacer>
          <Spacer>
              <Input label = "Email"
                      value = { email }
                      onChangeText = { setEmail }
                      autoCapitalize = 'none'
                      autoCorrect = { false }
                      autoCompleteType = { undefined }
              />
              <Spacer />
              <Input label = "Password"
                      value = { password }
                      onChangeText = { setPassword }
                      secureTextEntry
                      autoCapitalize = 'none'
                      autoCorrect = { false }
                      autoCompleteType = { undefined }
              />
          </Spacer>
          <Text style = { styles.errorMessage } >
              {errorMessage ?? "" }
          </Text>
          <Spacer>
              <Button title = { submitButtonText }
                      onPress = { () => onSubmit( { email, password }) }
              />
          </Spacer>
      </>

  );
};

const styles = StyleSheet.create({
  errorMessage: {
      height:30,
      fontSize: 16,
      color: "red",
      marginHorizontal: 15,
      marginBottom: -10,
      marginTop: -30,
  },
})

export default AuthForm;
