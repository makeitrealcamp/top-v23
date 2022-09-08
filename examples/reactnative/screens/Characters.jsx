import { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet, FlatList, Platform } from 'react-native';

import ImagePickerExample from '../components/Devices/ImagePicker';

const Characters = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Characters</Text>
      <ImagePickerExample />
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

export default Characters;
