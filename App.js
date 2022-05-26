import 'react-native-gesture-handler';
import React, {useEffect, useRef} from 'react';
import {SafeAreaView, AppState} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './router';

const App = () => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    //Checking the App state
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <AppNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
