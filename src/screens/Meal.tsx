import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import { RotationGestureHandler, TouchableOpacity } from 'react-native-gesture-handler';
import Pie  from 'react-native-pie';
import MealPieChart from './MealPieChart';


export default function Meal ({navigation}) {
  return (
    <View>
        <View style={styles.bigContainer}>
          <View style={styles.mealContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonOptions}>
                <Image
                source={require('../assets/images/chefhat.png')}
                style={{width:30,height:30,alignItems:'center',margin:5,marginLeft:25,}}
                />
                <Text style={styles.buttonText}>MY RECIPES</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonOptions}>
                <Image
                source={require('../assets/images/cart.png')}
                style={{width:30,height:30,alignItems:'center',margin:5, marginLeft:25,}}
                />
                <Text style={styles.buttonText}>GROCERY LIST</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonOptions}>
                <Image
                source={require('../assets/images/journal.png')}
                style={{width:30,height:30,alignItems:'center',margin:5,marginLeft:25,}}
                />
                <Text style={styles.buttonText}>MEAL PLANNER</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.mainContainer}>
              <Text style={styles.headText}>TODAY'S CALORIES</Text>
              <View style={styles.flexContainer}>
              <View style={styles.middleContainer}>
                  <View style={styles.categoryContainer}>
                    <View style={styles.borderBox}>
                      <Text style={styles.categoryText}>170g</Text>
                    </View>
                    <View style={styles.smallerText}>
                      <Text style={styles.textInfo}>CARBS left
                      </Text>
                    </View>
                  </View>
                  <View style={styles.categoryContainer}>
                    <View style={styles.borderBox}>
                      <Text style={styles.categoryText}>5g</Text>
                    </View>
                    <View style={styles.smallerText}>
                      <Text style={styles.textInfo}>FATS left
                      </Text>
                    </View>
                  </View>
                  <View style={styles.categoryContainer}>
                    <View style={styles.borderBox}>
                      <Text style={styles.categoryText}>12g</Text>
                    </View>
                    <View style={styles.smallerText}>
                      <Text style={styles.textInfo}>PROTEINS left
                      </Text>
                    </View>
                  </View>
                </View>
                  <View style={styles.pieSection}>
                    <View style={{}}>
                      <Pie style={{alignSelf: 'center'}}
                        radius={120}
                        innerRadius={100}
                        sections={[
                            {percentage: 25, color: '#FFD6AF' },
                            {percentage: 25, color: '#FFF9C3' },
                            { percentage: 25, color: '#D2978A' },
                            { percentage: 25, color: 'white'},
                        ]} 
                        strokeCap={'butt'}
                      />
                    </View>
                    <View style={styles.textPie}>
                      <Text style={styles.pieText}><Text style={{fontFamily: 'Spartan-SemiBold', fontSize: 26}}>1030</Text>
                      /2000
                      </Text>
                      <Text style={{fontSize:12, fontFamily: 'Spartan-Regular'}}>calories</Text>
                    </View>
                  </View>
                {/* </View> */}
            </View>
            </View>
            <View style={styles.bottomContainer}>
              <View style={styles.snackContainer}>
                  <Text style={styles.mealNumber}>160</Text>
                  <Text style={styles.mealSmall}>cal</Text>
                  <Text style={styles.mealHeader}>SNACK</Text>
              </View>
              <View style={styles.dinnerContainer}>
                  <Text style={styles.mealNumber}>...</Text>
                  <Text style={styles.mealSmall}>cal</Text>
                  <Text style={styles.mealHeader}>DINNER</Text>
              </View>
              <View style={styles.lunchContainer}>
                  <Text style={styles.mealNumber}>400</Text>
                  <Text style={styles.mealSmall}>cal</Text>
                  <Text style={styles.mealHeader}>LUNCH</Text>
              </View>
              <View style={styles.breakfastContainer}>
                  <Text style={styles.mealNumber}>470</Text>
                  <Text style={styles.mealSmall}>cal</Text>
                  <Text style={styles.mealHeader}>BREAKFAST</Text>
              </View>
            </View>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  bigContainer: {
    alignItems:'center',
    backgroundColor:'white',
    width:'100%',
    height:'100%',
  },
  mealContainer: {
    width:'100%',
    height:'100%',
  },
  buttonContainer: {
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'20%',
    alignContent:'center',
    marginLeft:20,
  },
  buttonOptions: {
    backgroundColor:'#ffd2ab',
    alignContent:'center',
    width:100,
    padding:10,
    margin:5,
    height:90,
    borderRadius:30,
    textAlign:'center',
  },
  buttonText: {
    fontFamily:'Spartan-Regular',
    fontSize:12,
    fontWeight:'600',
    letterSpacing:1,
    // marginTop:10,
    textAlign: 'center'
  },
  mainContainer: {
    width:'100%',
    height:'60%',
    // marginTop:30,
  },
  headText: {
    fontSize:14,
    fontFamily:'Spartan-SemiBold',
    letterSpacing:1,
    marginLeft:10,
  },
  flexContainer: {
    width:'100%',
    height:'100%',
    display:'flex',
    flexDirection:'row',
  },
  middleContainer: {
    width:'50%',
    height:'100%',
    backgroundColor:'#fffbdb',
    display:'flex',
    flexDirection:'column',
  },
  categoryContainer: {
    width:'100%',
    height:'30%',
    padding:5,
    marginTop:10,
  },
  borderBox: {
    borderBottomWidth:1,
    borderColor:'black',
    width:'auto',
  },
  categoryText: {
    fontWeight:'600',
    fontSize:20,
    textAlign:'left',
    fontFamily: 'Spartan-SemiBold'
  },
  smallerText: {
    display:'flex',
    flexDirection:'row',
  },
  textInfo: {
    textAlign:'left',
    fontSize:14,
    fontFamily: 'Spartan-Regular'
  },
  pieChart: {
    // width:'120%',
  },
  textPie: {
    width:200,
    height:200,
    justifyContent:'center',
    borderRadius:100,
    alignSelf: 'center',
    marginTop:20,
    position:'absolute',
    alignItems:'center',
    alignContent: 'center',
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'lightgray',
  },
  pieText: {
    width:'100%',
    color:'black',
    textAlign: 'center',
    fontSize:20,
    display:'flex',
    flexDirection:'row',
    fontFamily: 'Spartan-Regular'
  },
  pieSection: {
    marginTop:80,
    marginLeft:-60,
  },
  bottomContainer: {
    // marginTop:10,
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'100%',
  },
  snackContainer: {
    width:'25%',
    height:'100%',
    backgroundColor:'#fff9c3',
  },
  dinnerContainer: {
    width:'25%',
    height:'100%',
    backgroundColor:'#9cc3b0',
  },
  lunchContainer: {
    width:'25%',
    height:'100%',
    backgroundColor:'#d2978a',
  },
  breakfastContainer: {
    width:'25%',
    height:'100%',
    backgroundColor:'#ffd6af',
  },
  mealNumber: {
    color:'black',
    fontSize:15,
    fontWeight:'800',
    textAlign:'center',
    marginTop:10,
    fontFamily: 'Spartan-Regular'
  },
  mealSmall: {
    fontSize:15,
    textAlign:'center',
    fontFamily: 'Spartan-Regular'
  },
  mealHeader: {
    marginTop:5,
    color:'black',
    fontSize:14,
    // transform:[{rotate:'-90deg'}],
    textAlign: 'right',
    // marginLeft:'10%',
    // width:'100%',
    // height:'100%',
    fontFamily: 'Spartan-SemiBold',
    alignSelf:'center',

  },
});