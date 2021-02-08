import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
// import '../assets/css/selfcare.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import Event from '../assets/images/Event.png';
import List from '../assets/images/jam_task-list.png';
import Paint from '../assets/images/bx_bx-paint.png';
import Mic from '../assets/images/ic_outline-keyboard-voice.png';
import Picture from '../assets/images/jam_picture.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderBackground } from '@react-navigation/stack';


export default function DumpDraw ({navigation}) {
  return (
    <View style={styles.bigContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.headMain}>
          <Text style={styles.headText}>FOCUS</Text>
          <View style={styles.labelBox}>
            <View style={styles.innerLabel}></View>
          </View>
        </View>
        <View style={styles.drawContainer}>
        </View>
        <TouchableOpacity style={styles.mainButton}>
          <Text style={styles.mainText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  bigContainer: {
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    paddingTop:30,
  },
  mainContainer: {
    backgroundColor:'#e5e5e5',
    width:'90%',
    height:'100%',
    alignSelf:'center',
    justifyContent:'space-between',
  },
  headMain: {
    width:'100%',
    height:'15%',
    display:'flex',
    flexDirection:'column',
    alignSelf:'center',
    justifyContent:'space-around'
  },
  headText: {
    color:'black',
    fontFamily:'times new roman',
    fontSize:14,
    letterSpacing:1,
    textAlign:'center',
    lineHeight:30,
  },
  labelBox: {
    backgroundColor:"white",
    width:'90%',
    height:'60%',
    alignSelf:'center',
  },
  innerLabel: {
    borderWidth:1,
    borderColor:'gray',
    width:'95%',
    height:'95%',
    alignSelf:"center",
  },
  drawContainer:{
    width:'90%',
    height:'60%',
    backgroundColor:'white',
    alignSelf:"center",
  },
  mainButton: {
    width:70,
    height:40,
    padding:15,
    backgroundColor:'white',
    borderRadius:10,
    alignSelf:'flex-end',
    textAlign:'center',
    margin:10,
  },
  mainText: {
    color:'black',
    fontSize:12,
    fontFamily:'spartan',
    letterSpacing:1,
  }
});