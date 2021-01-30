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


export default function MealRecipes ({navigation}) {
  return (
      <View style={styles.bigContainer}>
        <View style={styles.mainContainer}>
           <TextInput style={styles.searchBar}
            underlineColorAndroid='transparent'
            placeholder='Search'
            placeholderTextColor='#c5c5c5'
            autoCapitalize='none'
            allowFontScaling={true}/>
          <View style={styles.buttonContainer}>
            <View style={styles.recipeHead}>
                <Text style={styles.recipeText}>RECIPE BOOK</Text>
            </View>
            <View style={styles.topbuttonContainer}>
              <TouchableOpacity style={styles.listButton} onPress={()=> console.log("button pressed")}>
                <Text style={styles.listbuttonText}>HEALTHY</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listButton} onPress={()=> console.log("button pressed")}>
                <Text style={styles.listbuttonText}>MAIN DISHES</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listButton} onPress={()=> console.log("button pressed")}>
                <Text style={styles.listbuttonText}>QUICK & EASY</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listButton} onPress={()=> console.log("button pressed")}>
                <Text style={styles.listbuttonText}>DESSERTS</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listButton} onPress={()=> console.log("button pressed")}>
                <Text style={styles.listbuttonText}>MISC.</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.zbuttonContainer}>
          <TouchableOpacity style={styles.mainLeftButton} onPress={()=> console.log("button pressed")}>
                <Text style={styles.buttonText}>ADD TAB</Text>
              </TouchableOpacity>
             <TouchableOpacity style={styles.mainRightButton} onPress={()=> console.log("button pressed")}>
                <Text style={styles.buttonText}>ADD RECIPE</Text>
              </TouchableOpacity>
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
    alignContent:'center',
    position:'relative',
  },
  mainContainer: {
    marginTop:30,
    width:'100%',
    height:'90%', 
    positon:'absolute',
    backgroundColor:'#dcc7b4',
    zIndex:0,
    display:'flex',
    flexDirection:'column',
  },
  searchBar: {
    width:'75%',
    padding:8,
    backgroundColor:'white',
    borderRadius:20,
    height:'auto',
    marginLeft:50,
    marginTop:20,
  },
  mainRightButton: {
    width:100,
    height:40,
    textAlign:'center',
    backgroundColor:'#e5e5e5',
    borderRadius:10,
    marginTop:-450,
    paddingTop:15,
  },
  mainLeftButton: {
    width:100,
    height:40,
    textAlign:'center',
    backgroundColor:'#e5e5e5',
    borderRadius:10,
    paddingTop:15,
  },
  buttonContainer: {
    marginTop:30,
    display:'flex',
    flexDirection:'column',
    width:'80%',
    height:'70%',
    alignSelf:'center',
    justifyContent:'space-around',
    backgroundColor:'#f9efe0',
    zIndex:1,
  },
  buttonText: {
    color:'#383838',
    textAlign:'center',
    fontSize:12,
    fontFamily:'spartan',
    letterSpacing:1,
  },
  recipeHead: {
    width:'80%',
    height:'auto',
    padding:10,
    textAlign:'center',
    backgroundColor:'white',
    alignSelf:'center',
    marginTop:10,
  },
  recipeText: {
    fontSize:18,
    fontFamily:'spartan',
    color:'black',
    letterSpacing:1,
    textAlign:'center',
  },
  topbuttonContainer:{
    display:'flex',
    flexDirection:'column',
    width:'90%',
    height:'50%',
    justifyContent:'space-around',
    alignSelf:'center'
  },
  listButton: {
    width:'90%',
    height:'80%',
    alignText:'left',
    justifyContent:'space-between',
    marginBottom:5,
    borderBottomWidth:1,
    borderBottomColor:'#bc855c',
  },
  listbuttonText: {
    color:'black',
    fontFamily:'spartan',
    letterSpacing:2,
    fontSize:18,
  },
  zbuttonContainer: {
    display:'flex',
    flexDirection:'row',
    width:'90%',
    height:'100%',
    zIndex:2,
    alignSelf:'center',
    justifyContent:'space-between',
  }
})