import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  SignIn:undefined;
  SignUp:undefined;
  Dashboard:undefined;
  Account : undefined;
  TrackCreate : undefined;
  TrackDetail : { _id: string };
  TrackList : undefined;
  TrackListFlow: undefined;
  ResolveAuth: undefined
}

export type Screen = StackNavigationProp<RootStackParamList>

export type User = {
  email: string;
  password: string;
}

export type UserAuth = {
  token: string;
  errorMessage: string;
}

export type AuthFormProps = {
  headerText: string;
  errorMessage: string;
  submitButtonText: string;
  onSubmit: ({ email, password}:User)  => Promise<void>
}

export type NavLinkProps = {
  text: string;
  routeName: keyof RootStackParamList;
}

export type LocationState = {
 recording: boolean,
 locations: Location[],
 currentLocation: any,
 name: string,
}

export type Tracks = {
 __v: number;
 _id: string;
 locations: Location[];
 name: string;
 userId: string;
}

export type Location = {
  coords:{
      accuracy: number;
      altitude: number| null;
      altitudeAccuracy: number | null;
      heading: number | null;
      latitude: number;
      longitude: number;
      speed: number | null;
  };
  timestamp: number;
}
