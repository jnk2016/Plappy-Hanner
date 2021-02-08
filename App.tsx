import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import './assets/css/home.css';
import MyTabs from './BottomTabNavigation/BottomTabNavigator';

export default function App({navigation}) {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
       <MyTabs/>

        <StatusBar />


      </SafeAreaProvider>
    );
  }
 
}
