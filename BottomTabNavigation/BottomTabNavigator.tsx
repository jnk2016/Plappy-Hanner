import * as React from 'react';
import { Text,TouchableOpacity, View, Image } from 'react-native';
import { NavigationContainer,  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'; // Going to experiment with Home copy 2
import FeatureList from '../screens/FeatureList';
import { createStackNavigator } from '@react-navigation/stack';
import SelfCare from '../screens/SelfCare';
import Health from '../screens/Health';
import Focus from '../screens/Focus';
import Calendar from '../screens/Calendar';
import Settings from '../screens/Settings';
import FeaturesList from '../screens/FeaturesList';

import NewHealth from '../screens/newHealth';
import NewFocus from '../screens/newFocus';
import NewSelfCare from '../screens/newSelfCare';

/* Focus Screens */
import FocusBudgetTracker from '../screens/FocusBudgetTracker';
import FocusTaskManager from '../screens/FocusTaskManager';

import BudgetTracker from '../screens/BudgetTracker';
import Tasks from '../screens/Tasks';
import Goal from '../screens/Goal';

/* Health Screens */
import HealthMealPlanner from '../screens/HealthMealPlanner';
import HealthActivityTracker from '../screens/HealthActivityTracker';

// Period Screens
import Period from '../screens/Period';
import PeriodSymptoms from '../screens/PeriodSymptoms';
import PeriodCalendar from '../screens/PeriodCalendar';
import PeriodLog from '../screens/PeriodLog';
// Meal Screens
import Meal from '../screens/Meal';
import MealRecipes from '../screens/MealRecipes';
import MealGrocery from '../screens/MealGrocery';
import MealPlanner from '../screens/MealPlanner';
// ActivityTracker Screens
import ActivityTracker from '../screens/ActivityTracker';

/* SelfCare Screens */
import SelfCareMoodTracker from '../screens/SelfCareMoodTracker';
import SelfCareBrainDump from '../screens/SelfCareBrainDump';

import HabitTracker from '../screens/HabitTracker';
import Mood from '../screens/Mood';
import BrainDump from '../screens/BrainDump';

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
                     return(<Image source={require('../assets/images/home.png')} style={{width:33, height:33, marginBottom: 1}}/>)
                 }
                 else if(route.name === 'Calendar'){
                     return(<Image source={require('../assets/images/CALENDAR.png')}style={{width:25, height:25}}/>)
                 }
                 else if(route.name === 'FeatureList'){
                     return(<Image source={require('../assets/images/ACTIVITY.png')}style={{width:25, height:40, marginBottom: 15}}/>)
                 }
                 else if(route.name === 'Settings'){
                     return(<Image source={require('../assets/images/SETTINGS.png')}style={{width:28, height:28}}/>)
                 }
             }
         })}
         >
            <Tab.Screen name="Home" component={HomeStackScreen} options={{tabBarLabel:''}}/>
            <Tab.Screen name="Calendar" component={Calendar} options={{tabBarLabel:''}}/>
            <Tab.Screen name="FeatureList" component={FeaturesStackScreen} options={{tabBarLabel:''}}/>
            <Tab.Screen name="Settings" component={SettingsStackScreen} options={{tabBarLabel:''}}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const HomeStack = createStackNavigator();
