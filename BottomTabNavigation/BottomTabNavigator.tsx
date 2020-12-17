import * as React from 'react';
import { Text,TouchableOpacity, View, Image } from 'react-native';
import { NavigationContainer,  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import FeatureList from '../screens/FeatureList';
import { createStackNavigator } from '@react-navigation/stack';
import SelfCare from '../screens/SelfCare';
import Health from '../screens/Health';
import Focus from '../screens/Focus';
import Calendar from '../screens/Calendar';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
        {/* <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen
             name = "SelfCare"
             component = {SelfCare}/>
        </Stack.Navigator> */}
        <Tab.Navigator 
         screenOptions={({ route }) => ({
             tabBarIcon: ({ focused, color, size }) => {
                 if(route.name === 'Home'){
                     return(<Image source={require('../assets/images/home.png')} style={{width:30, height:30}}/>)
                 }
                 else if(route.name === 'Calendar'){
                     return(<Image source={require('../assets/images/CALENDAR.png')}style={{width:25, height:25}}/>)
                 }
                 else if(route.name === 'FeatureList'){
                     return(<Image source={require('../assets/images/ACTIVITY.png')}style={{width:25, height:40, marginBottom: 15}}/>)
                 }
             }
         })}
         >
            <Tab.Screen name="Home" component={HomeStackScreen} options={{tabBarLabel:''}}/>
            <Tab.Screen name="Calendar" component={Calendar} options={{tabBarLabel:''}}/>
            <Tab.Screen name="FeatureList" component={FeaturesStackScreen} options={{tabBarLabel:''}}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const HomeStack = createStackNavigator();
function HomeStackScreen(){
    return(
        <HomeStack.Navigator screenOptions={{ headerShown: true }}>
            <HomeStack.Screen name = "Home" component={Home}
                              options={{
                                title: "Hello, Danphuong",
                                headerStyle: {
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: 'bold', //Set Header text style
                                },
                                headerRight: ()=> <ProfilePic/>,
                              }}/>
        </HomeStack.Navigator>
    );
}

const FeaturesStack = createStackNavigator();
function FeaturesStackScreen(){
    return(
        <FeaturesStack.Navigator screenOptions={{ headerShown: false }}>
            <FeaturesStack.Screen name = "FeatureList" component={FeatureList}/>
            <FeaturesStack.Screen name = "SelfCare" component={SelfCare}/>
            <FeaturesStack.Screen name = "Health" component={Health}/>
            <FeaturesStack.Screen name = "Focus" component={Focus}/>
        </FeaturesStack.Navigator>
    );
}

function ProfilePic(){
  // const back = () => {
  //   props.navigationProps.navigate("UserProfileScreen", {screen: 'UserProfileScreen'});
  // };

  return (
    <View style={{ flexDirection: 'row' }}>
        {/* Back Button Image */}
        <Image
          source={require('../assets/images/Ellipseavatar.png')}
          style={{
            width: 45,
            height: 45,
            marginRight: 10,
          }}
        />
    </View>
  );
}

function BackButton(props){
    const back = () => {
      props.navigationProps.navigate("UserProfileScreen", {screen: 'UserProfileScreen'});
    };
  
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={()=> back()}>
          {/* Back Button Image */}
          <Image
            source={{uri: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/back-arrow-8-580723.png'}}
            style={{
              width: 35,
              height: 35,
              marginLeft: 5
            }}
          />
        </TouchableOpacity>
      </View>
    );
}