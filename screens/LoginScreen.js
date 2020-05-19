import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Layout, Text, Button, Input, Icon} from '@ui-kitten/components';
import {Formik} from 'formik';
import {useNetInfo} from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-community/async-storage';

import UI from '../constants/UI';
import Loading from '../components/Loading';
import {getAuthUrl, getFetch} from '../constants/ApiUrls';
import {signInSchema} from '../constants/ValidationSchemas';
import NetworkStatus from '../components/NetworkStatus';
import firebaseSvc from '../services/Firebase';

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

const renderPhoneIcon = (style) => <Icon {...style} name={'phone-outline'} />;

const label = (text) => <Text style={styles.labelStyle}>{text}</Text>;

const LoginScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [messages, setMessages] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const initialBody = {
    phone: '',
    password: '',
  };
  const netInfo = useNetInfo();

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('isLoggedIn', value);
    } catch (e) {
      console.log(e);
    }
  };

  const removeItem = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (exception) {
      return false;
    }
  };

  useEffect(() => {
    setIsConnected(netInfo.isConnected);
    (async () => {
      try {
        await AsyncStorage.getItem('isLoggedIn')
          .then(SplashScreen.hide())
          .then((key) => {
            if (key === 'true') {
              props.navigation.navigate('App');
            }
          });
      } catch (e) {
        console.log(e);
      }
    })();

    if (!netInfo.isConnected) {
      Keyboard.dismiss();
    }
  }, [netInfo]);

  const onIconPress = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderPasswordIcon = (styles) => (
    <TouchableWithoutFeedback onPress={onIconPress}>
      <Icon
        {...styles}
        name={secureTextEntry ? 'eye-off-outline' : 'eye-outline'}
      />
    </TouchableWithoutFeedback>
  );

  const loginFirebase = (fireEmail, firePassword) => {
    const user = {
      email: fireEmail,
      password: firePassword,
    };

    firebaseSvc.login(user, loginSuccess, loginFailed);
  };

  const loginSuccess = () => {
    console.log('login successful');
  };
  const loginFailed = () => {
    console.log('Login failure. Please try again.');
  };

  const onSubmit = async (values) => {
    Keyboard.dismiss();
    setLoading(true);
    getFetch(
      'https://jsonplaceholder.typicode.com/todos/1',
      // JSON.stringify({
      //   phone: values.phone,
      //   password: values.password,
      // }),
    )
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        storeData('true');
        props.navigation.navigate('App');
        // TODO swap json values
        loginFirebase('sammy@test.com', values.password);
      })
      .catch((error) => {
        setMessages(error);
        setLoading(false);
      });
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

        {messages !== '' && (
          <Text cate gory="h6" style={styles.message}>
            {messages}
          </Text>
        )}

        <Formik
          initialValues={initialBody}
          validationSchema={signInSchema}
          onSubmit={onSubmit}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={styles.inputContainer}>
                <Input
                  label={label('УTАСНЫ ДУГААР')}
                  value={values.phone}
                  placeholder="00000000"
                  accessoryRight={renderPhoneIcon}
                  textStyle={styles.textStyle}
                  autoCorrect={false}
                  keyboardType="numeric"
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  caption={errors.phone && touched.phone ? errors.phone : null}
                  captionIcon={errors.phone && touched.phone ? AlertIcon : null}
                />
                <Input
                  label={label('НУУЦ ҮГ')}
                  style={styles.password}
                  value={values.password}
                  placeholder="********"
                  secureTextEntry={secureTextEntry}
                  accessoryRight={renderPasswordIcon}
                  textStyle={styles.textStyle}
                  onIconPress={onIconPress}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  autoCorrect={false}
                  caption={
                    errors.password && touched.password ? errors.password : null
                  }
                  captionIcon={
                    errors.password && touched.password ? AlertIcon : null
                  }
                />
              </View>
              <View style={styles.buttonContainer}>
                <Text
                  category="c1"
                  style={styles.captionStyle}
                  appearance="hint">
                  Нууц үгээ оруулан үргэлжлүүлэх товчийг дарна уу!
                </Text>
                <Button onPress={handleSubmit}>ҮРГЭЛЖЛҮҮЛЭХ</Button>
              </View>
            </>
          )}
        </Formik>
      </Layout>
      {loading ? <Loading /> : null}
      {isConnected ? null : <NetworkStatus />}
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
  password: {
    marginTop: 20,
  },
  textStyle: {
    fontSize: 18,
  },
  labelStyle: {
    fontSize: 12,
    color: '#8F9BB3',
    fontWeight: 'bold',
  },
  message: {
    color: UI.primary,
  },
});

export default LoginScreen;
