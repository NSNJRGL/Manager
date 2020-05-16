import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Text} from '@ui-kitten/components';

import UI from '../constants/UI';

const Loading = () => {
  return (
    <View style={styles.default}>
      <ActivityIndicator size="large" color={UI.primary} />
      <Text category="h6" style={styles.text}>
        Ачааллаж байна
      </Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  default: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: UI.blackOpacity,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  text: {
    color: UI.white,
    paddingTop: 20,
  },
});
