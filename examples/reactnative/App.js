import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  View, Text, Image, ScrollView, TextInput, Button,
  TouchableOpacity
} from 'react-native';
import { Avatar } from "@rneui/themed";
import * as ImagePicker from 'expo-image-picker';

import reactLogo from './assets/react.png';

import styles from './app.style'

function App() {
  const [form, setForm] = useState({});
  const [image, setImage] = useState(null);

  const uriImage = 'https://reactnative.dev/docs/assets/p_cat2.png'

  const onHandlePress = () => {
    alert('Button is pressed!')
  }

  const handleTextChange = (text, key) => {
    setForm({ ...form, [key]: text })
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
      <View style={styles.container}>
        <Avatar
          size={64}
          rounded
          source={{ uri: uriImage }}
        />
        <TextInput
          style={styles.text}
          placeholder="Type here to translate!"
          onChangeText={(text) => handleTextChange(text, 'name')}
        />
        <TextInput
          style={styles.text}
          placeholder="Type here to translate!"
          onChangeText={(text) => handleTextChange(text, 'password')}
          secureTextEntry
        />
        <Text style={styles.fontText}>Hola mundo {form.password}</Text>

        <Button
          title="Click me"
          color="#841584"
          onPress={onHandlePress}
        />
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Image
            // source={reactLogo}
            source={{ uri: uriImage }}
            style={styles.image}
          />
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
  );
}

export default App;
