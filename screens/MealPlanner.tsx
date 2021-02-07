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


export default function MealPlanner ({navigation}) {
  return (
      <View style={styles.bigContainer}>
        <View style={styles.headContainer}>
            <Text style={styles.headText}>FRIDAY JAN 8</Text>
          <View style={styles.calorieHead}>
            <View style={styles.calorieTop}>
              <Text style={styles.totalCalorie}>
                <Text style={{fontSize:18}}>1362</Text>
                <Text>CALORIES</Text>
              </Text>
            </View>
            <View style={styles.calorieBottom}>
              <View style={styles.calorieList}>
                <Text style={styles.gramText}>
                  <Text style={{fontSize:16,}}>28g</Text>
                  <Text>CARBS</Text>
                </Text>
                <Text style={styles.gramText}>
                  <Text style={{fontSize:16,}}>28g</Text>
                  <Text>FATS</Text>
                </Text>
                <Text style={styles.gramText}>
                  <Text style={{fontSize:16,}}>28g</Text>
                  <Text>PROTEINS</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.containerList}>
            <View style={styles.mealBox}>
              <View style={styles.mealText}>
                <Text style={styles.mainText}>BREAKFAST</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.redCircle}></TouchableOpacity>
                <TouchableOpacity style={styles.redCircle}></TouchableOpacity>
                <TouchableOpacity style={styles.redCircle}></TouchableOpacity>
              </View>
            </View>
            <View style={styles.mealBox}>
              <View style={styles.mealText}>
                <Text style={styles.mainText}>LUNCH</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.redCircle}></TouchableOpacity>
                <TouchableOpacity style={styles.redCircle}></TouchableOpacity>
                <TouchableOpacity style={styles.redCircle}></TouchableOpacity>
              </View>
            </View>
            <View style={styles.mealBox}>
              <View style={styles.mealText}>
                <Text style={styles.mainText}>DINNER</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.redCircle}></TouchableOpacity>
                <TouchableOpacity style={styles.redCircle}></TouchableOpacity>
                <TouchableOpacity style={styles.redCircle}></TouchableOpacity>
              </View>
            </View>
            <View style={styles.mealBox}>
              <View style={styles.mealText}>
                <Text style={styles.mainText}>SNACKS</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.redCircle}></TouchableOpacity>
                <TouchableOpacity style={styles.redCircle}></TouchableOpacity>
                <TouchableOpacity style={styles.redCircle}></TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create ({
  bigContainer: {
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    alignContent:'center',
  },
  headContainer: {
    width:'90%',
    height:'30%',
    alignSelf:'center',
    justifyContent:'center',
  },
  headText: {
    textAlign:'center',
    color:'black',
    letterSpacing:1,
    fontFamily:'spartan',
    fontSize:14,
  },
  calorieHead: {
    width:270,
    height:125,
    alignSelf:'center',
    backgroundColor:'#f9efe0',
    alignContent:'center',
    display:'flex',
    flexDirection:'column',
    padding:10,
  },
  calorieTop:{
    width:'90%',
    alignSelf:'center',
    height:'auto',
    padding:5,
    textAlign:'center',
    borderBottomColor:'black',
    borderBottomWidth:1,
  },
  totalCalorie: {
    display:'flex',
    flexDirection:'column',
    color:'black',
    fontSize:14,
    fontFamily:'spartan',
    letterSpacing:1,
    alignSelf:'center',
    justifyContent:'space-between',
  },
  calorieBottom: {
    width:'95%',
    height:'50%',
    alignItems:'center',
  },
  calorieList: {
    display:'flex',
    flexDirection:'row',
    height:'95%',
    width:'100%',
    alignSelf:'center',
    justifyContent:'space-between',
    marginTop:5,
  },
  gramText: {
    display:'flex',
    flexDirection:'column',
    width:'30%',
    height:'auto',
    lineHeight:20,
    color:'black',
    fontSize:10,
    letterSpacing:1,
    fontFamily:'spartan',
    textAlign:"center",
  },
  mainContainer: {
    width:'90%',
    height:'70%',
    alignSelf:'center',
    justifyContent:'space-around',
  },
  containerList: {
    display:'flex',
    flexDirection:'column',
    alignSelf:'center',
    width:'100%',
    height:'100%',
  },
  mealBox: {
    borderTopWidth:1,
    borderBottomWidth:1,
    borderTopColor:'black',
    borderBottomColor:'black',
    height:'20%',
    width:'100%',
    display:'flex',
    flexDirection:'row',
    alignContent:'center',
  },
  mealText: {
    borderRightColor:'black',
    borderRightWidth:1,
    alignContent:'center',
    width:'40%',
    height:'100%'
  },
  mainText: {
    color:'black',
    fontSize:14,
    fontFamily:'spartan',
    letterSpacing:1,
    margin:10,
  },
  buttonContainer: {
    display:'flex',
    flexDirection:'column',
    alignContent:'flex-start',
    justifyContent:'space-between',
    width:'60%',
    height:'55%',
    margin:10,
  },
  redCircle: {
    width:10,
    height:10,
    borderRadius:5,
    backgroundColor:'#e9afaf',
  },
});