import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Symptoms from '~/pages/Dashboard/Prevent/Symptoms';
import Prevention from '~/pages/Dashboard/Prevent/Prevention';
import Contagion from '~/pages/Dashboard/Prevent/Contagion';

const Tab = createMaterialTopTabNavigator();

export default function PreventRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Symptoms" component={Symptoms} />
      <Tab.Screen name="Prevention" component={Prevention} />
      <Tab.Screen name="Contagion" component={Contagion} />
    </Tab.Navigator>
  );
}
