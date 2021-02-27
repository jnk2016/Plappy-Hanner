import * as React from 'react';
import { Text,TouchableOpacity, View, Image } from 'react-native';
import { NavigationContainer,  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'; // Going to experiment with Home copy 2
import { createStackNavigator } from '@react-navigation/stack';
import Calendar from '../screens/Calendar';
import Settings from '../screens/Settings';
import FeaturesList from '../screens/FeaturesList';

// Home Screens
import HomeWeekly from '../screens/HomeWeekly';
import HomeMonthly from '../screens/HomeMonthly';

//Mood Screen
import Mood from '../screens/Mood';
import MoodShare from '../screens/MoodShare';

/* Focus Screens */
import FocusBudgetTracker from '../screens/FocusBudgetTracker';
import FocusTaskManager from '../screens/FocusTaskManager';

// import BudgetTracker from '../screens/BudgetTracker';
import Tasks from '../screens/Tasks';
import Goal from '../screens/Goal';

/* Health Screens */
import HealthMealPlanner from '../screens/HealthMealPlanner';
import HealthActivityTracker from '../screens/HealthActivityTracker';

// Period Screens
import Period from '../screens/Period';
import SymptomIntimacy from '../screens/SymptomIntimacy';
import SymptomFlow from '../screens/SymptomFlow';
import SymptomDischarge from '../screens/SymptomDischarge';
import SymptomBody from '../screens/SymptomBody';
import PeriodCalendar from '../screens/PeriodCalendar';
import PeriodLog from '../screens/PeriodLog';
import PeriodNote from '../screens/PeriodNote';

// Meal Screens
import Meal from '../screens/Meal';
import MealRecipes from '../screens/MealRecipes';
import MealGrocery from '../screens/MealGrocery';
import MealPlanner from '../screens/MealPlanner';
// ActivityTracker Screens
import ActivityTracker from '../screens/ActivityTracker';
import WaterRecord from '../screens/WaterRecord';
import WaterHistory from '../screens/WaterHistory';

//BudgetTracker Screens
import BudgetTracker from '../screens/BudgetTracker';
import BudgetBudgets from '../screens/BudgetBudgets';
import BudgetPayments from '../screens/BudgetPayments';
import BudgetGoals from '../screens/BudgetGoals';
/* SelfCare Screens */
import SelfCareMoodTracker from '../screens/SelfCareMoodTracker';
import SelfCareBrainDump from '../screens/SelfCareBrainDump';

//Habit Screens
import HabitTracker from '../screens/HabitTracker';
import HabitWeek from '../screens/HabitWeek';
import HabitMonth from '../screens/HabitMonth';

//Brain Dump Screens
import BrainDump from '../screens/BrainDump';
import DumpNormal from '../screens/DumpNormal';
import DumpList from '../screens/DumpList';
import DumpDraw from '../screens/DumpDraw';
import DumpRecord from '../screens/DumpRecord';
import DumpPicture from '../screens/DumpPicture';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
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
        <HomeStack.Navigator screenOptions={{ headerShown: false}}>
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
                                }, headerShown:true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
            <HomeStack.Screen name = "HomeWeekly" component={HomeWeekly}
                              options={{
                                title: "MY WEEK",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '600', //Set Header text style
                                  fontFamily: 'Spartan',
                                }, headerShown:true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
            <HomeStack.Screen name = "HomeMonthly" component={HomeMonthly}
                              options={{
                                title: "MY MONTH",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '600', //Set Header text style
                                  fontFamily: 'Spartan',
                                }, headerShown:true,
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
          <SelfCareStack.Screen name = "HabitTracker" component={HabitTrackerStackScreen}
                              />
          <SelfCareStack.Screen name = "SelfCareMoodTracker" component={SelfCareMoodTracker}/>
          <SelfCareStack.Screen name = "Mood" component={MoodStackScreen}/>
          <SelfCareStack.Screen name = "SelfCareBrainDump" component={SelfCareBrainDump}/>
          <SelfCareStack.Screen name = "BrainDump" component={BrainDumpStackScreen}/>
      </SelfCareStack.Navigator>
  );
}

