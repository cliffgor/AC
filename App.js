import {
  Animated,
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Home from './Screens/Home/home';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Splash from './Screens/Splash/splash'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()
const App = () => {
  return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen name = 'Splash' component={Splash}/>
          <Stack.Screen name = 'Home' component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    
  );
};

export default App;


