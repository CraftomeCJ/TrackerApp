import  AsyncStorage  from '@react-native-async-storage/async-storage'
import trackerApi from '../api/tracker'

import { useRecoilState } from 'recoil';
import { userAuth } from '../Recoil/atom';

import { useNavigation } from '@react-navigation/native';

import { NavigationName } from '../constants/navigationName';
import { User, Screen } from '../type/TypeLibrary';


export default () => {
  const [ user , setUser ] = useRecoilState( userAuth );
  const { navigate } = useNavigation<Screen>();


  // to automatic signin
  const tryLocalSignIn = async () => {
      const token = await AsyncStorage.getItem( 'token' );
      if( token ) {
          setUser({ errorMessage: "", token: token })
          navigate( NavigationName.Dashboard )
      } else {
          navigate( NavigationName.SignUpScreen )
      }
  };

  // signup
  const signUp = async ({ email , password }:User ):Promise<void> => {
      try {
          const response = await trackerApi.post( '/signUp', { email, password });
          await AsyncStorage.setItem( 'token', response.data.token );
          setUser({ errorMessage: "", token: response.data.token })
          navigate( NavigationName.Dashboard )
      } catch ( err ) {
          setUser( { ...user, errorMessage: "Something went wrong with sign up" });
      }
  };

  // signin
  const signIn = async ({ email , password }:User ):Promise<void> => {
      try {
          const response = await trackerApi.post( '/signIn', { email, password } );
          await AsyncStorage.setItem( 'token', response.data.token );
          setUser({ errorMessage: "", token: response.data.token })
          navigate( NavigationName.Dashboard )
      } catch ( err ) {
          setUser( { ...user, errorMessage: "Something went wrong with sign in" });
      }
  }

  const signOut = async () => {
      await AsyncStorage.removeItem('token');
      setUser({ token: "", errorMessage:"" })
      navigate( NavigationName.SignUpScreen )
  }

  const clearErrorMessage = () => {
      setUser({ ...user, errorMessage: "" })
  }

  return { user , signIn, signUp, signOut, clearErrorMessage, tryLocalSignIn }
}
