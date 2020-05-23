import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@ui-kitten/components';

import UI from '../constants/UI';

const EmptyChat = () => {
  return (
    <View style={styles.default}>
      <Text category="h6" style={styles.text}>
        Tанд одоогоор ирсэн мессеж байхгүй байна.
      </Text>
    </View>
  );
};

export default EmptyChat;

const styles = StyleSheet.create({
  default: {
    backgroundColor: UI.white,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    transform: [{scaleY: -1}],
  },
  text: {
    color: UI.primary,
  },
});
