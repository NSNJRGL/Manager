import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Layout} from '@ui-kitten/components';

const WorkScreen = () => {
  return (
    <Layout style={styles.container}>
      <Text>WorkScreen</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WorkScreen;
