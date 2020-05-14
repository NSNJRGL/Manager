import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout} from '@ui-kitten/components';

import CustomTopNavigation from '../components/CustomTopNavigation';

const MapScreen = () => {
  return (
    <Layout style={styles.container}>
      <CustomTopNavigation title="Байршил" />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
  },
});

export default MapScreen;
