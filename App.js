import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import WafflesScreen from './RecipeScreens/WafflesScreen';
import ArrozScreen from './RecipeScreens/ArrozScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Waffles" component={WafflesScreen} />
        <Stack.Screen name="Arroz" component={ArrozScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
