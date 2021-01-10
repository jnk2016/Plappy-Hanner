/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer,  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// import {HomeStackScreen, CalendarScreen, FeaturesStackScreen, SettingsStackScreen } from './src/nav/ScreenStacks';

import Home from './src/screens/Home';
import Calendar from './src/screens/Calendar';
import Settings from './src/screens/Settings';
import FeaturesList from './src/screens/FeaturesList';

const Tab = createBottomTabNavigator();

// const state = {
//   routes: [
//     {
//       name: 'Home',
//       state: {
//         routes: [
//           {
//             name: 'Home',
//           },
//         ],
//       },
//     },
//   ],
// };

// const config = {
//   screens: {
//     Home: {
//       screens: {
//         Home: 'home',
//       },
//     },
//   },
// };

// const linking = {
//   prefixes: [
//     '/'
//   ],
//   config,
// };


// const HomeStack = createStackNavigator();
// function HomeStackScreen(){
//     return(
//         <HomeStack.Navigator screenOptions={{ headerShown: true}}>
//             <HomeStack.Screen name = "Home" component={Home}
//                               options={{
//                                 title: "Hello, Danphuong",
//                                 headerStyle: {
//                                   borderBottomColor: 'transparent',
//                                   backgroundColor: '#FFFFFF', //Set Header color
//                                 },
//                                 headerTintColor: '#000000', //Set Header text color
//                                 headerTitleStyle: {
//                                   fontWeight: '600', //Set Header text style
//                                   fontFamily: 'Spartan-Regular',
//                                 },
//                                 // headerRight: ()=> <ProfilePic/>,
//                               }}
//                               />
//         </HomeStack.Navigator>
//     );
// }
export default class App extends Component{
  render(){
  return ( 
    <>
      {/* <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}> */}
          {/* <Home/> */}

          {/* <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}> */}
          <NavigationContainer fallback={<Text>Loading...</Text>}>
              <Tab.Navigator 
              screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                      if(route.name === 'Home'){
                          return(<Image source={require('./src/assets/images/home.png')} style={{width:33, height:33}}/>)
                      }
                      else if(route.name === 'Calendar'){
                          return(<Image source={require('./src/assets/images/CALENDAR.png')}style={{width:25, height:25}}/>)
                      }
                      else if(route.name === 'FeatureList'){
                          return(<Image source={require('./src/assets/images/ACTIVITY.png')}style={{width:25, height:40, marginBottom: 15}}/>)
                      }
                      else if(route.name === 'Settings'){
                          return(<Image source={require('./src/assets/images/SETTINGS.png')}style={{width:28, height:28}}/>)
                      }
                  }
              })}
              >
                  <Tab.Screen name="Home" component={Home} options={{ tabBarLabel:'' }}/>
                  <Tab.Screen name="Calendar" component={Calendar} options={{tabBarLabel:''}}/>
                  <Tab.Screen name="FeatureList" component={FeaturesList} options={{tabBarLabel:''}}/>
                  <Tab.Screen name="Settings" component={Settings} options={{tabBarLabel:''}}/>
              </Tab.Navigator>
          </NavigationContainer>

        {/* </ScrollView>
      </SafeAreaView> */}
    </>
  );
}}



// const FeaturesStack = createStackNavigator();
// export function FeaturesStackScreen(){
//     return(
//         <FeaturesStack.Navigator screenOptions={{ headerShown: false }}>
//             <FeaturesStack.Screen name = "FeatureList" component={FeaturesList}
//                               options={{
//                                 title: "My Features",
//                                 headerStyle: {
//                                   borderBottomColor: 'transparent',
//                                   backgroundColor: '#FFFFFF', //Set Header color
//                                 },
//                                 headerTintColor: '#000000', //Set Header text color
//                                 headerTitleStyle: {
//                                   fontWeight: '600', //Set Header text style
//                                   fontFamily: 'Spartan-Regular',
//                                   letterSpacing: 1,
//                                 }, headerShown: true,
//                                 headerRight: ()=> <ProfilePic/>,
//                               }}
//                               />
//             <FeaturesStack.Screen name = "SelfCare" component={SelfCareStackScreen}/>
//             <FeaturesStack.Screen name = "Health" component={HealthStackScreen}/>
//             <FeaturesStack.Screen name = "Focus" component={FocusStackScreen}/>
//         </FeaturesStack.Navigator>
//     );
// }

class ProfilePic extends Component{
  render(){
  return (
    // <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('./src/assets/images/Ellipseavatar.png')}
          style={{
            width: 50,
            height: 50,
            marginRight: 10,
          }}
        />
    // </View>
  );}
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});