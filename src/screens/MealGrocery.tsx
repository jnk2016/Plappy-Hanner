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


export default function MealGrocery ({navigation}) {
  return (
      <View style={styles.bigContainer}>
        <View style={styles.textContent}>
          <View style={styles.textList}>
            <TouchableOpacity style={styles.listButton}>
              <Text style={styles.buttonText}>PRODUCE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textList}>
            <TouchableOpacity style={styles.listButton}>
              <Text style={styles.buttonText}>MEAT & FISH</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textList}>
            <TouchableOpacity style={styles.listButton}>
              <Text style={styles.buttonText}>PANTRY</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textList}>
            <TouchableOpacity style={styles.listButton}>
              <Text style={styles.buttonText}>FROZEN</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textList}>
            <TouchableOpacity style={styles.listButton}>
              <Text style={styles.buttonText}>DRINKS</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textList}>
            <TouchableOpacity style={styles.listButton}>
              <Text style={styles.buttonText}>BAKERY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create ({
  bigContainer: {
    backgroundColor:'#fffbd8',
    width:'100%',
    height:'100%',
    alignContent:'center'
  },
  textContent: {
    display:'flex',
    flexDirection:'column',
    width:'80%',
    height:'60%',
    alignSelf:'center',
    justifyContent:'space-between',
    marginTop:100,
  },
  textList: {
    borderBottomColor:'black',
    borderBottomWidth:1,
    width:'100%',
    height:'10%',
  },
  listButton: {
    width:'100%',
    height:'90%',
    textAlign:'left',
  },
  buttonText: {
    fontSize:24,
    fontFamily:'spartan',
    color:'black',
    letterSpacing:1,
    fontWeight:'600'
  },

})