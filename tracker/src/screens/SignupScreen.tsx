import React from 'react';
import { View, StyleSheet } from 'react-native';

// enum
import { NavigationName } from '../constants/navigationName';

// hooks
import useAuth from '../hooks/useAuth';

// helper components
import AuthForm from '../reusableComponents/AuthForm';
import NavLink from '../reusableComponents/NavLink';

const SignUpScreen = () => {
  const { user, signUp } = useAuth();

  return (
    <View style={ styles.container }>
      <AuthForm
        headerText='Sign Up for Tracker'
        errorMessage={user.errorMessage}
        submitButtonText='Sign Up'
        onSubmit={({ email, password }) => signUp({ email, password })}
      />
      <NavLink
        text='Already have an account? Sign In instead'
        routeName={NavigationName.SignInScreen}
      />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: '50%',
  },
});
