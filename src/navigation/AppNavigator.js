import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import CityDetailScreen from "../screens/CityDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import AboutScreen from "../screens/AboutScreen";
import AddCityScreen from "../screens/AddCityScreen";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6200ee",
        },
        headerTintColor: "#fff",
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
        initialRouteName="HomeStack"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6200ee",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerActiveTintColor: "#6200ee",
          drawerInactiveTintColor: "#333",
          drawerLabelStyle: {
            fontSize: 18,
            marginLeft: 10,
          },
        }}
      >
        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ title: "Inicio" }}
        />
        <Drawer.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{ title: "Mis Favoritos" }}
        />
        <Drawer.Screen
          name="AddCity"
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
