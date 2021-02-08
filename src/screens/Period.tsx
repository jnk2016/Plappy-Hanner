import React, {Component, useState} from 'react';
import {Button, Image, ScrollView,StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
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
      <ScrollView style={styles.bigContainer}>
        {/* <View style={styles.smallContainer}> */}
          <Text style={styles.headerText}>CURRENT CYCLE</Text>
          <View style={styles.mainLeft}></View>
          
            <View style={styles.cycleCircle}>
              <View style={styles.innerCircle}>
                  <Text style={{...styles.cycleText, marginTop:'35%'}}>CYCLE DAY</Text>
                  <Text style={{...styles.cycleText,fontSize:48}}>24</Text>
                <TouchableOpacity style={styles.mainButton} onPress={()=>navigation.navigate('PeriodCalendar')}>
                  <Text style={styles.buttonText}>View calendar</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.mainRight}>
              <Text style={styles.monthVertical}>JANUARY</Text>
            </View>
            <View style={styles.symptomContainer}>
              <View style={styles.innerSymptom}>
                <TouchableOpacity style={[styles.circleButton,{marginLeft:120, marginTop:20}]} onPress={()=>navigation.navigate('PeriodSymptoms')}>
                  <Text style={styles.circleText}>ADD SYMPTOMS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.circleButton,{marginTop:-20, marginLeft:30}]} onPress={()=> console.log("button pressed")}>
                  <Text style={[styles.circleText,{paddingTop:40}]}>EDIT CYCLE</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.periodContainer}>
              <View style={{height:145, width:145, backgroundColor: '#dda7a7', borderRadius:20,}}>
              <View style={styles.innerPeriod}>
                  <Text style={styles.periodText}>period in: </Text>
                  <Text style={{...styles.periodText, fontFamily:'Spartan-SemiBold', fontSize:36, color:'white'}}>5 DAYS</Text>
              </View>
              </View>
            <TouchableOpacity style={styles.periodButton} onPress={()=>navigation.navigate('PeriodLog')}>
              <Text style={styles.buttonText}>Log Period</Text>
            </TouchableOpacity>
          </View> 
        {/* </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create ({
  bigContainer: {
    backgroundColor:'white',
    alignContent:'center',
    width:'100%',
    height:'100%',
    paddingBottom:'20%',
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
    fontFamily:'Spartan-SemiBold',
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
    justifyContent:'center',
  },
  cycleText: {
    color:'#727272',
    fontSize:24,
    letterSpacing:2,
    textAlign:'center',
    display:'flex',
    flexDirection:'column',
    fontWeight:'600',
    fontFamily:'Spartan-SemiBold',
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
    fontFamily:'Spartan-Regular',
    textAlign:'center',
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
    fontFamily:'Spartan-SemiBold',
    textAlign:'center',
  },
  periodContainer: {
    alignSelf:'flex-end',
    zIndex:2,
    marginTop:-80,
    marginRight:20,
    paddingBottom:'5%'
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
    color:'black',
    fontSize:18,
    textAlign:'center',
    fontFamily:'Spartan-Regular',
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
    // marginLeft:20,
    marginTop:60,
    position:'absolute',
    alignSelf:'flex-end',
    textAlign:'center',
  },
  monthVertical: {
    // display:'flex',
    flexDirection:'column',
    width:25,
    color:'#727272',
    fontSize:24,
    lineHeight:35,
    fontFamily:'Spartan-SemiBold',
    alignSelf:'center'
  }
});



{/* <TouchableOpacity style={styles.symptomButton} onPress={()=>navigation.navigate('PeriodSymptoms')}>
                <Text style={styles.buttonText}>Log symptoms</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.lowerContainer}>
              <TouchableOpacity style={styles.calendarButton} onPress={()=>navigation.navigate('PeriodCalendar')}>
                <Text style={styles.buttonText}>View Calendar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.lowerContainer}>
              <TouchableOpacity style={styles.periodButton} onPress={()=>navigation.navigate('PeriodLog')}>
                <Text style={styles.buttonText}>Log  period </Text>
              </TouchableOpacity> */}