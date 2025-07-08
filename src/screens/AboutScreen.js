import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const AboutScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Acerca de MiAppDeLugares</Text>
      <Text style={styles.paragraph}>
        Esta aplicación fue creada para ayudarte a explorar y descubrir destinos increíbles alrededor del mundo.
        Esperamos que disfrutes planificando tus próximas aventuras.
      </Text>
      <Text style={styles.versionText}>
        Versión: 1.0.0
      </Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://reactnative.dev/')}>
        Desarrollado con React Native
      </Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://www.ejemplo.com/privacidad')}>
        Política de Privacidad
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 15,
    textAlign: 'justify',
  },
  versionText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
  },
  link: {
    fontSize: 16,
    color: '#1e90ff',
    textDecorationLine: 'underline',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default AboutScreen;