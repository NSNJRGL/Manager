import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout, Avatar} from '@ui-kitten/components';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import CustomTopNavigation from '../components/CustomTopNavigation';
// import useTracking from './useTracking';

const MapScreen = () => {
  const [currentLat, setCurrentLat] = useState(0);
  const [currentLong, setcurrentLong] = useState(0);
  // const {location, history, distance} = useTracking('running');

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
                source={{
                  uri:
                    'https://firebasestorage.googleapis.com/v0/b/election-manager-277213.appspot.com/o/assets%2Fuser-profile.jpg?alt=media&token=ee404eb3-6ea0-4f0e-bb79-5e23f22b5894',
                }}
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
