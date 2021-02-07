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

export default function PeriodNote ({navigation}) {

  return (
      <View style={styles.bigContainer}>
          <Text style={styles.headText}>
              <Text>FRIDAY JAN 8</Text>
              <Text>CYCLE DAY 24</Text>
          </Text>
          <View style={styles.smallContainer}>
              <View style={styles.whiteContainer}>
                  <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.symptomLog}>
                      <Text style={styles.symptomText}>
                          <Text>INTIMACY</Text>
                          <Text style={{color:'#dda7a7',fontSize:10,}}>PROTECTED, UNPROTECTED</Text>
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.symptomLog}>
                      <Text style={styles.symptomText}>
                          <Text>DISCHARGE</Text>
                          <Text style={{color:'#dda7a7',fontSize:10,}}>WHITE & YELLOW, CREAMY</Text>
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.symptomLog}>
                      <Text style={styles.symptomText}>
                          <Text>OTHER SYMPTOMS</Text>
                          <Text style={{color:'#dda7a7',fontSize:10,}}>CONSTIPATION, TENDER BREASTS, CRAVINGS</Text>
                      </Text>
                  </TouchableOpacity>
                  </View>
              </View>
              <View style={styles.noteContainer}>
                    <TouchableOpacity style={styles.noteButton}>
                    <Text style={styles.mainText}>ADD NOTE</Text>
                    </TouchableOpacity>
              </View>
          </View>
          <TouchableOpacity style={styles.mainButton}>
              <Text style={styles.mainText}>SAVE</Text>
          </TouchableOpacity>
      </View>
  )
  };

const styles = StyleSheet.create ({
    bigContainer: {
        backgroundColor:"#dda7a7",
        width:'100%',
        height:'100%',
    },
    headText: {
        color:'black',
        fontFamily:'spartan',
        fontSize:14,
        display:'flex',
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'space-between',
        width:'95%',
        marginTop:10,
    },
    smallContainer: {
        display:'flex',
        flexDirection:'column',
        width:'90%',
        height:'75%',
        alignSelf:'center',
        marginTop:30,
    },
    whiteContainer: {
        backgroundColor:'white',
        width:'90%',
        height:'70%',
        alignSelf:'center',
    },
    buttonContainer: {
        width:'100%',
        height:'50%',
        display:'flex',
        flexDirection:'column',
        alignSelf:'center',
        justifyContent:'space-between',
        marginTop:100,
    },
    symptomLog: {
        width:'90%',
        height:'100%',
        padding:5,
        textAlign:'left',
        borderBottomWidth:1,
        borderBottomColor:'gray',
        margin:10,
    },
    symptomText: {
        color:'black',
        fontSize:14,
        fontFamily:'spartan',
        display:'flex',
        flexDirection:'column',
        lineHeight:30,
    },
    noteContainer: {
        width:'100%',
        height:'15%',
        backgroundColor:'#727272',
        textAlign:'left',
    },
    noteButton: {
        width:100,
        height:'auto',
        backgroundColor:'#e5e5e5',
        padding:10,
        alignSelf:"center",
        borderRadius:10,
        marginTop:20,
    },
    mainButton: {
        width:70,
        height:40,
        padding:15,
        backgroundColor:'#e5e5e5',
        borderRadius:10,
        alignSelf:"center",
        textAlign:'center',
      },
      mainText: {
        color:'black',
        fontSize:12,
        fontFamily:'spartan',
        letterSpacing:1,
      }
});