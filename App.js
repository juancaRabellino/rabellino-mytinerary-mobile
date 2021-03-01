import 'react-native-gesture-handler';
import React from 'react'
import Home from './screens/Home';
import Cities from './screens/Cities';
import ItinerariesCity from './screens/ItinerariesCity';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/rootReducer'
import { applyMiddleware, createStore } from 'redux';

const Stack = createStackNavigator()
const myStore = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={myStore}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: 'rgba(255, 235, 205, 0.7)'}}}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Cities' component={Cities} />
          <Stack.Screen name='ItinerariesCity' component={ItinerariesCity} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='SignIn' component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App