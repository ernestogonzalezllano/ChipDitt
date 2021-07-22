import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PostsRoutes } from './PostsRoutes';
import { WebScreen } from '../screens/WebScreen';
import { StackLogoTitle } from '../components/StackLogoTitle';

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen 
          name="ChipDitt" 
          component={PostsRoutes} 
          options={
            {
              headerTitle: props => <StackLogoTitle {...props} />
            }
          } 
        />
        <Stack.Screen name="Online" component={WebScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
