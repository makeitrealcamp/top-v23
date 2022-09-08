import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Platform } from 'react-native';

import Camera from '../components/Devices/Camera';

const Episodes = () => {
  return (
    <View style={styles.container}>
      <Camera />
    </View>
  );
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

export default Episodes;
