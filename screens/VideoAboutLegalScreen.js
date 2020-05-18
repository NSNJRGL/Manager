import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {WebView} from 'react-native-webview';

import CustomTopNavigation from '../components/CustomTopNavigation';

const VideoAboutLegalScreen = ({navigation}) => {
  return (
    <Layout style={styles.container}>
      <CustomTopNavigation
        title="Намын видео"
        leftIcon={true}
        navigation={navigation}
      />
      <View style={styles.innerContainer}>
        <View style={styles.video}>
          <Text style={styles.titleText}>ЕРӨНХИЙ БИЧЛЭГ</Text>
          <WebView
            source={{
              uri: 'https://www.youtube.com/embed/zckySF2I1dY',
            }}
            javaScriptEnabled={true}
            allowsFullscreenVideo={true}
            allowsInlineMediaPlayback={true}
          />
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

export default VideoAboutLegalScreen;
