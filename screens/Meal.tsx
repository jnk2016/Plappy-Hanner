import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
// import '../assets/css/selfcare.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import { RotationGestureHandler, TouchableOpacity } from 'react-native-gesture-handler';
import { PieChart } from 'react-minimal-pie-chart';


export default function Meal ({navigation}) {
  return (
    <View>
        <View style={styles.bigContainer}>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.buttonOptions}>
                <Text style={styles.buttonText}>MY RECIPES</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.buttonOptions}>
                <Text style={styles.buttonText}>GROCERY LIST</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.buttonOptions}>
                <Text style={styles.buttonText}>MEAL PLANNER</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.leftContainer}>
              <Text style={styles.headText}>TOTAL CALORIES</Text>
              <View style={{alignContent:'left'}}>
              <Text style={styles.pieText}>1030 kcal</Text>
                <PieChart style={{alignSelf: 'center'}}
                    data={[
                        { title: 'One', value: 1, color: '#9CC3B0' },
                        { title: 'Two', value: 1, color: 'white' },
                        { title: 'Three', value: 1, color: '#9CC3B0' },
                        { title: 'Four', value: 1, color: 'white'},
                        { title: 'Fifth', value: 1, color: '#9CC3B0'},
                        { title: 'Sixth', value: 1, color: 'white' },
                        { title: 'Seventh', value: 5, color: '#9CC3B0'},
                    ]} lineWidth={35} viewBoxSize={[100,100]}
                />
              </View>
              <View style={styles.otherInfo}>
              <View style={{alignContent:'left'}}>
              <Text style={styles.pieText}>170 grams</Text>
                <PieChart style={{alignSelf: 'center'}}
                    data={[
                        { title: 'One', value: 1, color: '#FFC997' },
                        { title: 'Two', value: 3, color: 'white' },
                        { title: 'Three', value: 1, color: '#FFC997' },
                        { title: 'Four', value: 6, color: '#FFC997'},
                    ]} lineWidth={35} viewBoxSize={[180,180]}
                />
                <Text style={styles.smallerHeader}>Carbs</Text>
              </View>
              <View style={{alignContent:'left'}}>
              <Text style={styles.pieText}>22 grams</Text>
                <PieChart style={{alignSelf: 'center'}}
                    data={[
                        { title: 'One', value: 7, color: '#FF9797' },
                        { title: 'Two', value: 3, color: 'white' },
                    ]} lineWidth={35} viewBoxSize={[180,180]}
                />
                <Text style={styles.smallerHeader}>Carbs</Text>
              </View>
              <View style={{alignContent:'left'}}>
              <Text style={styles.pieText}>25 grams</Text>
                <PieChart style={{alignSelf: 'center'}}
                    data={[
                        { title: 'One', value: 2, color: '#9EB4DF' },
                        { title: 'Two', value: 1, color: 'white' },
                        { title: 'Three', value: 2, color: '#9EB4DF' },
                        { title: 'Four', value: 1, color: 'white'},
                        { title: 'Fifth', value: 1, color: '#9EB4DF'},
                    ]} lineWidth={35} viewBoxSize={[180,80]}
                />
                <Text style={styles.smallerHeader}>Carbs</Text>
              </View>
              </View>
            </View>
            <View style={styles.rightContainer}>
              <View style={styles.breakfastContainer}>
                <Text style={styles.mealText}>BREAKFAST</Text>
                <Text style={styles.mealNumber}>470 cal</Text>
              </View>
              <View style={styles.lunchContainer}>
                <Text style={styles.mealText}>LUNCH</Text>
                <Text style={styles.mealNumber}>400 cal</Text>
              </View>
              <View style={styles.dinnerContainer}>
                <Text style={styles.mealText}>DINNER</Text>
                <Text style={styles.mealNumber}>...</Text>
              </View>
              <View style={styles.snackContainer}>
                <Text style={styles.mealText}>SNACK</Text>
                <Text style={styles.mealNumber}>160 cal</Text>
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
  },
  buttonContainer: {
    display:'flex',
    flexDirection:'row',
    width:'100%',
    alignContent:'center',
  },
  buttonRow: {
    margin:5,
  },
  buttonOptions: {
    backgroundColor:'#ffd2ab',
    width:'80%',
    padding:10,
  },
  buttonText: {
    fontFamily:'spartan',
    fontSize:12,
    fontWeight:'normal',
  },
  mainContainer: {
    width:'100%',
    height:'auto',
  },
  headText: {
    fontSize:14,
    fontFamily:'spartan',
    letterSpacing:1,
  },
  leftContainer: {
    width:'50%',
    height:'auto',
    backgroundColor:'#ffecdb',
    display:'flex',
    flexDirection:'column',
  },
  pieText: {
    fontSize:18,
    fontWeight:'bold',
  },
  otherInfo: {
    flexDirection:'column',
  },
  smallerHeader: {
    fontSize:14,
    letterSpacing:1,
  },
  rightContainer: {
    display:'flex',
    flexDirection:'column',
  },
  breakfastContainer: {
    backgroundColor:'#E0B995',
    width:'100%',
    height:'auto',
    padding:20,
    alignContent:'center',
    textAlign:'center',
  },
  lunchContainer: {
    backgroundColor:'#C3715E',
    width:'100%',
    height:'auto',
    padding:20,
    alignContent:'center',
    textAlign:'center',
  },
  dinnerContainer: {
    backgroundColor:'#9CC3B0',
    width:'100%',
    height:'auto',
    padding:20,
    alignContent:'center',
    textAlign:'center',
  },
  snackContainer: {
    backgroundColor:'#E5E5E5',
    width:'100%',
    height:'auto',
    padding:20,
    alignContent:'center',
    textAlign:'center',
  },
  mealText: {
    color:'black',
    fontSize:14,
  },
  mealNumber: {
    color:'black',
    fontSize:14,
    fontWeight:'600',
  }
});