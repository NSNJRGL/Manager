import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Text} from '@ui-kitten/components';

import UI from '../constants/UI';

const ImageLoading = () => {
  return (
    <View style={styles.default}>
      <ActivityIndicator size="large" color={UI.primary} />
      <Text category="h6" style={styles.text}>
        Tа түр хүлээнэ үү, зураг илгээгдэж байна!
      </Text>
    </View>
  );
};

export default ImageLoading;

const styles = StyleSheet.create({
  default: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: UI.white,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  text: {
    color: UI.primary,
    paddingTop: 20,
  },
});
