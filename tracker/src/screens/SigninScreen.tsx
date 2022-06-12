import { StyleSheet, View } from 'react-native'
import React from 'react'

// reusable components
import AuthForm from '../reusableComponents/AuthForm';
import NavLink from '../reusableComponents/NavLink';

// enum
import { NavigationName } from '../constants/navigationName';

// hooks
import  useAuth  from '../hooks/useAuth';

const SignInScreen = () => {
  const { user, signIn } = useAuth();

  return (
      <View style = { styles.container }>
          <AuthForm
                  headerText = "Sign In to Your Account"
                  errorMessage = { user.errorMessage }
                  submitButtonText = "Sign In"
                  onSubmit = {({ email, password }) => signIn({ email, password } )}
          />
          <NavLink
              text = "No account? Please sign up."
              routeName = { NavigationName.SignUpScreen }
          />
      </View>
  );
};

export default SignInScreen

const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'center',
      marginBottom: '40%'
  },
});
