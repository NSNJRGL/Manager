import React from 'react';
import {StatusBar} from 'react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {default as customMapping} from './common/custom-mapping.json';

import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        customMapping={customMapping}
        {...eva}
        theme={eva.light}>
        <StatusBar barStyle="light-content" />
        <AppNavigator />
      </ApplicationProvider>
    </>
  );
};

export default App;