const HealthStack = createStackNavigator();
function HealthStackScreen(){
  return(
      <HealthStack.Navigator screenOptions={{ headerShown: false }}>
          <HealthStack.Screen name = "Period" component={PeriodStackScreen}/>
          <HealthStack.Screen name = "HealthMealPlanner" component={HealthMealPlanner}/>
          <HealthStack.Screen name = "Meal" component={MealStackScreen}/>
          <HealthStack.Screen name = "HealthActivityTracker" component={HealthActivityTracker}/>
          <HealthStack.Screen name = "ActivityTracker" component={ActivityTrackerStackScreen}/>
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
                                  backgroundColor: '#dda7a7', //Set Header color
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
          <PeriodStack.Screen name = "SymptomIntimacy" component={SymptomIntimacy}
                              options={{
                                title: "LOG SYMPTOMS",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#dda7a7', //Set Header color
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
          <PeriodStack.Screen name = "SymptomFlow" component={SymptomFlow}
                              options={{
                                title: "LOG SYMPTOMS",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#dda7a7', //Set Header color
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
          <PeriodStack.Screen name = "SymptomDischarge" component={SymptomDischarge}
                              options={{
                                title: "LOG SYMPTOMS",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#dda7a7', //Set Header color
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
          <PeriodStack.Screen name = "SymptomBody" component={SymptomBody}
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
          <PeriodStack.Screen name = "PeriodNote" component={PeriodNote}
                              options={{
                                title: "ADD NOTE",
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
  
const BudgetTrackerStack = createStackNavigator();
function BudgetTrackerStackScreen(){
  return(
      <BudgetTrackerStack.Navigator screenOptions={{ headerShown: false }}>
          <BudgetTrackerStack.Screen name = "BudgetTracker" component={BudgetTracker}
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
          <BudgetTrackerStack.Screen name = "BudgetBudgets" component={BudgetBudgets}
                              options={{
                                title: "BUDGETS",
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
          <BudgetTrackerStack.Screen name = "BudgetPayments" component={BudgetPayments}
                              options={{
                                title: "PAYMENTS",
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
          <BudgetTrackerStack.Screen name = "BudgetGoals" component={BudgetGoals}
                              options={{
                                title: "SAVINGS GOALS",
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
      </BudgetTrackerStack.Navigator>
  );
}

const MoodStack = createStackNavigator();
function MoodStackScreen(){
    return(
        <MoodStack.Navigator screenOptions={{ headerShown: false}}>
            <MoodStack.Screen name = "Mood" component={Mood}
                              options={{
                                title: "MOODS",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '600', //Set Header text style
                                  fontFamily: 'Spartan',
                                }, headerShown:true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
            <MoodStack.Screen name = "MoodShare" component={MoodShare}
                              options={{
                                title: "SHARE MY MOOD",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '600', //Set Header text style
                                  fontFamily: 'Spartan',
                                }, headerShown:true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
        </MoodStack.Navigator>
    );
}

const HabitTrackerStack = createStackNavigator();
function HabitTrackerStackScreen(){
    return(
        <HabitTrackerStack.Navigator screenOptions={{ headerShown: false}}>
            <HabitTrackerStack.Screen name = "HabitTracker" component={HabitTracker}
                              options={{
                                title: "HABIT TRACKER",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '600', //Set Header text style
                                  fontFamily: 'Spartan',
                                }, headerShown:true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
            <HabitTrackerStack.Screen name = "HabitWeek" component={HabitWeek}
                              options={{
                                title: "WEEK STATS",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '600', //Set Header text style
                                  fontFamily: 'Spartan',
                                }, headerShown:true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
            <HabitTrackerStack.Screen name = "HabitMonth" component={HabitMonth}
                              options={{
                                title: "MONTH STATS",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '600', //Set Header text style
                                  fontFamily: 'Spartan',
                                }, headerShown:true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
        </HabitTrackerStack.Navigator>
    );
}

const ActivityTrackerStack = createStackNavigator();
function ActivityTrackerStackScreen(){
    return(
        <ActivityTrackerStack.Navigator screenOptions={{ headerShown: false}}>
            <ActivityTrackerStack.Screen name = "ActivityTracker" component={ActivityTracker}
                              options={{
                                title: "TODAY",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '600', //Set Header text style
                                  fontFamily: 'Spartan',
                                }, headerShown:true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
            <ActivityTrackerStack.Screen name = "WaterRecord" component={WaterRecord}
                              options={{
                                title: "RECORD WATER",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '600', //Set Header text style
                                  fontFamily: 'Spartan',
                                }, headerShown:true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
            <ActivityTrackerStack.Screen name = "WaterHistory" component={WaterHistory}
                              options={{
                                title: "HISTORY",
                                headerStyle: {
                                  borderBottomColor: 'transparent',
                                  backgroundColor: '#FFFFFF', //Set Header color
                                },
                                headerTintColor: '#000000', //Set Header text color
                                headerTitleStyle: {
                                  fontWeight: '600', //Set Header text style
                                  fontFamily: 'Spartan',
                                }, headerShown:true,
                                headerRight: ()=> <ProfilePic/>,
                              }}
                              />
            
        </ActivityTrackerStack.Navigator>
    );
}

const BrainDumpStack = createStackNavigator();
function BrainDumpStackScreen(){
  return(
      <BrainDumpStack.Navigator screenOptions={{ headerShown: false }}>
          <BrainDumpStack.Screen name = "BrainDump" component={BrainDump}
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
          <BrainDumpStack.Screen name = "DumpNormal" component={DumpNormal}
                              options={{
                                title: "ADD NOTE",
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
          <BrainDumpStack.Screen name = "DumpList" component={DumpList}
                              options={{
                                title: "ADD LIST",
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
          <BrainDumpStack.Screen name = "DumpDraw" component={DumpDraw}
                              options={{
                                title: "ADD DRAWING",
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
          <BrainDumpStack.Screen name = "DumpRecord" component={DumpRecord}
                              options={{
                                title: "ADD RECORD",
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
          <BrainDumpStack.Screen name = "DumpPicture" component={DumpPicture}
                              options={{
                                title: "ADD PICTURE",
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
      </BrainDumpStack.Navigator>
  );
}

const FocusStack = createStackNavigator();
function FocusStackScreen(){
  return(
      <FocusStack.Navigator screenOptions={{ headerShown: false }}>
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
          <FocusStack.Screen name = "BudgetTracker" component={BudgetTrackerStackScreen}/>
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