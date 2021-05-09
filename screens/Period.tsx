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
import Event from '../assets/images/EVENT.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import LinearGradient from '../assets/features/LinearGradient';
import { PieChart } from 'react-minimal-pie-chart';

export default function Period ({navigation}) {

  return (
    <View style={styles.bigContainer}>
       <View style={styles.smallContainer}>
         <View style={styles.topContainer}>
           <View style={styles.cycledayContainer}>
            <Text style={styles.cycledayText}>
                <Text>CYCLE DAY</Text>
                <Text>24</Text>
              </Text>
           </View>
            <TouchableOpacity style={styles.mainButton} onPress={()=>navigation.navigate('PeriodCalendar', {screen:'PeriodCalendar'})}>
            <Text style={styles.buttonText}>VIEW CALENDAR</Text>
            </TouchableOpacity>
            <View style={styles.statContent}>
            <Text style={styles.headText}>MY STATS</Text>
            <View style={styles.averageContent}>
              <View style={styles.averageLine}>
                <Text style={styles.averagecycleText}>
                  <Text>AVG. CYCLE LENGTH</Text>
                  <Text style={{fontSize:18}}>28 DAYS</Text>
                </Text>
              </View>
              <Text style={styles.averagecycleText}>
                <Text>AVG. PERIOD LENGTH</Text>
                <Text style={{fontSize:18}}>5 DAYS</Text>
              </Text>
              </View>
            </View>
         </View>
        <View style={styles.bottomContainer}>
          <View style={styles.periodContainer}>
            <Text style={styles.periodText}>
              <Text style={{color:'#dda7a7', fontSize:24}}>4</Text>
              <Text>DAYS TO PERIOD</Text>
            </Text>
            <TouchableOpacity style={styles.mainButton}>
              <Text style={styles.buttonText}>LOG PERIOD</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.symptomContainer}>
            <Text style={styles.symptomText}>LOG MY SYMPTOMS</Text>
            <TouchableOpacity style={styles.symptomAdd}>
              <Image
              source={Event}
              style={{width:30,height:30,tintColor:'#dda7a7', alignSelf:'center'}}
              />
            </TouchableOpacity>
          </View>
        </View>
              </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  bigContainer: {
    backgroundColor:'#dda7a7',
    alignContent:'center',
    width:'100%',
    height:'100%',
  },
  smallContainer:{
    display:'flex',
    flexDirection:'column',
    width:'100%',
    height:'95%',
    alignSelf:'center'
  },
  topContainer:{
    backgroundColor:'#dda7a7',
    width:'100%',
    height:'75%',
    borderBottomRadius:30,
    justifyItems:'center',
    display:'flex',
    flexDirection:'column'
  },
  cycledayContainer:{
    width:250,
    height:250,
    backgroundColor:'#fffef5',
    borderRadius:125,
    alignSelf:'center',
  },
  cycledayText:{
    color:'#383838',
    fontSize:18,
    fontFamily:'spartan',
    alignSelf:"center",
    paddingTop:80,
  },
  mainButton:{
    width:130,
    height:35,
    padding:10,
    borderRadius:10,
    backgroundColor:'white',
    alignSelf:'center',
  },
  buttonText:{
    alignSelf:'center',
    color:'#383838',
    fontSize:12,
    fontFamily:'spartan',
  },
  statContent:{
    display:'flex',
    flexDirection:'column',
    alignSelf:'center',
    width:'95%',
    height:'auto',
  },
  headText:{
    fontSize:18,
    color:'#383838',
    fontFamily:'spartan',
    textAlign:'left',
  },
  averageContent:{
    display:'flex',
    flexDirection:'column',
    width:'100%',
    height:'auto',
  },
  averageLine:{
    borderBottomColor:'white',
    borderBottomWidth:1,
    width:'100%',
    height:'auto',
  },
  averagecycleText:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'auto',
    color:'#383838',
    fontFamily:'spartan',
    fontSize:14,
  },
  bottomContainer:{
    display:'flex',
    flexDirection:'row',
    alignSelf:'center',
    width:'95%',
    height:'25%',
  },
  periodContainer:{
    backgroundColor:'#e5e5e5',
    width:170,
    height:170,
    borderRadius:10,
  },
  periodText:{
    color:'#383838',
    fontSize:14,
    fontFamily:'spartan',
    textAlign:'left',
    display:'flex',
    flexDirection:'column',
    height:'50%',
  },
  symptomContainer:{
    backgroundColor:'#e5e5e5',
    width:170,
    height:170,
    borderRadius:10,
    display:'flex',
    flexDirection:'column'
  },
  symptomText:{
    color:'#383838',
    fontSize:14,
    textAlign:'center',
    fontFamily:'spartan',
  },
  symptomAdd:{
    alignSelf:'center',
    justifyContent:'flex-end',
  }
});
