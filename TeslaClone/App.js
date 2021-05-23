/* eslint-disable prettier/prettier */
import React from 'react';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  DrawerContent  from './src/screens/DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerPosition="right"
    drawerContent={ props => <DrawerContent {...props}/>}
  >
    <Drawer.Screen name="Home" component={Home} />
  </Drawer.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={DrawerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
