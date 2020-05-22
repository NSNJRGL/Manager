import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {default as customMapping} from './common/custom-mapping.json';
import {default as theme} from './common/custom-theme.json';

import AppNavigator from './navigation/AppNavigator';
import {UserContext} from './context/UserContext';

const App = () => {
  const [currentUser, setCurrentUser] = useState(0);
  const value = {currentUser, setCurrentUser};

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        customMapping={customMapping}
        {...eva}
        theme={{...eva.light, ...theme}}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <UserContext.Provider value={value}>
          <AppNavigator />
        </UserContext.Provider>
      </ApplicationProvider>
    </>
  );
};

export default App;
