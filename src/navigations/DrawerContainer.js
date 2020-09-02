import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomepageNavigator from './HomepageNavigator';
import Screen1 from '../screens/Screen1';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

const DashboardDrawer = createDrawerNavigator();

const DrawerContainer = props => {

  return (
    <NavigationContainer>
      <DashboardDrawer.Navigator initialRouteName="Home">
        <DashboardDrawer.Screen name="Home" component={HomepageNavigator} />
        <DashboardDrawer.Screen name="Screen1" component={Screen1} />
      </DashboardDrawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerContainer;
