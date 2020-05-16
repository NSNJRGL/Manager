import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout, Avatar} from '@ui-kitten/components';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import CustomTopNavigation from '../components/CustomTopNavigation';

const MapScreen = () => {
  const [currentLat, setCurrentLat] = useState(0);
  const [currentLong, setcurrentLong] = useState(0);

  useEffect(() => {
    Geolocation.getCurrentPosition((info) => {
      setCurrentLat(info.coords.latitude);
      setcurrentLong(info.coords.longitude);
    });
  }, []);

  return (
    <Layout style={styles.mainContainer}>
      <CustomTopNavigation title="Байршил" />

      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: currentLat,
            longitude: currentLong,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          {currentLat > 0 && currentLong > 0 && (
            <MapView.Marker
              coordinate={{
                latitude: currentLat,
                longitude: currentLong,
              }}
              title={'Tаны байгаа газар'}
              draggable>
              <Avatar
                size="small"
                source={require('../assets/images/user-profile.jpg')}
              />
            </MapView.Marker>
          )}
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
