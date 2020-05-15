import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout} from '@ui-kitten/components';
import MapView from 'react-native-maps';

import CustomTopNavigation from '../components/CustomTopNavigation';

const MapScreen = () => {
  useEffect(() => {}, []);

  return (
    <Layout style={styles.mainContainer}>
      <CustomTopNavigation title="Байршил" />

      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          showsMyLocationButton={true}
          showsUserLocation={true}>
          <MapView.Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            title={'Your Location'}
            draggable
          />
        </MapView>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    minHeight: '100%',
  },
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
