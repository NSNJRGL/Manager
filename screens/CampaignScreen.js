import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {WebView} from 'react-native-webview';

import CustomTopNavigation from '../components/CustomTopNavigation';

const CampaignScreen = ({navigation}) => {
  return (
    <Layout style={styles.container}>
      <CustomTopNavigation
        title="Mөрийн хөтөлбөр"
        leftIcon={true}
        navigation={navigation}
      />
      <View style={styles.innerContainer}>
        <View style={styles.video}>
          <Text style={styles.titleText} />
        </View>
      </View>
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
    alignSelf: 'center',
  },
  video: {
    height: 300,
  },
});

export default CampaignScreen;
