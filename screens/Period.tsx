import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
// import '../assets/css/selfcare.css';
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
            <View style={styles.cycleCircle}>
              <View style={styles.cycleTop}>
                <Text style={styles.dateText}>Friday, Jan 8 2021</Text>
                <Text style={styles.cycleText}>CYCLE DAY 24</Text>
              </View>
              <View style={styles.cycleBottom}>
                <Text style={styles.periodText}>PERIOD IN:</Text> 
                <Text style={styles.periodDayText}>5 DAYS</Text> 
              </View>
          </View>
        </View>
        <View style={styles.todayContainer}>
          <Text style={styles.lowerHeader}>TODAY'S SYMPTOMS</Text>
          <View style={styles.symptomContainer}>
            <Text style={styles.symptomHeadText}>creamy</Text>
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
        <View style={styles.insightContainer}>
          <Text style={styles.lowerHeader}>INSIGHTS</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.symptomButton}>
              <Text style={styles.buttonText}>Log symptoms</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.calendarButton}>
              <Text style={styles.buttonText}>View Calendar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.periodButton}>
              <Text style={styles.buttonText}>Log period</Text>
            </TouchableOpacity>
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
    height:'100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop:20,
  },
  header: {
    fontSize:24,
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
    fontSize:30,
    fontWeight:'bold',
    color:'rgba(56,56,56,0.8)',
    letterSpacing:1,
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
  },
  periodDayText: {
    fontSize:30,
    fontWeight:"600",
    lineHeight:20,
    color:'white'
  }
});
