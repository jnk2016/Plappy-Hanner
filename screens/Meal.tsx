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
    <View>
        <View style={styles.bigContainer}>
          <View style={styles.mealContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonOptions}>
                <Image
                source={Hat}
                style={{width:30,height:30,alignItems:'center',margin:5,marginLeft:25,}}
                />
                <Text style={styles.buttonText}>MY RECIPES</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonOptions}>
                <Image
                source={Cart}
                style={{width:30,height:30,alignItems:'center',margin:5, marginLeft:25,}}
                />
                <Text style={styles.buttonText}>GROCERY LIST</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonOptions}>
                <Image
                source={Journal}
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
                      <Text style={styles.textInfo}>
                        <Text style={{fontWeight:'600', marginRight:5,}}>CARBS</Text>
                        <Text>left</Text>
                      </Text>
                    </View>
                  </View>
                  <View style={styles.categoryContainer}>
                    <View style={styles.borderBox}>
                      <Text style={styles.categoryText}>5g</Text>
                    </View>
                    <View style={styles.smallerText}>
                      <Text style={styles.textInfo}>
                        <Text style={{fontWeight:'600', marginRight:5,}}>FATS</Text>
                        <Text>left</Text>
                      </Text>
                    </View>
                  </View>
                  <View style={styles.categoryContainer}>
                    <View style={styles.borderBox}>
                      <Text style={styles.categoryText}>12g</Text>
                    </View>
                    <View style={styles.smallerText}>
                      <Text style={styles.textInfo}>
                        <Text style={{fontWeight:'600', marginRight:5,}}>PROTEINS</Text>
                        <Text>left</Text>
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.pieChart}>
                  <View style={styles.pieSection}>
                    <View style={{transform:[{rotate:'-90deg'}]}}>
                      <PieChart style={{marginLeft:-10,}}
                        data={[
                            { title: 'One', value: 4, color: '#FFD6AF' },
                            { title: 'Two', value: 1, color: '#FFF9C3' },
                            { title: 'Three', value: 5, color: '#D2978A' },
                            { title: 'Four', value: 10, color: 'white'},
                        ]} lineWidth={35} viewBoxSize={[100,100]}
                      />
                    </View>
                    <View style={styles.textPie}>
                      <Text style={styles.pieText}>
                        <Text style={{fontWeight:'600'}}>1030</Text>
                        <Text>/2000</Text>
                      </Text>
                      <Text style={{fontSize:12}}>calories</Text>
                    </View>
                  </View>
                </View>
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
    fontFamily:'spartan',
    fontSize:12,
    fontWeight:'600',
    letterSpacing:1,
    marginTop:10,
  },
  mainContainer: {
    width:'100%',
    height:'60%',
    marginTop:30,
  },
  headText: {
    fontSize:14,
    fontFamily:'spartan',
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
  },
  smallerText: {
    display:'flex',
    flexDirection:'row',
  },
  textInfo: {
    textAlign:'left',
    fontSize:14,
  },
  pieChart: {
    width:'50%',
  },
  textPie: {
    width:180,
    height:180,
    justifyContent:'center',
    borderRadius:90,
    marginLeft:45,
    marginTop:50,
    position:'absolute',
    alignItems:'center',
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'lightgray',
  },
  pieText: {
    width:'100%',
    color:'black',
    marginLeft:50,
    fontSize:24,
    display:'flex',
    flexDirection:'row',
  },
  pieSection: {
    marginTop:30,
    marginLeft:-80,
  },
  bottomContainer: {
    marginTop:10,
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'40%',
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
    fontSize:24,
    fontWeight:'600',
    textAlign:'center',
    marginTop:10,
  },
  mealSmall: {
    fontSize:20,
    textAlign:'center',
  },
  mealHeader: {
    marginTop:25,
    color:'black',
    fontSize:14,
    textAlign:'left',
    transform:[{rotate:'-90deg'}],
    marginLeft:80,
    width:'100%',
    height:'100%',
  },
});