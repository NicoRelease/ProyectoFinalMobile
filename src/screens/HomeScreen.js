import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import Card from '../components/Card'; // Importamos el componente Card
import { globalStyles } from '../styles/globalStyles';

// Datos de ejemplo para los lugares
const places = [
  { id: '1', name: 'París, Francia', image: require('../../assets/paris.jpg'), description: 'La Ciudad de la Luz, famosa por su Torre Eiffel y el Louvre.' },
  { id: '2', name: 'Kioto, Japón', image: require('../../assets/kyoto.jpg'), description: 'Templos antiguos, jardines zen y geishas tradicionales.' },
  { id: '3', name: 'Nueva York, EE.UU.', image: require('../../assets/newyork.jpg'), description: 'La Gran Manzana, con sus rascacielos icónicos y Times Square.' },
  { id: '4', name: 'Río de Janeiro, Brasil', image: require('../../assets/rio.jpg'), description: 'Playas vibrantes, Carnaval y el Cristo Redentor.' },
  { id: '5', name: 'Sídney, Australia', image: require('../../assets/sydney.jpg'), description: 'La Ópera de Sídney, playas y el Puente del Puerto.' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Explora el Mundo</Text>
      <Text style={globalStyles.subtitle}>Destinos Populares</Text>
      {places.map(place => (
        <Card
          key={place.id}
          title={place.name}
          imageSource={place.image}
          description={place.description.substring(0, 70) + '...'} // Descripción corta
          onPress={() => navigation.navigate('CityDetail', { city: place })}
        />
      ))}
      <View style={styles.buttonContainer}>
        <Button
          title="Ver Mis Favoritos"
          onPress={() => navigation.navigate('Favorites')}
          color="#1e90ff"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    marginBottom: 40,
    alignSelf: 'center',
    width: '80%',
  },
});

export default HomeScreen;