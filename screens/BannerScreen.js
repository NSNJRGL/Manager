import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout} from '@ui-kitten/components';

import CustomTopNavigation from '../components/CustomTopNavigation';
import WorkList from '../components/WorkList';

const BannerScreen = ({navigation}) => {
  return (
    <Layout style={styles.container}>
      <CustomTopNavigation title="Зарлалын самбар" leftIcon={true} />
      <WorkList
        maxHeight="97%"
        navigation={navigation}
        detailType="BannerDetail"
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});

export default BannerScreen;
