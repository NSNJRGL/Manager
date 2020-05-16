import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StyleSheet, SafeAreaView, Image, View} from 'react-native';
import {Layout, Text, Button} from '@ui-kitten/components';

import UI from '../constants/UI';
import PasswordInput from '../components/PasswordInput';
import Loading from '../components/Loading';

const LoginScreen = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const onLoginPress = () => {
    setLoading(true);
    props.navigation.navigate('App');
  };

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
            Нэвтрэх хэсэг
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <PasswordInput />
        </View>
        <View style={styles.buttonContainer}>
          <Text category="c1" style={styles.captionStyle} appearance="hint">
            Нууц үгээ оруулан үргэлжлүүлэх товчийг дарна уу!
          </Text>
          <Button onPress={onLoginPress}>ҮРГЭЛЖЛҮҮЛЭХ</Button>
        </View>
      </Layout>
      {loading ? <Loading /> : null}
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
  inputContainer: {
    width: '80%',
  },
  buttonContainer: {
    width: '80%',
  },
  captionContainer: {
    width: '100%',
  },
  captionStyle: {
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default LoginScreen;
