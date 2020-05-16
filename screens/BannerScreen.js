import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Layout} from '@ui-kitten/components';

import CustomTopNavigation from '../components/CustomTopNavigation';
import BannerItems from '../components/BannerItems';

const BannerScreen = ({navigation}) => {
  return (
    <Layout style={styles.container}>
      <CustomTopNavigation
        title="Зарлалын самбар"
        leftIcon={true}
        navigation={navigation}
      />
      <Layout style={styles.innerContainer}>
        <BannerItems
          maxHeight={Dimensions.get('window').height + 5}
          navigation={navigation}
          detailType="BannerDetail"
        />
      </Layout>
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
});

export default BannerScreen;
