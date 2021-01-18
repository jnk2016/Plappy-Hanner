import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import Protect from '../assets/images/bi_shield.png';
import Polygon from '../assets/images/Polygon 4.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default function Period ({navigation}) {

  return (
      <View style={styles.bigContainer}>
        <View style={styles.smallContainer}>
          <Text style={styles.headerText}>CURRENT CYCLE</Text>
          <View style={styles.mainLeft}></View>
          
            <View style={styles.cycleCircle}>
              <View style={styles.innerCircle}>
                <Text style={styles.cycleText}>
                  <Text>CYCLE DAY</Text>
                  <Text style={{fontSize:48}}>24</Text>
                </Text>
                <TouchableOpacity style={styles.mainButton} >
                  <Text style={styles.buttonText}>View calendar</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.mainRight}>
              <Text style={styles.monthVertical}>
                <Text>J</Text>
                <Text>A</Text>
                <Text>N</Text>
                <Text>U</Text>
                <Text>A</Text>
                <Text>R</Text>
                <Text>Y</Text>
              </Text>
            </View>
            <View style={styles.symptomContainer}>
              <View style={styles.innerSymptom}>
                <TouchableOpacity style={[styles.circleButton,{marginLeft:120, marginTop:20}]} onPress={()=>navigation.navigate('Period', {screen: 'PeriodSymptoms'})}>
                  <Text style={styles.circleText}>ADD SYMPTOMS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.circleButton,{marginTop:-20, marginLeft:30}]} onPress={()=> console.log("button pressed")}>
                  <Text style={[styles.circleText,{paddingTop:40}]}>EDIT CYCLE</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.periodContainer}>
              <View style={styles.innerPeriod}>
                <Text style={styles.periodText}>
                  <Text>period in:</Text>
                  <Text style={{fontWeight:'600', fontSize:36, color:'white'}}>5 DAYS</Text>
                </Text>
              </View>
            <TouchableOpacity style={styles.periodButton} onPress={()=> console.log("button pressed")}>
              <Text style={styles.buttonText}>Log Period</Text>
            </TouchableOpacity>
          </View> 
        </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  bigContainer: {
    backgroundColor:'white',
    alignContent:'center',
    width:'100%',
    height:'100%',
  },
  smallContainer: {
    width:'100%',
    height:'100%',
    alignSelf:'center',
    position:'relative'
  },
  headerText: {
    fontSize:20,
    color:'black',
    letterSpacing:1,
    textAlign:'right',
    fontFamily:'spartan',
    fontWeight:'600',
    margin:20,
  },
  mainLeft: {
    display:'flex',
    flexDirection:'column',
    width:'70%',
    height:'100%',
    backgroundColor:'rgba(140,150,171,0.4)',
    alignSelf:'flex-end',
    zIndex:0,
    position:'absolute',
  },
  cycleCircle: {
    backgroundColor:'#ffdede',
    width:250,
    height:250,
    borderRadius:125,
    alignItems:'center',
    marginLeft:10,
    marginTop:50,
    zIndex:1,
  },
  innerCircle: {
    borderColor:'black',
    borderWidth:1,
    width:250,
    height:250,
    borderRadius:125,
    textAlign:'center',
    marginTop:-30,
    marginLeft:50,
  },
  cycleText: {
    color:'#727272',
    fontSize:24,
    letterSpacing:2,
    lineHeight:50,
    textAlign:'center',
    display:'flex',
    flexDirection:'column',
    fontWeight:'600',
    fontFamily:'spartan',
    paddingTop:80,
  },
  mainButton: {
    width:115,
    height:'auto',
    backgroundColor:'#c4c4c4',
    padding:10,
    borderRadius:10,
    textAlign:'center',
    marginLeft:80,
    marginTop:40,
  },
  buttonText: {
    color:'black',
    fontSize:12,
    fontFamily:'spartan',
  },
  symptomContainer: {
    borderColor:'#8b8b8b',
    width:300,
    height:265,
    borderWidth:3,
    marginLeft:30,
    marginTop:-30,
  },
  innerSymptom: {
    width:245,
    height:210,
    backgroundColor:'#D7E0F1',
    marginTop:20,
    marginLeft:30,
  },
  circleButton: {
    width:100,
    height:100,
    borderRadius:50,
    backgroundColor:'#fffbdb',
    textAlign:'center',
  },
  circleText: {
    fontSize:14,
    color:'#727272',
    fontWeight:'600',
    lineHeight:25,
    paddingTop:20,
    fontFamily:'spartan',
  },
  periodContainer: {
    backgroundColor:'#dda7a7',
    width:145,
    height:145,
    borderRadius:20,
    alignSelf:'flex-end',
    zIndex:2,
    marginTop:-80,
    marginRight:20,
  },
  innerPeriod: {
    borderWidth:1,
    borderColor:'black',
    width:150,
    height:150,
    borderRadius:20,
    textAlign:'center',
    marginRight:40,
    padding:10,
  },
  periodText: {
    display:'flex',
    flexDirection:'column',
    width:130,
    height:150,
    color:'black',
    fontSize:18,
    fontFamily:'spartan',
    letterSpacing:1,
  },
  periodButton: {
    width:90,
    height:33,
    padding:10,
    borderRadius:10,
    marginTop:-20,
    backgroundColor:'#dcf0e7',
    textAlign:'center',
    alignSelf:'center',
    
  },
  mainRight: {
    width:'15%',
    height:'40%',
    borderColor:'#dda7a7',
    borderWidth:3,
    backgroundColor:'white',
    zIndex:0,
    margin:20,
    marginTop:60,
    position:'absolute',
    alignSelf:'flex-end',
    textAlign:'center',
  },
  monthVertical: {
    display:'flex',
    flexDirection:'column',
    color:'#727272',
    fontSize:24,
    lineHeight:35,
    fontWeight:"600",
  }
});
