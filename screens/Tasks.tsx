import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert, TouchableOpacity} from 'react-native';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import Home from '../assets/images/clarity_home-line.png';
import Work from '../assets/images/clarity_work-line.png';
import Person from '../assets/images/clarity_person-line.png';
import School from '../assets/images/clarity_school-line.png';
import Event from '../assets/images/EVENT.png';

export default function Tasks ({navigation}) {
  return (
    <View style={styles.bigContainer}>
      <View style={styles.smallContainer}>
          <View style={styles.mainContainer}>
          <Text style={styles.taskHeader}>TODAY</Text>
            <View style={styles.mainList}>
              <View style={styles.buttonList}>
                <TouchableOpacity style={styles.rightcircleButton} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.rightButton} onPress={()=> console.log("button pressed")}>
                    <Text style={styles.rightText}>make reservations for dinner with kathie</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.buttonList}>
                <TouchableOpacity style={styles.rightcircleButton} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.rightButton} onPress={()=> console.log("button pressed")}>
                    <Text style={styles.rightText}>do laundry</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.buttonList}>
                <TouchableOpacity style={styles.rightcircleButton} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.rightButton} onPress={()=> console.log("button pressed")}>
                    <Text style={styles.rightText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.buttonList}>
                <TouchableOpacity style={styles.rightcircleButton} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.rightButton} onPress={()=> console.log("button pressed")}>
                    <Text style={styles.rightText}>Lorem ipsum dolor, sit amet </Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.buttonList}>
                <TouchableOpacity style={styles.rightcircleButton} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.rightButton} onPress={()=> console.log("button pressed")}>
                    <Text style={styles.rightText}>Lorem ipsum dolor sit amet.</Text>
                  </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.buttonContainer}>
            <View style={styles.buttonList}>
                <TouchableOpacity style={styles.rightcircleButton} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.rightButton} onPress={()=> console.log("button pressed")}>
                    <Text style={styles.rightText}>Lorem ipsum dolor sit amet.</Text>
                  </TouchableOpacity>
              </View>
            <Text style={styles.bottomHeader}>completed</Text>
            </View>
            </View>
          </View>
          
        </View>
  );
}

const styles = StyleSheet.create ({
  bigContainer: {
    widht:'100%',
    height:'100%',
    alignContent:'center',
    fontFamily:'spartan',
    backgroundColor:'white',
  },
  smallContainer: {
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    marginTop:30,
    position:'relative'
  },
  taskHeader: {
    color:'black',
    fontSize:20,
    textAlign:'center',
    marginTop:20,
    letterSpacing:1,
    fontFamily:'spartan'
  },
  mainContainer: {
    marginTop:30,
    width:'70%',
    height:'70%',
    display:'flex',
    flexDirection:'column',
    fontFamily:'spartan',
    backgroundColor:'#f2c2b8',
    alignSelf:'center',
    borderRadius:10,
    zIndex:1,
  },
  mainList: {
    width:'100%',
    height:'80%',
    flexDirection:'column',
    display:'flex',
    borderWidth:1,
    borderColor:'black',
    alignSelf:'center',
    justifyContent:'space-around',
    marginLeft:-80,
    marginTop:20,
  },
  buttonList: {
    width:'98%',
    height:'auto',
    flexDirection:'row',
    display:'flex',
    alignSelf:'center',
    justifyContent:'space-between',
  },
  rightcircleButton: {
    width:15,
    height:15,
    borderWidth:1,
    color:'black',
    borderRadius:7,
    margin:10,
  },
  rightButton: {
    backgroundColor:'white',
    width:180,
    height:'auto',
    padding:10,
  },
  rightText: {
    textAlign:'left',
    color:'black',
    fontSize:12,
    fontFamily:'spartan',
  },
  bottomContainer: {
    backgroundColor:'#fffbdb',
    width:'70%',
    height:'40%',
    alignSelf:'flex-end',
    bottom:0,
    borderRadius:10,
    alignContent:'center',
    zIndex:0,
    position:'absolute',
    marginTop:-100,
  },
  buttonContainer: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    width:'90%',
    height:'auto',
    alignSelf:'flex-end',
    marginTop:150,
  },
  bottomHeader: {
    color:'black',
    fontFamily:'spartan',
    fontSize:16,
    textAlign:'right',
    marginRight:20,
    marginTop:20,
  }
});