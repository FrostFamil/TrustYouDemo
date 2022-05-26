import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {screenNames} from './src/utils/constantTexts';
import Analytics from './src/screens/Analytics/Analytics';
import Chat from './src/screens/Chat/Chat';
import Details from './src/screens/Details/Details';

const Drawer = createDrawerNavigator();

function AppNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName={screenNames.ANALYTICS}
      screenOptions={{gestureEnabled: true, headerShown: true}}>
      <Drawer.Screen name={screenNames.ANALYTICS} component={Analytics} />
      <Drawer.Screen name={screenNames.CHAT} component={Chat} />
      <Drawer.Screen name={screenNames.DETAILS} component={Details} />
    </Drawer.Navigator>
  );
}

export default AppNavigator;
