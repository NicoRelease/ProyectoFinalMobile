import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa tus pantallas
import HomeScreen from '../screens/HomeScreen';
import CityDetailScreen from '../screens/CityDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6200ee', // Color de fondo del encabezado
          },
          headerTintColor: '#fff', // Color del texto del encabezado
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'MiAppDeLugares' }} // Título en la barra superior
        />
        <Stack.Screen
          name="CityDetail"
          component={CityDetailScreen}
          options={({ route }) => ({ title: route.params.city.name })} // Título dinámico
        />
        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{ title: 'Mis Favoritos' }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Ajustes' }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: 'Acerca de' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;