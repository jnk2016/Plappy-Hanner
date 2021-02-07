import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import Protect from '../assets/images/bi_shield.png';
import Heart from '../assets/images/ion_heart-sharp.png';
import Polygon from '../assets/images/Polygon 4.png';
import None from '../assets/images/ion_heart-dislike-outline.png';
import High from '../assets/images/emojione-monotone_beating-heart.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import LinearGradient from '../assets/features/LinearGradient';

export default function SymptomIntimacy ({navigation}) {

  return (
    <View style={styles.bigContainer}>
      <Text style={styles.headText}>INTIMACY</Text>
      <View style={styles.smallContainer}>
        <View style={styles.topRow}>
          <TouchableOpacity style={styles.buttonContainer}>
            <View style={styles.buttonContent}>
              <Image
              source={Protect}
              style={{width:70,height:70,tintColor:'#dda7a7', alignSelf:'center'}}
              />
              <Text style={styles.buttonText}>PROTECTED</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <View style={styles.buttonContent}>
              <Image
              source={Heart}
              style={{width:70,height:70,tintColor:'#dda7a7', alignSelf:'center'}}
              />
              <Text style={styles.buttonText}>PROTECTED</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomRow}>
          <TouchableOpacity style={styles.buttonContainer}>
            <View style={styles.buttonContent}>
              <Image
              source={None}
              style={{width:70,height:70,tintColor:'#dda7a7', alignSelf:'center'}}
              />
              <Text style={styles.buttonText}>NONE</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <View style={styles.buttonContent}>
              <Image
              source={High}
              style={{width:70,height:70,tintColor:'#dda7a7', alignSelf:'center'}}
              />
              <Text style={styles.buttonText}>HIGH SEX DRIVE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.mainButton}>
        <Text style={styles.mainbuttonText}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create ({
  bigContainer: {
    width:'100%',
    height:'100%',
    backgroundColor:'#dda7a7',
  },
  smallContainer: {
    marginTop:50,
    width:'95%',
    height:'50%',
    alignSelf:'center',
    justifyContent:'space-between',
    display:'flex',
    flexDirection:'column',
  },
  headText: {
    color:'white',
    fontSize:18,
    letterSpacing:1,
    fontFamily:'spartan',
    textAlign:'center',
    alignSelf:"center",
    fontWeight:'600',
    marginTop:50,
  },
  topRow: {
    width:'90%',
    height:'50%',
    display:'flex',
    flexDirection:'row',
    alignSelf:"center",
    justifyContent:"space-between",
  },
  bottomRow: {
    width:'90%',
    height:'50%',
    display:'flex',
    flexDirection:'row',
    alignSelf:"center",
    justifyContent:"space-between",
  },
  buttonContainer: {
    width:150,
    height:150,
    borderRadius:10,
    backgroundColor:'white',
    alignContent:'center',
    padding:10,
    textAlign:'center',
  },
  buttonContent: {
    display:"flex",
    flexDirection:'column',
    width:'100%',
    height:'90%',
    alignSelf:'center',
    justifyContent:'space-between',
  },
  buttonText: {
    color:'black',
    letterSpacing:1,
    fontSize:12,
    fontWeight:'600',
    fontFamily:"spartan",
  },
  mainButton: {
    width:70,
    height:40,
    padding:15,
    backgroundColor:'#e5e5e5',
    borderRadius:10,
    alignSelf:"center",
    textAlign:'center',
    bottom:0,
  },
  mainbuttonText: {
    color:'black',
    fontSize:12,
    fontFamily:'spartan',
    letterSpacing:1,
  }
});