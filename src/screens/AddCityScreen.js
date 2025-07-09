// src/screens/AddFavoriteScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker"; // Importamos expo-image-picker
import { globalStyles } from "../styles/globalStyles";

// Imagen de marcador de posición por defecto
const PLACEHOLDER_IMAGE = "https://placehold.co/200x200/E0E0E0/333333?text=Toca+para+Imagen";

const AddCityScreen = ({ navigation }) => {
  const [placeName, setPlaceName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUri, setImageUri] = useState(PLACEHOLDER_IMAGE); // Estado para la URI de la imagen

  // Función para seleccionar una imagen de la galería
  const pickImage = async () => {
    // Solicitar permisos de acceso a la galería
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permiso Necesario", "Necesitamos permiso para acceder a tu galería de fotos.");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true, // Permite al usuario editar/recortar la imagen
      aspect: [4, 3], // Proporción para el recorte
      quality: 1, // Calidad de la imagen (0 a 1)
    });

        if (!result.canceled && result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri); // Guarda la URI de la imagen seleccionada
    }
  };

  // Función para guardar el favorito y redirigir
  const handleSaveCity = () => {
    if (!placeName.trim() || !description.trim() || imageUri === PLACEHOLDER_IMAGE) {
      Alert.alert("Campos Incompletos", "Por favor, ingresa el nombre, la descripción y selecciona una imagen.");
      return;
    }

    const newCity = {
      id: String(Date.now()), // Genera un ID único simple basado en la marca de tiempo
      name: placeName.trim(),
      description: description.trim(),
      image: { uri: imageUri }, // La imagen debe ser un objeto { uri: ... } para el componente Image
    };

    // Redirige al usuario a la pantalla de inicio y pasa el nuevo favorito como parámetro
    // Usamos "HomeStack" porque es el nombre de nuestro Drawer.Screen que contiene el Stack.
    // Luego especificamos "Home" como la pantalla dentro de ese Stack.
    navigation.navigate("HomeStack", { screen: "Home", params: { newCity: newCity } });

    // Opcional: Limpiar los campos después de guardar
    setPlaceName("");
    setDescription("");
    setImageUri(PLACEHOLDER_IMAGE);
    Alert.alert("Nueva ciudad agregada", "El nuevo lugar ha sido agregado a la lista.");
  };

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Agregar Nueva Ciudad</Text>

      <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
        <Image source={{ uri: imageUri }} style={styles.selectedImage} onError={() => setImageUri(PLACEHOLDER_IMAGE)} />
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

      <Button
        title="Guardar Ciudad"
        onPress={handleSaveCity}
        color="#28a745" // Un verde para guardar
      />
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
    borderRadius: 75, // Para hacerla circular
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
    color: "#333", // Color del texto de entrada
  },
  descriptionInput: {
    height: 120, // Mayor altura para la descripción
    textAlignVertical: "top", // Alinea el texto al inicio en Android
    paddingTop: 15,
  },
});

export default AddCityScreen;