function HomeStackScreen(){
    return(
        <HomeStack.Navigator screenOptions={{ headerShown: true}}>
            <HomeStack.Screen name = "Home" component={Home}
                              options={{
                                title: "Hello, Danphuong",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '600', //Set Header text style
                                  fontFamily: 'Spartan',
                                },
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
        </HomeStack.Navigator>
    );
}

const FeaturesStack = createStackNavigator();
function FeaturesStackScreen(){
    return(
        <FeaturesStack.Navigator screenOptions={{ headerShown: false }}>
            <FeaturesStack.Screen name = "FeatureList" component={FeaturesList}
                              options={{
                                title: "My Features",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '600', //Set Header text style
                                  fontFamily: 'Spartan',
                                  letterSpacing: '0.05em',
                                }, headerShown: true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
            <FeaturesStack.Screen name = "SelfCare" component={SelfCareStackScreen}/>
            <FeaturesStack.Screen name = "Health" component={HealthStackScreen}/>
            <FeaturesStack.Screen name = "Focus" component={FocusStackScreen}/>
        </FeaturesStack.Navigator>
    );
}

const SelfCareStack = createStackNavigator();
function SelfCareStackScreen(){
  return(
      <SelfCareStack.Navigator screenOptions={{ headerShown: false }}>
          <SelfCareStack.Screen name = "SelfCare" component={SelfCare}/>
          <SelfCareStack.Screen name = "HabitTracker" component={HabitTracker}
                              options={{
                                title: "HABIT TRACKER",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '700', //Set Header text style
                                  fontFamily: 'Spartan',
                                  letterSpacing: '0.1em',
                                }, headerShown: true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
          <SelfCareStack.Screen name = "SelfCareMoodTracker" component={SelfCareMoodTracker}/>
          <SelfCareStack.Screen name = "Mood" component={Mood}
                              options={{
                                title: "MOODS",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '700', //Set Header text style
                                  fontFamily: 'Spartan',
                                  letterSpacing: '0.1em',
                                }, headerShown: true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
          <SelfCareStack.Screen name = "SelfCareBrainDump" component={SelfCareBrainDump}/>
          <SelfCareStack.Screen name = "BrainDump" component={BrainDump}
                              options={{
                                title: "BRAIN DUMP",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '700', //Set Header text style
                                  fontFamily: 'Spartan',
                                  letterSpacing: '0.1em',
                                }, headerShown: true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
      </SelfCareStack.Navigator>
  );
}

const HealthStack = createStackNavigator();
function HealthStackScreen(){
  return(
      <HealthStack.Navigator screenOptions={{ headerShown: false }}>
          <HealthStack.Screen name = "Health" component={Health}/>
          <HealthStack.Screen name = "Period" component={PeriodStackScreen}/>
          <HealthStack.Screen name = "HealthMealPlanner" component={HealthMealPlanner}/>
          <HealthStack.Screen name = "Meal" component={MealStackScreen}/>
          <HealthStack.Screen name = "HealthActivityTracker" component={HealthActivityTracker}/>
          <HealthStack.Screen name = "ActivityTracker" component={ActivityTracker}
                              options={{
                                title: "TODAY",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '700', //Set Header text style
                                  fontFamily: 'Spartan',
                                  letterSpacing: '0.1em',
                                }, headerShown: true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
      </HealthStack.Navigator>
  );
}

const MealStack = createStackNavigator();
function MealStackScreen(){
  return(
      <MealStack.Navigator screenOptions={{ headerShown: false }}>
          <MealStack.Screen name = "Meal" component={Meal}
                              options={{
                                title: "MEALS",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '700', //Set Header text style
                                  fontFamily: 'Spartan',
                                  letterSpacing: '0.1em',
                                }, headerShown: true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
          <MealStack.Screen name = "MealRecipes" component={MealRecipes}
                              options={{
                                title: "MY RECIPES",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '700', //Set Header text style
                                  fontFamily: 'Spartan',
                                  letterSpacing: '0.1em',
                                }, headerShown: true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
          <MealStack.Screen name = "MealGrocery" component={MealGrocery}
                              options={{
                                title: "GROCERY LIST",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '700', //Set Header text style
                                  fontFamily: 'Spartan',
                                  letterSpacing: '0.1em',
                                }, headerShown: true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
          <MealStack.Screen name = "MealPlanner" component={MealPlanner}
                              options={{
                                title: "TODAY",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '700', //Set Header text style
                                  fontFamily: 'Spartan',
                                  letterSpacing: '0.1em',
                                }, headerShown: true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
      </MealStack.Navigator>
  );
}

const PeriodStack = createStackNavigator();
function PeriodStackScreen(){
  return(
      <PeriodStack.Navigator screenOptions={{ headerShown: false }}>
          <PeriodStack.Screen name = "Period" component={Period}
                              options={{
                                title: "PERIOD TRACKER",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '700', //Set Header text style
                                  fontFamily: 'Spartan',
                                  letterSpacing: '0.1em',
                                }, headerShown: true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
          <PeriodStack.Screen name = "PeriodSymptoms" component={PeriodSymptoms}
                              options={{
                                title: "LOG SYMPTOMS",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '700', //Set Header text style
                                  fontFamily: 'Spartan',
                                  letterSpacing: '0.1em',
                                }, headerShown: true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
          <PeriodStack.Screen name = "PeriodCalendar" component={PeriodCalendar}
                              options={{
                                title: "MY CYCLES",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '700', //Set Header text style
                                  fontFamily: 'Spartan',
                                  letterSpacing: '0.1em',
                                }, headerShown: true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
          <PeriodStack.Screen name = "PeriodLog" component={PeriodLog}
                              options={{
                                title: "LOG PERIOD",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '700', //Set Header text style
                                  fontFamily: 'Spartan',
                                  letterSpacing: '0.1em',
                                }, headerShown: true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
      </PeriodStack.Navigator>
  );
}

const FocusStack = createStackNavigator();
function FocusStackScreen(){
  return(
      <FocusStack.Navigator screenOptions={{ headerShown: false }}>
          <FocusStack.Screen name = "Focus" component={Focus}/>
          <FocusStack.Screen name = "Goal" component={Goal}
                              options={{
                                title: "MY GOALS",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '700', //Set Header text style
                                  fontFamily: 'Spartan',
                                  letterSpacing: '0.1em',
                                }, headerShown: true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
          <FocusStack.Screen name = "FocusTaskManager" component={FocusTaskManager}/>
          <FocusStack.Screen name = "Tasks" component={Tasks}
                              options={{
                                title: "MY TASKS",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '700', //Set Header text style
                                  fontFamily: 'Spartan',
                                  letterSpacing: '0.1em',
                                }, headerShown: true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
          <FocusStack.Screen name = "FocusBudgetTracker" component={FocusBudgetTracker}/>
          <FocusStack.Screen name = "BudgetTracker" component={BudgetTracker}
                              options={{
                                title: "BUDGET TRACKER",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '700', //Set Header text style
                                  fontFamily: 'Spartan',
                                  letterSpacing: '0.1em',
                                }, headerShown: true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
      </FocusStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();
function SettingsStackScreen(){
    return(
        <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
            <SettingsStack.Screen name = "Settings" component={Settings}
                              options={{
                                title: "SETTINGS",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: 'bold', //Set Header text style
                                  fontFamily: 'Spartan',
                                  letterSpacing: '0.1em',
                                  marginLeft: '8%',
                                  marginTop: '5%',
                                }, headerShown: true,
                              }}
                              />
        </SettingsStack.Navigator>
    );
}

function ProfilePic(){
  return (
    <View style={{ flexDirection: 'row' }}>
        {/* Back Button Image */}
        <Image
          source={require('../assets/images/Ellipseavatar.png')}
          style={{
            width: 50,
            height: 50,
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