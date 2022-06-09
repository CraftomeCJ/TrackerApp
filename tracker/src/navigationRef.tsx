import { CommonActions } from '@react-navigation/native';

let navigator: { dispatch: (arg0: CommonActions.Action) => void; };

export const setNavigator = (nav: { dispatch: (arg0: CommonActions.Action) => void; }) => {
  navigator = nav;
};

export const navigate = (routeName: any, params: any) => {
  navigator.dispatch(
    CommonActions.navigate({
      routeName,
      params
    })
  );
};
