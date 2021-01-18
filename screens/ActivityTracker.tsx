import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert, TouchableOpacity} from 'react-native';
// import '../assets/css/selfcare.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';


export default function ActivityTracker ({navigation}) {
  return (
    <View style={styles.bigContainer}>
      <View style={styles.smallContainer}>
        <View style={styles.topText}>
          <Text style={styles.leftText}>
            <Text>REMAINING</Text>
            <Text style={{color:'white',fontWeight:'600'}}>1300ml</Text>
          </Text>
          <Text style={styles.rightText}>
            <Text>DAILY GOAL</Text>
            <Text style={{color:'white',fontWeight:'600'}}>2500ml</Text>
          </Text>
        </View>
        <View style={styles.waterCircle}>
          <Text style={styles.waterText}>
            <Text style={styles.totalText}>TOTAL INTAKE</Text>
            <Text style={styles.totalwaterText}>1200ml</Text>
          </Text>
        </View>
        <View style={styles.littleCircle}></View> 
        <View style={styles.recordContainer}>
          <View style={styles.recordInfo}>
            <View style={styles.recordBorder}>
              <Text style={styles.recordTime}>10:00</Text>
              <Text style={styles.recordNumber}>200ml</Text>
            </View>
            <View style={styles.recordBorder}>
              <Text style={styles.recordTime}>11:30</Text>
              <Text style={styles.recordNumber}>200ml</Text>
            </View>
            <View style={styles.recordBorder}>
              <Text style={styles.recordTime}>12:15</Text>
              <Text style={styles.recordNumber}>150ml</Text>
            </View>
            <View style={styles.recordBorder}>
              <Text style={styles.recordTime}>13:00</Text>
              <Text style={styles.recordNumber}>225ml</Text>
            </View>
            <View style={styles.recordBorder}>
              <Text style={styles.recordTime}>13:45</Text>
              <Text style={styles.recordNumber}>225ml</Text>
            </View>
            <View style={styles.recordBorder}>
              <Text style={styles.recordTime}>14:30</Text>
              <Text style={styles.recordNumber}>250ml</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.smallButton} onPress={()=> console.log("button pressed")}>
              <Text style={styles.buttonText}>TRACK MY WATER INTAKE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.statContainer}>
          <View style={styles.statBox}>
            <View style={styles.statCircle}>
              <Text style={styles.statText}>5 DAYS</Text>
            </View>
            <Text style={styles.statDesc}>CURRENT STREAK</Text>
          </View>
          <View style={styles.statBox}>
            <View style={styles.statCircle}>
              <Text style={styles.statText}>1800ml</Text>
            </View>
            <Text style={styles.statDesc}>DAILY AVERAGE</Text>
          </View>
          <View style={styles.statBox}>
            <View style={styles.statCircle}>
              <Text style={styles.statText}>80%</Text>
            </View>
            <Text style={styles.statDesc}>DAILY PERCENTAGE</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  bigContainer: {
    alignItems:'center',
    backgroundColor:'white',
    width:'100%',
    height:'100%',
    fontFamily:'spartan',
  },
  smallContainer: {
    width:'100%',
    height:'100%',
    backgroundColor:'#d7e0f1',
  },
  topText: {
    alignSelf:'center',
    justifyContent:'space-between',
    width:'90%',
    display:'flex',
    flexDirection:'row',
    marginTop:30,
  },
  leftText: {
    textAlign:'center',
    display:'flex',
    flexDirection:'column',
    color:'black',
    fontSize:14,
    fontFamily:'spartan',
  },
  rightText: {
    textAlign:'center',
    display:'flex',
    flexDirection:'column',
    color:'black',
    fontSize:14,
    fontFamily:'spartan',
  },
  waterCircle: {
    marginTop:70,
    borderTopWidth:3,
    borderTopColor:'#5D7CB8',
    width:'90%',
    height:'50%',
    alignSelf:'center',
    justifyContent:'space-around',
    borderRadius:180,
    zIndex:0,
    position:'absolute',
    textAlign:'center',
  },
  littleCircle:{
    backgroundColor:'white',
    width:20,
    height:20,
    borderRadius:10,
    zIndex:1,
    marginLeft:100,
    marginTop:15,
  },
  waterText: {
    marginTop:-130,
    display:'flex',
    flexDirection:'column',
  },
  totalText: {
    color:'black',
    fontSize:18,
    fontFamily:'spartan',
    letterSpacing:1,
  },
  totalwaterText: {
    color:'white',
    fontSize:20,
    fontFamily:'spartan',
    letterSpacing:2,
    fontWeight:'600'
  },
  recordContainer: {
    width:'70%',
    height:'45%',
    alignSelf:'center',
    justifyContent:'center',
    backgroundColor:'#8c96ab',
    marginTop:120,
  },
  recordInfo: {
    alignSelf:'center',
    justifyContent:'space-around',
    width:'90%',
    height:'auto',
    marginTop:20,
  },
  recordBorder:{
    borderTopWidth:1,
    borderTopColor:'white',
    width:'100%',
    height:'auto',
    padding:10,
    alignSelf:'center',
    justifyContent:'space-between',
    display:'flex',
    flexDirection:'row',
  },
  recordTime: {
    color:'white',
    fontSize:14,
    fontFamily:'spartan',
  },
  recordNumber: {
    color:'white',
    fontSize:14,
    fontFamily:'spartan',
    fontWeight:'600',
  },
  smallButton: {
    width:190,
    height:'auto',
    padding:10,
    backgroundColor:'#c4c4c4',
    textAlign:'center',
    marginTop:20,
    alignSelf:'center',
    borderRadius:10,
  },
  buttonText: {
    color:'black',
    fontSize:12,
    fontFamily:'spartan',
  },
  statContainer: {
    width:'90%',
    height:'auto',
    alignSelf:'center',
    justifyContent:'space-around',
    display:'flex',
    flexDirection:'row',
    marginTop:20,
  },
  statBox: {
    width:'auto',
    height:'auto',
    display:'flex',
    flexDirection:'column',
    textAlign:'center',
    alignItems:'center',
    margin:5,
  },
  statCircle: {
    width:90,
    height:90,
    borderRadius:50,
    borderRightWidth:4,
    borderRightColor:'#8c96ab',
    backgroundColor:'#e3edff',
    textAlign:'center',
  },
  statText: {
    color:'black',
    fontSize:16,
    fontFamily:'spartan',
    fontWeight:'600',
    paddingTop:40,
  },
  statDesc: {
    color:'black',
    fontSize:10,
    fontFamily:'spartan',
    textAlign:'center',
    marginTop:10,
  }
});