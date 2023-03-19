import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import * as screen from '../screens';
import { ParamsList } from './ParamsList';

const Stack = createNativeStackNavigator<ParamsList>();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={screen.Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="detail"
        component={screen.Details}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
