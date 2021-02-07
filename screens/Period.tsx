import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/ion_heart-sharp.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import Protect from '../assets/images/bi_shield.png';
import Polygon from '../assets/images/Polygon 4.png';
import Heavy from '../assets/images/Vectorperiod.png';
import Sign from '../assets/images/Vectorperiod-1.png';
import Circle from '../assets/images/bx_bx-loader-circleperiod.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import LinearGradient from '../assets/features/LinearGradient';

export default function Period ({navigation}) {

  return (
      <View style={styles.bigContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.containerAlign}>
          <View style={styles.topContainer}>
            <Text style={styles.headerText}>CURRENT CYCLE</Text>
            <View style={styles.topCircle}>
              <Text style={styles.cycleText}>
                <Text>CYCLE DAY</Text>
                <Text>24</Text>
                </Text>
            </View>
            <TouchableOpacity style={styles.mainButton}onPress={()=> navigation.navigate('PeriodCalendar', {screen: 'PeriodCalendar'})}>
              <Text style={styles.buttonText}>VIEW CALENDAR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.middleContainer}>
              <View style={styles.periodCircles}>
                <Text style={styles.periodText}>
                  <Text style={{fontWeight:'600'}}>5 DAYS</Text>
                  <Text>UNTIL PERIOD</Text>
                </Text>
              </View>
          </View>  
          <View style={styles.bottomContent}>
                <TouchableOpacity style={styles.mainButton} onPress={()=>navigation.navigate('PeriodLog', {screen: 'PeriodLog'})}>
                  <Text style={styles.buttonText}>LOG PERIOD</Text>
                </TouchableOpacity>
            <View style={styles.buttonContainer}>
              <View style={styles.symptomContainer}>
                <TouchableOpacity style={styles.symptomCircle} onPress={()=>navigation.navigate('SymptomIntimacy', {screen:'SymptomIntimacy'})}>
                  <Image
                  source={Heart}
                  style={{width:20, height:20, alignSelf:'center', tintColor:'#727272',marginTop:5,}}
                  />
                </TouchableOpacity>
                <Text style={styles.symptomText}>INTIMACY</Text>
              </View>
              <View style={styles.symptomContainer}>
                <TouchableOpacity style={styles.symptomCircle} onPress={()=>navigation.navigate('SymptomFlow', {screen:'SymptomFlow'})}>
                  <Image
                  source={Heavy}
                  style={{width:20, height:25, alignSelf:'center'}}
                  />
                </TouchableOpacity>
                <Text style={styles.symptomText}>FLOW</Text>
              </View>
              <View style={styles.symptomContainer}>
                <TouchableOpacity style={styles.symptomCircle} onPress={()=>navigation.navigate('SymptomDischarge', {screen:'SymptomDischarge'})}>
                  <Image
                  source={Circle}
                  style={{width:30, height:30, alignSelf:'center'}}
                  />
                </TouchableOpacity>
                <Text style={styles.symptomText}>DISCHARGE</Text>
              </View>
              <View style={styles.symptomContainer}>
                <TouchableOpacity style={styles.symptomCircle} onPress={()=>navigation.navigate('SymptomBody', {screen:'SymptomBody'})}>
                  <Image
                  source={Sign}
                  style={{width:15, height:25, alignSelf:'center',marginTop:5,}}
                  />
                </TouchableOpacity>
                <Text style={styles.symptomText}>BODY</Text>
              </View>
            </View>
            <TouchableOpacity style={[styles.mainButton,{width:180}]} onPress={()=>navigation.navigate('PeriodNote', {screen:'PeriodNote'})}>
              <Text style={styles.buttonText}>LOG MY SYMPTOMS</Text>
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
    width:'100%',
    height:'100%',
  },
  mainContainer: {
    width:'95%',
    height:'95%',
    fontFamily:'spartan',
    justifyContent:'space-around',
    alignSelf:"center",
    borderWidth:3,
    borderColor:'#dda7a7'
  },
  containerAlign:{
    width:'100%',
    height:'100%',
    justifyContent:'space-between',
    alignSelf:'center',
    display:'flex',
    flexDirection:'column',
    position:'relative',
  },
  topContainer: {
    backgroundColor:'#dda7a7',
    width:'100%',
    height:'35%',
    display:'flex',
    flexDirection:'column',
    alignSelf:'center',
    justifyContent:'space-between',
    alignContent:'center',
  },
  headerText: {
    width:'100%',
    height:'10%',
    color:'white',
    fontWeight:'600',
    fontSize:18,
    letterSpacing:0.5,
    textAlign:'center',
    marginTop:15,
    fontFamily:"spartan",
  },
  topCircle: {
    backgroundColor:'white',
    width:150,
    height:150,
    borderRadius:75,
    textAlign:'center',
    alignSelf:"center",
    marginTop:10,
  },
  cycleText: {
    color:'#727272',
    fontSize:18,
    fontWeight:'600',
    fontFamily:'spartan',
    lineHeight:25,
    marginTop:50,
    display:'flex',
    flexDirection:'column',
  },
  mainButton: {
    width:130,
    height:40,
    backgroundColor:'#e5e5e5',
    borderRadius:10,
    padding:15,
    textAlign:'center',
    alignSelf:'center',
    marginTop:20,
    zIndex:1,
  },
  buttonText: {
    color:'black',
    fontSize:10,
    fontFamily:'spartan',
  },
  middleContainer: {
    width:'100%',
    height:'30%',
    display:'flex',
    flexDirection:'column',
    alignSelf:"center",
    justifyContent:'space-around',
  },
  periodCircles: {
    backgroundColor:'#dda7a7',
    width:150,
    height:150,
    borderRadius:75,
    textAlign:"center",
    alignSelf:"center",
  },
  periodText: {
    color:'white',
    fontSize:18,
    fontFamily:'spartan',
    lineHeight:25,
    display:'flex',
    flexDirection:'column',
    marginTop:50,
  },
  bottomContent:{
    backgroundColor:'#dda7a7',
    width:'100%',
    height:'30%',
    display:'flex',
    flexDirection:'column',
    alignSelf:'baseline',
    justifyContent:'space-around',
  },
  buttonContainer:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'70%',
    alignSelf:'center',
    justifyContent:'space-between',
  },
  symptomContainer: {
    display:'flex',
    flexDirection:'column',
    width:'25%',
    height:'50%',
    alignSelf:'center',
    justifyContent:'space-between',
    alignItems:'center',
    alignContent:'center',
  },
  symptomCircle: {
    backgroundColor:'white',
    width:40,
    height:40,
    borderRadius:20,
    alignContent:'center',
    padding:5,
  },
  symptomText: {
    color:'black',
    fontSize:12,
    fontWeight:'500',
    fontFamily:'spartan',
    textAlign:'center',
  },
});
