import { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text } from 'react-native';
import * as Sharing from 'expo-sharing';
import * as ImagePicker from 'expo-image-picker';

function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
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

  const openShareDialogAsync = async () => {
    const isAvailable = await Sharing.isAvailableAsync();
    if (!isAvailable) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(image);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {
        image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      }

      {
        image && <Button title="Share this photo" onPress={openShareDialogAsync} />
      }
    </View>
  );
}

export default ImagePickerExample;
