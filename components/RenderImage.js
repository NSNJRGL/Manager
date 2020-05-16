import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

const RenderImage = ({fileData}) => {
  return (
    <ImageBackground
      style={styles.headerContainer}
      source={{uri: 'data:image/jpeg;base64,' + fileData}}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 20,
    height: 192,
    zIndex: 1,
  },
});

export default RenderImage;
