import React, { ReactElement } from 'react';
import { RecoilRoot } from 'recoil';
import MainStack from './src/routes/MainStack';


const App = (): ReactElement => {
  return (
    <RecoilRoot>
       <MainStack />
    </RecoilRoot>
  );
};

export default App;
