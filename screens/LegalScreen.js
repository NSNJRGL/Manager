import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {Layout} from '@ui-kitten/components';
import Pdf from 'react-native-pdf';

import CustomTopNavigation from '../components/CustomTopNavigation';

const LegalScreen = ({navigation}) => {
  const source = {
    uri:
      'https://firebasestorage.googleapis.com/v0/b/election-manager-277213.appspot.com/o/assets%2Fmain1.pdf?alt=media&token=2bbb7e1c-0095-4240-a0ad-036b7ae245ba',
  };

  return (
    <Layout style={styles.container}>
      <CustomTopNavigation
        title="Үндсэн хууль"
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

export default LegalScreen;
