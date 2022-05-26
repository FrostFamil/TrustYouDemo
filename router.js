import React, {useEffect, useRef, useState} from 'react';
import {AppState} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {screenNames} from './src/utils/constantTexts';
import Analytics from './src/screens/Analytics/Analytics';
import Chat from './src/screens/Chat/Chat';
import Details from './src/screens/Details/Details';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {initChatSocket} from './src/utils/chatService';

const Drawer = createDrawerNavigator();

function AppNavigator() {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    async function fetchData() {
      const value = await AsyncStorage.getItem('username');
      if (value) {
        global.ws = initChatSocket({username: value});
      }
    }
    fetchData();
    //Checking the App state
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          const value = await AsyncStorage.getItem('username');
          if (value) {
            global.ws = initChatSocket({username: value});
          }
          console.log('App has come to the foreground!');
        }

        appState.current = nextAppState;
        console.log('AppState', appState.current);
      },
    );

    return () => {
      subscription.remove();
    };
  }, []);

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
