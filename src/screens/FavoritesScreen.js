import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const favoritePlaces = [
  { id: '1', name: 'París, Francia', description: 'La Ciudad del Amor.' },
  { id: '5', name: 'Sídney, Australia', description: 'Famosa por su Ópera.' },
];

const FavoritesScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Mis Lugares Favoritos</Text>
      {favoritePlaces.length === 0 ? (
        <Text style={styles.emptyText}>Aún no tienes lugares favoritos.</Text>
      ) : (
        <FlatList
          data={favoritePlaces}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.favoriteItem}>
              <Text style={styles.favoriteName}>{item.name}</Text>
              <Text style={styles.favoriteDescription}>{item.description}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
    color: '#888',
  },
  favoriteItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  favoriteName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  favoriteDescription: {
    fontSize: 15,
    color: '#666',
  },
});

export default FavoritesScreen;