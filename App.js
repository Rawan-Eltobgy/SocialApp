import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import {AppContainer} from './src/router';

const App = () => {
  return (
    <NavigationContainer>
      {
          <AppContainer />
      }
    </NavigationContainer>
  );
};

export default App;
