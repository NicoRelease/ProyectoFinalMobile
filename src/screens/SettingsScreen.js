import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Ajustes</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Habilitar Notificaciones</Text>
        <Switch
          onValueChange={setNotificationsEnabled}
          value={notificationsEnabled}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Modo Oscuro</Text>
        <Switch
          onValueChange={setDarkModeEnabled}
          value={darkModeEnabled}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkModeEnabled ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>

      {/* Más opciones de ajustes aquí */}
    </View>
  );
};

const styles = StyleSheet.create({
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  settingText: {
    fontSize: 18,
    color: '#333',
  },
});

export default SettingsScreen;