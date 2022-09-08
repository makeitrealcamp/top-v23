import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Platform } from 'react-native';

import MapExample from '../components/Devices/MapExample';

const LocationsScreen = () => {
  return (
    <View style={styles.container}>
      <MapExample />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    flex: 1,
  },
  list: {
    flex: 3,
  },
  text: {
    color: 'white',
    fontSize: 30,
    marginBottom: 10,
  },
});

export default LocationsScreen;
