import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Statistics from '~/pages/Dashboard/Statistics';
import World from '~/pages/Dashboard/World';
import PreventMain from '~/pages/Dashboard/Prevent/Main';

const Tab = createBottomTabNavigator();

export default function DashboardRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#eb5569',
        inactiveTintColor: 'rgba(0, 0, 0,0.2)',
        style: {
          backgroundColor: '#fff',
        },
        showLabel: false,
      }}>
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="equalizer" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="World"
        component={World}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="language" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Prevent"
        component={PreventMain}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="school" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
