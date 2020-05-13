import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const LoginScreen = (props) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;
