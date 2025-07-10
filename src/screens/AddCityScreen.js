import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { globalStyles } from "../styles/globalStyles";

const PLACEHOLDER_IMAGE =
  "https://placehold.co/200x200/E0E0E0/333333?text=Toca+para+Imagen";

const AddCityScreen = ({ navigation }) => {
  const [placeName, setPlaceName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUri, setImageUri] = useState(PLACEHOLDER_IMAGE);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permiso Necesario",
        "Necesitamos permiso para acceder a tu galería de fotos."
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSaveCity = () => {
    if (
      !placeName.trim() ||
      !description.trim() ||
      imageUri === PLACEHOLDER_IMAGE
    ) {
      Alert.alert(
        "Campos Incompletos",
        "Por favor, ingresa el nombre, la descripción y selecciona una imagen."
      );
      return;
    }

    const newCity = {
      id: String(Date.now()),
      name: placeName.trim(),
      description: description.trim(),
      image: { uri: imageUri },
    };

    navigation.navigate("HomeStack", {
      screen: "Home",
      params: { newCity: newCity },
    });

    setPlaceName("");
    setDescription("");
    setImageUri(PLACEHOLDER_IMAGE);
    Alert.alert(
      "Favorito Guardado",
      "El nuevo lugar ha sido agregado a la lista."
    );
  };

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Agregar Nueva Ciudad</Text>

      <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
        <Image
          source={{ uri: imageUri }}
          style={styles.selectedImage}
          onError={() => setImageUri(PLACEHOLDER_IMAGE)}
        />
        <Text style={styles.imagePickerText}>Toca para seleccionar imagen</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Nombre del Lugar"
        placeholderTextColor="#888"
        value={placeName}
        onChangeText={setPlaceName}
      />

      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Descripción (ej. Un lugar mágico con vistas increíbles...)"
        placeholderTextColor="#888"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />

      <Button title="Guardar Ciudad" onPress={handleSaveCity} color="#28a745" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  selectedImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: "cover",
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#6200ee",
  },
  imagePickerText: {
    color: "#6200ee",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#333",
  },
  descriptionInput: {
    height: 120,
    textAlignVertical: "top",
    paddingTop: 15,
  },
});

export default AddCityScreen;
