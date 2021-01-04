import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import Protect from '../assets/images/bi_shield.png';
import Polygon from '../assets/images/Polygon 4.png';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Period ({navigation}) {

  return (
    <View>
      <View style={styles.bigContainer}>
        <View style={styles.mainContainer}>
          <Text style={styles.header}>CURRENT CYCLE</Text>
          <View style={styles.cycleContainer}>
              <View style={styles.cycleTop}>
                <Text style={styles.dateText}>Friday, Jan 8 2021</Text>
                <Text style={styles.cycleText}>CYCLE DAY 24</Text>
              </View>
              <View style={styles.cycleBottom}>
                <Text style={styles.periodText}>PERIOD IN:</Text> 
                <Text style={styles.periodDayText}>5 DAYS</Text> 
              </View>
        </View>
        <View style={styles.todayContainer}>
          <Text style={styles.lowerHeader}>TODAY'S SYMPTOMS</Text>
          <View style={styles.symptomContainer}>
            <Text style={styles.symptomHeadText}>creamy</Text>
            <View style={styles.circleContainer}>
              <View style={styles.protectContainer}>
                <Image
                source={{uri:Protect}}
                style={{width:35,height:35}}
                />
              </View>
              <View style={styles.tenderContainer}>
                <Image
                source={{uri:Polygon}}
                style={{width:35,height:35}}
                />
              </View>
              </View>
          </View>
        </View>
        </View>
        <View style={styles.insightContainer}>
          <Text style={styles.lowerHeader}>INSIGHTS</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.lowerContainer}>
              <TouchableOpacity style={styles.symptomButton} onPress={()=>navigation.navigate('PeriodSymptoms')}>
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
                <Text style={styles.buttonText}>Log period</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  bigContainer: {
    backgroundColor:'white',
    alignContent:'center',
  },
  mainContainer: {
    backgroundColor:"#ffdede",
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'auto',
    borderRadius: 30,
    marginTop:20,
    paddingTop:60,
  },
  header: {
    fontSize:20,
    letterSpacing:1,
    color:'black',
    fontFamily:'spartan',
    textAlign:'center'
  },
  cycleContainer: {
    margin:10,
    display:'flex',
    flexDirection:'column',
  },
  cycleTop: {
    backgroundColor:'#e5e5e5',
    width:250,
    height:125,
    borderTopLeftRadius:125,
    borderTopRightRadius:125,
    textAlign:'center',
    padding:20,
  },
  dateText: {
    paddingTop:10,
    fontSize:12,
    color:'rgba(56,56,56,0.8)',
    fontFamily:'spartan',
  },
  cycleText: {
    fontSize:28,
    fontWeight:'bold',
    color:'rgba(56,56,56,0.8)',
    letterSpacing:1,
    paddingTop:30,
  },
  cycleBottom: {
    backgroundColor:'#FF9797',
    width:250,
    height:125,
    borderBottomLeftRadius:125,
    borderBottomRightRadius:125,
    textAlign:'center',
    padding:20,
  },
  periodText: {
    color:'white',
    fontSize:18,
    fontFamily:'spartan',
    letterSpacing:1,
  },
  periodDayText: {
    fontSize:30,
    fontWeight:"600",
    lineHeight:25,
    color:'white',
    letterSpacing:1,
  },
  todayContainer: {
    width:'100%',
    height:'auto',
    display:'flex',
    flexDirection:'column',
  },
  lowerHeader: {
    marginLeft:10,
    padding:5,
    fontSize:18,
    fontFamily:'spartan',
    letterSpacing:1,
  },
  symptomContainer: {
    backgroundColor:'white',
    width:'95%',
    height:'auto',
    padding:10,
    borderRadius:20,
    flexDirection:'column',
    marginLeft:10,
    marginBottom:10,
  },
  symptomHeadText: {
    fontFamily:'spartan',
    fontSize:14
  },
  circleContainer: {
    flexDirection:'row',
    padding:10,
  },
  protectContainer: {
    backgroundColor:'#ffe5ef',
    width:50,
    height:50,
    borderRadius:25,
    padding:8,
  },
  tenderContainer: {
    backgroundColor:'#fff9c3',
    width:50,
    height:50,
    borderRadius:25,
    padding:8,
  },
  insightContainer: {
    backgroundColor:'white',
    width:'100%',
    height:'auto',
  },
  buttonContainer: {
    width:'100%',
    margin:5,
    display:'flex',
    flexDirection:'row'
  },
  lowerContainer: {
    flexDirection:'row',
  },
  symptomButton: {
    backgroundColor:'#ffe5ef',
    borderRadius:20,
    width:'80%',
    height:'auto',
    padding:10,
  },
  calendarButton: {
    backgroundColor:'#c8d8f9',
    borderRadius:20,
    width:'80%',
    height:'auto',
    padding:10,
  },
  periodButton: {
    backgroundColor:'#ccded6',
    borderRadius:20,
    width:'80%',
    height:'auto',
    padding:10,
  },
  buttonText: {
    fontSize:14,
    fontFamily:'Spartan',
    textAlign:'center'
  }
});
