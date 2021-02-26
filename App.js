import 'react-native-gesture-handler';
import React from 'react'
import Home from './screens/Home';
import Cities from './screens/Cities';
import ItinerariesCity from './screens/ItinerariesCity';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        
        <Drawer.Screen name='Home' component={ItinerariesCity} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App