import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StyleSheet, SafeAreaView, Image, View} from 'react-native';
import {Layout, Text, Button} from '@ui-kitten/components';

import UI from '../constants/UI';
import PasswordInput from '../components/PasswordInput';

const LoginScreen = (props) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.default}>
      <Layout style={styles.container}>
        <View>
          <Image
            style={styles.logo}
            source={require('../assets/images/logo.png')}
          />
        </View>
        <View>
          <Text style={styles.textStyle} category="h1">
            Нууц үгээ оруулна уу!
          </Text>
        </View>
        <View>
          <PasswordInput />
        </View>
        <View style={styles.captionContainer}>
          <Text category="c1" style={styles.captionStyle} appearance="hint">
            Нууц үгээ оруулан үргэлжлүүлэх товчийг дарна уу!
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button>ҮРГЭЛЖЛҮҮЛЭХ</Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: UI.white,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    width: '80%',
  },
  captionContainer: {
    width: '50%',
  },
  captionStyle: {
    textAlign: 'center',
  },
});

export default LoginScreen;
