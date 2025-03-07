import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {Layout} from '@ui-kitten/components';
import Pdf from 'react-native-pdf';

import CustomTopNavigation from '../components/CustomTopNavigation';

const NationLegalScreen = ({navigation}) => {
  const source = {
    uri:
      'https://firebasestorage.googleapis.com/v0/b/election-manager-277213.appspot.com/o/assets%2Fmain3.pdf?alt=media&token=37af8bb7-f25b-4b28-a6fd-692a34093172',
  };

  return (
    <Layout style={styles.container}>
      <CustomTopNavigation
        title="Улсын их хурлын сонгуул..."
        leftIcon={true}
        navigation={navigation}
      />
      <View style={styles.innerContainer}>
        <Pdf source={source} style={styles.pdf} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default NationLegalScreen;
