import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardRoutes from './dashboard.routes';
import State from '~/pages/Dashboard/Statistics/State';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DashboardRoutes"
          component={DashboardRoutes}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="State"
          component={State}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
