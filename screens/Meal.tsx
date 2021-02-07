import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
// import '../assets/css/selfcare.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import Journal from '../assets/images/journal.png';
import Cart from '../assets/images/cart.png';
import Hat from '../assets/images/chefhat.png';
import { RotationGestureHandler, TouchableOpacity } from 'react-native-gesture-handler';
import { PieChart } from 'react-minimal-pie-chart';


export default function Meal ({navigation}) {
  return (
      <View style={styles.bigContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.smallContainer}>
            <View style={styles.topContainer}>
              <View style={styles.leftFloat}>
                <Text style={styles.topText}>TOTAL:</Text>
                <View style={styles.leftList}>
                    <Text style={styles.lowerDesc}>
                    <Text style={{fontWeight:'600', fontSize:18, marginBottom:5}}>170g</Text>
                    <Text>CARBS</Text>
                  </Text>
                  <Text style={styles.lowerDesc}>
                    <Text style={{fontWeight:'600', fontSize:18, marginBottom:5}}>5g</Text>
                    <Text>FATS</Text>
                  </Text>
                  <Text style={styles.lowerDesc}>
                    <Text style={{fontWeight:'600', fontSize:18, marginBottom:5}}>12g</Text>
                    <Text>PROTEINS</Text>
                  </Text>
                </View>
                <View style={styles.grayContainer}>
                  <Text style={styles.calBox}>
                    <Text style={{fontSize:18, fontWeight:'600'}}>1362</Text>
                    <Text>CAL</Text>
                  </Text>
                </View>
              </View>
            <View style={styles.mealContent}>
              <Text style={styles.headText}>TODAY'S MEALS</Text>
              <View style={styles.mealList}>
                <View style={styles.mealContainer}>
                  <View style={styles.headBox}>
                    <Text style={styles.mealHead}>BREAKFAST</Text>
                  </View>
                  <Text style={styles.mealDesc}>
                    <Text>Ham & Cheese HP</Text>
                    <Text>Low-fat yogurt</Text>
                    <Text>Granola Bar</Text>
                  </Text>
                </View>
                <View style={styles.mealContainer}>
                  <View style={styles.headBox}>
                    <Text style={styles.mealHead}>LUNCH</Text>
                  </View>
                  <Text style={styles.mealDesc}>
                    <Text>Ham & Cheese HP</Text>
                    <Text>Low-fat yogurt</Text>
                    <Text>Granola Bar</Text>
                  </Text>
                </View>
                <View style={styles.mealContainer}>
                  <View style={styles.headBox}>
                    <Text style={styles.mealHead}>DINNER</Text>
                  </View>
                  <Text style={styles.mealDesc}>
                    <Text>Ham & Cheese HP</Text>
                    <Text>Low-fat yogurt</Text>
                    <Text>Granola Bar</Text>
                  </Text>
                </View>
                <View style={styles.mealContainer}>
                  <View style={styles.headBox}>
                    <Text style={styles.mealHead}>SNACKS</Text>
                  </View>
                  <Text style={styles.mealDesc}>
                    <Text>Granola Bar</Text>
                  </Text>
                </View>
                </View>
            </View>
            </View>
              <View style={styles.buttonContainer}>
                <View style={styles.buttonRow}>
                  <View style={styles.buttonOption}>
                  <TouchableOpacity style={styles.mainButton} onPress={()=>navigation.navigate('MealRecipes')}>
                    <Image
                    source={Hat}
                    style={{width:20, height:20, marginTop:5, alignSelf:'center',}}
                    />
                  </TouchableOpacity>
                    <Text style={styles.buttonText}>MY RECIPES</Text>
                  </View>
                  <View style={styles.buttonOption}>
                    <TouchableOpacity style={styles.mainButton} onPress={()=>navigation.navigate('MealGrocery')}>
                    <Image
                    source={Cart}
                    style={{width:20, height:20, marginTop:5,alignSelf:'center',}}
                    />
                    </TouchableOpacity>
                      <Text style={styles.buttonText}>GROCERY LIST</Text>
                  </View>
                  <View style={styles.buttonOption}>
                    <TouchableOpacity style={styles.mainButton}  onPress={()=>navigation.navigate('MealPlanner')}>
                    <Image
                    source={Journal}
                    style={{width:20, height:20, marginTop:5,alignSelf:'center',}}
                    />
                    </TouchableOpacity>
                      <Text style={styles.buttonText}>MEAL PLANNER</Text>
                  </View> 
                </View>
            </View>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create ({
  bigContainer: {
    backgroundColor:'white',
    width:'100%',
    height:'100%',
  },
  mainContainer: {
    width:'100%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    fontFamily:'spartan',
    position:'relative',
  },
  smallContainer: {
    width:'90%',
    height:'100%',
    backgroundColor:'#F5d2c6',
    alignSelf:'center',
    display:'flex',
    flexDirection:'column',
  },
  topContainer: {
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'80%',
    alignSelf:'flex-start',
    justifyContent:'space-between',
  },
  topText: {
    color:'black',
    fontSize:12,
    fontFamily:'spartan',
    letterSpacing:1,
    textAlign:'center',
    marginTop:10,
  },
  leftFloat: {
    width:'20%',
    height:'80%',
    backgroundColor:'#f9efe0',
    display:'flex',
    flexDirection:'column',
    alignSelf:'flex-start',
    justifyContent:'space-between',
    marginLeft:10,
  },
  leftList: {
    width:'100%',
    height:'60%',
    alignSelf:'center',
    justifyContent:'space-between',
    display:'flex',
    flexDirection:'column',
  },
  lowerDesc: {
    display:'flex',
    flexDirection:'column',
    width:'105%',
    height:'auto',
    color:'black',
    fontSize:10,
    textAlign:'center',
    padding:10,
    alignSelf:'center',
  },
  grayContainer: {
    backgroundColor:'#c4c4c4',
    width:'100%',
    height:'20%',
    alignContent:'center',
    alignSelf:'baseline'
  },
  calBox: {
    color:'black',
    fontSize:16,
    display:'flex',
    flexDirection:'column',
    alignSelf:'center',
    marginTop:10,
    textAlign:'center',
  },
  mealContent: {
    width:'75%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
  },
  headText: {
    color:'black',
    letterSpacing:1,
    fontSize:18,
    fontFamily:'spartan',
    textAlign:'right',
    margin:10,
  },
  mealContainer: {
    width:'80%',
    height:'auto',
    position:'relative',
    borderWidth:1,
    borderColor:'black',
    display:'flex',
    flexDirection:'column',
    padding:10,
    alignSelf:'center',
  },
  mealList: {
    marginTop:20,
    width:'95%',
    height:'80%',
    display:'flex',
    flexDirection:'column',
    alignSelf:'flex-end',
    justifyContent:'space-between',
  },
  mealHead: {
    fontSize:16,
    alignSelf:'flex-end',
    color:'black',
    letterSpacing:1,
  },
  headBox: {
    backgroundColor:'#F5d2c6',
    textAlign:'center',
    marginTop:-20,
    marginRight:-20,
    width:'auto',
    height:'auto',
    padding:10,
    alignSelf:'flex-end',
    zIndex:2,
  },
  mealDesc: {
    color:'black',
    fontSize:12,
    lineHeight:20,
    textAlign:'left',
    display:'flex',
    flexDirection:'column',
    letterSpacing:1,
    fontFamily:'spartan'
  },
  buttonContainer: {
    width:'110%',
    height:'18%',
    backgroundColor:'#fffbdb',
    alignSelf:'center',
  },
  buttonRow: {
    alignSelf:'center',
    justifyContent:'space-between',
    display:'flex',
    flexDirection:'row',
    width:'95%',
    height:'100%',
    padding:5,
  },
  buttonOption: {
    display:'flex',
    flexDirection:'column',
    width:'33%',
    height:'60%',
    alignSelf:'center',
    justifyContent:'space-between',
    alignItems:'center',
  },
  mainButton: {
    width:50,
    height:50,
    padding:10,
    borderWidth:1,
    borderColor:'black',
    borderRadius:25,
    textAlign:'center',
  },
  buttonText: {
    color:'black',
    fontSize:10,
    fontFamily:'spartan',
  }
});

