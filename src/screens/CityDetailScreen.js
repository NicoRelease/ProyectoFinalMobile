import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const CityDetailScreen = ({ route }) => {
  const { city } = route.params;

  return (
    <ScrollView style={globalStyles.container}>
      <Image source={city.image} style={styles.cityImage} />
      <Text style={styles.cityName}>{city.name}</Text>
      <Text style={styles.cityDescription}>{city.description}</Text>
      {/* Podrías añadir más detalles aquí: clima, atracciones, etc. */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Capital: {city.name.split(',')[0]}</Text>
        <Text style={styles.infoText}>País: {city.name.split(',')[1]}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cityImage: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginBottom: 15,
  },
  cityName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  cityDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 20,
    textAlign: 'justify',
  },
  infoBox: {
    backgroundColor: '#f0f8ff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#add8e6',
  },
  infoText: {
    fontSize: 16,
    color: '#36454F',
    marginBottom: 5,
  },
});

export default CityDetailScreen;