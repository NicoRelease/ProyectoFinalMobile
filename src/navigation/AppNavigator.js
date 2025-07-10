import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer"; // Importamos el Drawer Navigator


import HomeScreen from "../screens/HomeScreen";
import CityDetailScreen from "../screens/CityDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import AboutScreen from "../screens/AboutScreen";
import AddCityScreen from "../screens/AddCityScreen"; // ¡Importamos la nueva pantalla!

// Creamos un Stack Navigator para las pantallas principales
// Esto nos permitirá tener una barra superior estándar y el botón de retroceso
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6200ee", // Color de fondo del encabezado
        },
        headerTintColor: "#fff", // Color del texto del encabezado
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "MiAppDeLugares",
          // El botón de hamburguesa se añade automáticamente por el Drawer Navigator
          // No necesitamos añadirlo aquí manualmente si esta pantalla es parte del Drawer
        }}
      />
      <Stack.Screen
        name="CityDetail"
        component={CityDetailScreen}
        options={({ route }) => ({ title: route.params.city.name })}
      />
    </Stack.Navigator>
  );
}

// Creamos el Drawer Navigator
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeStack" // La ruta inicial es nuestro Stack de Home
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6200ee", // Color de fondo del encabezado del Drawer
          },
          headerTintColor: "#fff", // Color del texto del encabezado del Drawer
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerActiveTintColor: "#6200ee", // Color del texto del item activo en el drawer
          drawerInactiveTintColor: "#333", // Color del texto del item inactivo
          drawerLabelStyle: {
            fontSize: 18,
            marginLeft: 10, // Ajustamos el margen a 50px a la izquierda
          },
        }}
      >
        {/*
          Cada <Drawer.Screen> representa un elemento en el menú hamburguesa.
          Puedes apuntar a un Stack Navigator completo o a una pantalla individual.
        */}
        <Drawer.Screen
          name="HomeStack" // Este es el nombre que aparecerá en el drawer
          component={HomeStack}
          options={{ title: "Inicio" }} // Título del elemento en el menú del drawer
        />
        <Drawer.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{ title: "Mis Favoritos" }}
        />
        <Drawer.Screen
          name="AddCity" // Nueva entrada en el menú hamburguesa
          component={AddCityScreen}
          options={{ title: "Agregar Ciudad" }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "Acerca de" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
