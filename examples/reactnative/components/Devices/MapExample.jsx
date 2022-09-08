import { useEffect, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';

function MapExample() {
  const [location, setLocation] = useState(null);
  const [markers, setMarkers] = useState([{
    latitude: 6.2344649,
    longitude: -75.5912721,
    title: 'My Marker',
    description: 'Some description',
  }]);

  useEffect(() => {
    const requestLocationPermission = async() => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setLocation(location);

      const myHouse = {
        latitude,
        longitude,
        title: 'My House',
        description: 'The best house',
      }

      setMarkers([...markers, myHouse]);
    };

    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        // provider={PROVIDER_GOOGLE}
        style={styles.map}
      >
        {
          markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
              title={marker.title}
              description={marker.description}
            />
          ))
        }
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapExample;
