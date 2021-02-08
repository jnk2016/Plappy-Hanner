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
        <View style={styles.smallContainer}>
            <View style={styles.headContainer}>
            <Text style={styles.headText}>CURRENT CALORIE INTAKE</Text>
              <View style={styles.topHead}>
                <View style={styles.topContainer}>
                  <Text style={styles.calorieText}>
                    <Text style={{fontWeight:'700'}}>1030</Text>
                    <Text>/2000</Text>
                  </Text>
                  <Text style={styles.topDesc}>calories</Text>
                </View>
                <TouchableOpacity style={styles.editButton}>
                  <Text style={styles.editText}>edit</Text>
                </TouchableOpacity>
                <View style={styles.bottomHead}>
                  <Text style={styles.lowerDesc}>
                    <Text style={{fontWeight:'600', fontSize:20, marginBottom:10}}>170g</Text>
                    <Text>CARBS left</Text>
                  </Text>
                  <Text style={styles.lowerDesc}>
                    <Text style={{fontWeight:'600', fontSize:20, marginBottom:10}}>5g</Text>
                    <Text>FATS left</Text>
                  </Text>
                  <Text style={styles.lowerDesc}>
                    <Text style={{fontWeight:'600', fontSize:20, marginBottom:10}}>12g</Text>
                    <Text>PROTEINS left</Text>
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.mealContainer}>
              <View style={styles.innerContainer}>
              <Text style={styles.headinnerText}>UPCOMING MEAL</Text>
              <View style={styles.mealBorder}>
                <Text style={styles.mealheadText}>DINNER</Text>
                <View style={styles.entreeBox}>
                  <View style={styles.entreePic}></View>
                  <Text style={styles.entreeText}>
                    <Text>Chicken Carbonara</Text>
                    <Text>1 serving</Text>
                  </Text>
                  <Text style={styles.entreeCal}>350 cals</Text>
                </View>
                <View style={styles.entreeBox}>
                  <View style={styles.entreePic}></View>
                  <Text style={styles.entreeText}>
                    <Text>Garlic Bread with Parmesan</Text>
                    <Text>1 serving</Text>
                  </Text>
                  <Text style={styles.entreeCal}>100 cals</Text>
                </View>
              </View>
              <Text style={styles.totalCal}>
                <Text>TOTAL CALORIES</Text>
                <Text>450 cals</Text>
              </Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.mainButton} onPress={()=>navigation.navigate('MealRecipes')}>
                <Image
                source={Hat}
                style={{width:40, height:40, alignSelf:'center'}}
              />
              <Text style={styles.buttonText}>MY RECIPES</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.mainButton} onPress={()=>navigation.navigate('MealGrocery')}>
                <Image
                source={Cart}
                style={{width:40, height:40, alignSelf:'center'}}
              />
              <Text style={styles.buttonText}>GROCERY LIST</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.mainButton}  onPress={()=>navigation.navigate('MealPlanner')}>
                <Image
                source={Journal}
                style={{width:40, height:40, alignSelf:'center'}}
              />
              <Text style={styles.buttonText}>MEAL PLANNER</Text>
              </TouchableOpacity>
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
  smallContainer: {
    width:'90%',
    height:'100%',
    backgroundColor:'#FFE4CB',
    alignSelf:'center',
    justifyContent:'space-around',
    alignContent:'center',
    borderRadius:10,
    display:'flex',
    flexDirection:'column',
    position:'relative',
    marginTop:20,
  },
  headText: {
    color:'black',
    letterSpacing:1,
    fontSize:14,
    fontFamily:'spartan',
    alignSelf:'center',
    marginTop:-80,
  },
  headContainer: {
    width:'95%',
    height:'40%',
    display:'flex',
    flexDirection:'column',
    position:'relative',
    marginTop:30,
    alignSelf:'center',
    justifyContent:'space-around'
  },
  topHead: {
    borderWidth:1,
    borderColor:'black',
    width:'100%',
    height:'60%',
    padding:10,
    zIndex:0,
    position:'absolute',
    marginTop:120,
  },
  topContainer: {
    backgroundColor:'white',
    width:'50%',
    height:'65%',
    borderRadius:10,
    alignSelf:'center',
    justifyContent:'center',
    textAlign:'center',
    display:'flex',
    flexDirection:'column'
  },
  calorieText: {
    width:'100%',
    height:'auto',
    color:'black',
    fontFamily:'spartan',
    fontSize:18,
    display:'flex',
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'center',
  },
  topDesc: {
    color:'black',
    fontFamily:'spartan',
    fontSize:16,
    letterSpacing:1,
    alignSelf:'center',
  },
  editButton: {
    width:'20%',
    height:'auto',
    padding:10,
    borderRadius:10,
    backgroundColor:'black',
    textAlign:'center',
    zIndex:2,
    marginLeft:120,
    marginTop:-10,
  },
  editText: {
    color:'white',
    fontSize:10,
  },
  bottomHead: {
    borderWidth:1,
    borderColor:'black',
    width:'100%',
    height:'auto',
    padding:10,
    display:'flex',
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'space-between',
  },
  lowerDesc: {
    display:'flex',
    flexDirection:'column',
    width:'35%',
    height:'auto',
    color:'black',
    fontSize:10,
    textAlign:'left',
    marginLeft:20,
  },
  mealContainer: {
    width:'100%',
    height:'50%',
    position:'relative',
  },
  headinnerText: {
    color:'black',
    letterSpacing:1,
    fontSize:14,
    fontFamily:'spartan',
    alignSelf:'center',
  },
  innerContainer: {
    backgroundColor:'#fffbdb',
    width:'80%',
    height:'90%',
    alignSelf:'center',
    justifyContent:'center',  
    display:'flex',
    flexDirection:'column',
    zIndex:0,
    position:'absolute',
    marginTop:50,
  },
  mealBorder: {
    width:'110%',
    height:'60%',
    zIndex:1,
    borderWidth:1,
    borderColor:'black',
    alignContent:'center',
    display:'flex',
    flexDirection:'column',
    alignSelf:'center',
    justifyContent:'center'
  },
  mealheadText: {
    textAlign:'right',
    color:'black',
    fontSize:16,
    margin:5,
  },
  entreeBox: {
    borderWidth:1,
    borderColor:'black',
    width:'90%',
    height:'auto',
    padding:5,
    display:'flex',
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'space-between',
    marginBottom:10,
  },
  entreePic: {
    backgroundColor:'white',
    width:45,
    height:45,
    borderWidth:1,
    borderColor:'black',
  },
  entreeText: {
    display:'flex',
    flexDirection:'column',
    width:'50%',
    height:'auto',
    lineHeight:15,
    color:'black',
    fontSize:12,
  },
  entreeCal: {
    color:'#727272',
    fontSize:12,
    textAlign:'right',
    width:'20%',
  },
  totalCal: {
    color:'black',
    fontSize:16,
    width:'95%',
    height:'auto',
    alignSelf:'center',
    justifyContent:'space-between',
    display:'flex',
    flexDirection:'row',
    marginTop:20,
  },
  buttonContainer: {
    width:'100%',
    height:'30%',
    alignSelf:'center',
    justifyContent:'space-between',
    display:'flex',
    flexDirection:'row',
    marginTop:30,
  },
  mainButton: {
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'black',
    width:'100%',
    borderRadius:10,
    height:'auto',
    padding:10,
    display:'flex',
    flexDirection:'column',
    textAlign:'center',
  },
  buttonText: {
    color:'black',
    fontSize:12,
  }
});

