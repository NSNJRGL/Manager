import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

import CustomTopNavigation from '../components/CustomTopNavigation';

const AboutLegalScreen = ({navigation}) => {
  return (
    <Layout style={styles.container}>
      <CustomTopNavigation
        title="Сонгуулийн тухай"
        leftIcon={true}
        navigation={navigation}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 15,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  description: {
    marginBottom: 20,
    color: '#8F9BB3',
    fontSize: 15,
  },
});

export default AboutLegalScreen;
