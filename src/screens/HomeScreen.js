import React, { useState, useEffect } from "react"; // Importamos useState y useEffect
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Card from "../components/Card";
import { globalStyles } from "../styles/globalStyles";
import Alertas from "../components/Alerta";

// Datos de ejemplo iniciales para los lugares
const initialPlaces = [
  {
    id: "1",
    name: "París, Francia",
    image: require("../../assets/Paris.jpg"),
    description: "La Ciudad de la Luz, famosa por su Torre Eiffel y el Louvre.",
  },
  {
    id: "2",
    name: "Kioto, Japón",
    image: require("../../assets/Kyoto.jpg"),
    description: "Templos antiguos, jardines zen y geishas tradicionales.",
  },
  {
    id: "3",
    name: "Nueva York, EE.UU.",
    image: require("../../assets/NewYork.jpg"),
    description:
      "La Gran Manzana, con sus rascacielos icónicos y Times Square.",
  },
  {
    id: "4",
    name: "Río de Janeiro, Brasil",
    image: require("../../assets/Rio.jpg"),
    description: "Playas vibrantes, Carnaval y el Cristo Redentor.",
  },
  {
    id: "5",
    name: "Sídney, Australia",
    image: require("../../assets/Sidney.jpg"),
    description: "La Ópera de Sídney, playas y el Puente del Puerto.",
  },
];

const HomeScreen = ({ navigation, route }) => {
  // Usamos useState para que la lista de lugares pueda ser actualizada
  const [places, setPlaces] = useState(initialPlaces);

  const [alerta, setAlerta] = useState(false); // Alerta para borrar lugares
  const [Delete, setDelete] = useState(null); // guarda la ciudad a eliminar

  const handleConfirmDelete = () => {
    setPlaces((current) => current.filter((place) => place.id !== Delete.id));
    setAlerta(false);
  };

  const showDeleteAlert = (place) => {
    setDelete(place);
    setAlerta(true);
  };

  // useEffect para escuchar cambios en los parámetros de la ruta (route.params)
  useEffect(() => {
    // Si hay un nuevo favorito en los parámetros de la ruta
    if (route.params?.newCity) {
      const { newCity } = route.params;

      // Verifica si el favorito ya existe para evitar duplicados al navegar
      const exists = places.some((place) => place.id === newCity.id);
      if (!exists) {
        setPlaces((currentPlaces) => [...currentPlaces, newCity]);
      }

      // Limpia el parámetro newCity después de usarlo
      // Esto es CRUCIAL para evitar que se añada el mismo favorito cada vez que se vuelve a la pantalla
      navigation.setParams({ newCity: undefined });
    }
  }, [route.params?.newCity, places, navigation]); // Dependencias del useEffect

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Explora el Mundo</Text>
      <Text style={globalStyles.subtitle}>Destinos Populares</Text>
      {places.map((place) => (
        <Card
          key={place.id}
          title={place.name}
          imageSource={place.image}
          description={place.description.substring(0, 70) + "..."} // Descripción corta
          onPress={() => navigation.navigate("CityDetail", { city: place })}
          onDelete={() => showDeleteAlert(place)}
        />
      ))}
      <View style={styles.buttonContainer}>
        <Button
          title="Ver Mis Favoritos"
          onPress={() => navigation.navigate("Favorites")}
          color="#1e90ff"
        />
      </View>
      <Alertas
        visible={alerta}
        title="Eliminar ciudad"
        message={`¿Estás seguro de que querés eliminar "${Delete?.name}" de la lista?`}
        onCancel={() => setAlerta(false)}
        onConfirm={handleConfirmDelete}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    marginBottom: 40,
    alignSelf: "center",
    width: "80%",
  },
});

export default HomeScreen;
