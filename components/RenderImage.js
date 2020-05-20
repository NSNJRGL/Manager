import React from 'react';
import {StyleSheet, ImageBackground, ScrollView} from 'react-native';

const RenderImage = ({images}) => {
  return (
    <ScrollView>
      {images.length > 0 &&
        images.map((i, key) => (
          <ImageBackground
            style={styles.headerContainer}
            source={{uri: i.uri}}
          />
        ))}
    </ScrollView>
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
