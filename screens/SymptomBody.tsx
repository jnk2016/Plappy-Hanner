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

export default function SymptomBody ({navigation}) {

  return (
    <View style={styles.bigContainer}>
        <Text style={styles.headText}>OTHER SYMPTOMS</Text>
        <View style={styles.smallContainer}>
            <View style={styles.listSymptoms}>
                <View style={styles.symptomBox}>
                    <Text style={styles.symptomText}>CRAMPS</Text>
                    <TouchableOpacity style={styles.buttonCircle}></TouchableOpacity>
                </View>
                <View style={styles.symptomBox}>
                    <Text style={styles.symptomText}>TENDER BREASTS</Text>
                    <TouchableOpacity style={styles.buttonCircle}></TouchableOpacity>
                </View>
                <View style={styles.symptomBox}>
                    <Text style={styles.symptomText}>HEADACHE</Text>
                    <TouchableOpacity style={styles.buttonCircle}></TouchableOpacity>
                </View>
                <View style={styles.symptomBox}>
                    <Text style={styles.symptomText}>BLOATING</Text>
                    <TouchableOpacity style={styles.buttonCircle}></TouchableOpacity>
                </View>
                <View style={styles.symptomBox}>
                    <Text style={styles.symptomText}>DIARRHEA</Text>
                    <TouchableOpacity style={styles.buttonCircle}></TouchableOpacity>
                </View>
                <View style={styles.symptomBox}>
                    <Text style={styles.symptomText}>CONSTIPATION</Text>
                    <TouchableOpacity style={styles.buttonCircle}></TouchableOpacity>
                </View>
                <View style={styles.symptomBox}>
                    <Text style={styles.symptomText}>INSOMNIA</Text>
                    <TouchableOpacity style={styles.buttonCircle}></TouchableOpacity>
                </View>
                <View style={styles.symptomBox}>
                    <Text style={styles.symptomText}>CRAVINGS</Text>
                    <TouchableOpacity style={styles.buttonCircle}></TouchableOpacity>
                </View>
            </View>
        <View style={styles.symptomBorder}></View>
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
        width:'85%',
        height:'60%',
        alignSelf:'center',
        justifyContent:'space-around',
        position:'relative',
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
    listSymptoms: {
        display:'flex',
        flexDirection:'column',
        height:'100%',
        width:'100%',
        alignSelf:'center',
        justifyContent:'space-between',
        position:'absolute',
        zIndex:0,
    },
    symptomBorder: {
        borderRightWidth:1,
        borderRightColor:'white',
        width:1,
        height:'110%',
        zIndex:1,
        marginLeft:250,
    },
    symptomBox: {
        width:'100%',
        height:50,
        padding:10,
        alignSelf:"center",
        justifyContent:"space-between",
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#727272',
        alignItems:'center',
    },
    symptomText: {
        color:'white',
        fontSize:14,
        fontFamily:'spartan',
        letterSpacing:0.5,
        textAlign:'left',
    },
    buttonCircle: {
        width:30,
        height:30,
        borderRadius:15,
        borderColor:'white',
        borderWidth:1,
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