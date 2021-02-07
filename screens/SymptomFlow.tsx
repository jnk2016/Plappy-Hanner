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

export default function SymptomFlow ({navigation}) {

  return (
    <View style={styles.bigContainer}>
      <Text style={styles.headText}>FLOW</Text>
      <View style={styles.smallContainer}>
              <TouchableOpacity style={[styles.buttonContainer,{backgroundColor:'#efe6e9'}]}>
                  <Text style={styles.buttonText}>SPOTTING</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.buttonContainer,{backgroundColor:'#FFE5EF'}]}>
                  <Text style={styles.buttonText}>LIGHT</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.buttonContainer,{backgroundColor:'#FF9797'}]}>
                  <Text style={styles.buttonText}>REGULAR</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.buttonContainer,{backgroundColor:'#CF6363'}]}>
                  <Text style={styles.buttonText}>HEAVY</Text>
              </TouchableOpacity>
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
        height:'65%',
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
        marginTop:30,
    },
    buttonContainer: {
        width:150,
        height:90,
        textAlign:'center',
        alignSelf:'center',
    },
    buttonText: {
        color:'black',
        fontSize:14,
        fontFamily:'spartan',
        letterSpacing:1,
        marginTop:45,
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
        marginTop:20,
      },
      mainbuttonText: {
        color:'black',
        fontSize:12,
        fontFamily:'spartan',
        letterSpacing:1,
      }
});
