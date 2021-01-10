import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, Text, View, Alert} from 'react-native';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';


export default function HabitTracker ({navigation}) {

  return (
      <View style={styles.bigContainer}> 
          <View style={styles.smallContainer}>
            <View style={styles.calendarContainer}>
              <Text style={styles.weekHeader}>
                  CURRENT WEEK
              </Text>
              <View style={styles.weekDays}>
                  <Text style={styles.weekDay}>
                      SUN
                  </Text>
                  <Text style={styles.weekDay}>
                      MON
                  </Text>
                  <Text style={styles.weekDay}>
                      TUE
                  </Text>
                  <Text style={styles.weekDay}>
                      WED
                  </Text>
                  <Text style={styles.weekDay}>
                      THU
                  </Text>
                  <Text style={styles.weekDay}>
                      FRI
                  </Text>
                  <Text style={styles.weekDay}>
                      SAT
                  </Text>
              </View>
              <View style={styles.weekNumbers}>
                  <Text style={styles.weekNumber}>
                  3
                  </Text>
                  <Text style={styles.weekNumber}>
                  4
                  </Text>
                  <Text style={styles.weekNumber}>
                  5
                  </Text>
                  <Text style={styles.weekNumber}>
                  6
                  </Text>
                  <Text style={styles.weekNumber}>
                  7
                  </Text>
                  <Text style={styles.weekNumber}>
                  8
                  </Text>
                  <Text style={styles.weekNumber}>
                  9
                  </Text>
              </View>
            </View>
            <View style={styles.habitContainer}>
              <View style={styles.headerTop}>
                <View style={styles.leftHeader}>
                  <Text style={styles.habitHeader}>HABITS</Text>
                </View>
                <View style={styles.rightHeader}>
                  <Text style={styles.habitHeader}>S</Text>
                  <Text style={styles.habitHeader}>M</Text>
                  <Text style={styles.habitHeader}>T</Text>
                  <Text style={styles.habitHeader}>W</Text>
                  <Text style={styles.habitHeader}>R</Text>
                  <Text style={styles.habitHeader}>F</Text>
                  <Text style={styles.habitHeader}>S</Text>
                </View>
              </View>
              <View style={styles.habitBoxContainer}>
                <View style={styles.habitBoxes}>
                  <View style={styles.leftBox}>
                    <Text style={styles.habitText}>MAKE BED</Text>
                    <Text style={styles.habitText}>MOISTURIZE</Text>
                    <Text style={styles.habitText}>PRAY</Text>
                    <Text style={styles.habitText}>CLEAN ROOM</Text>
                    <Text style={styles.habitText}>VITAMINS</Text>
                    <Text style={styles.habitText}>CHECK MESSAGES</Text>
                    <Text style={styles.habitendText}>SKIN CARE ROUTINE</Text>
                  </View>
                  <View style={styles.rightBox}>
                    <View style={styles.habit1Box}>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                    </View>
                    <View style={styles.habit2Box}>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                    </View>
                    <View style={styles.habit3Box}>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                    </View>
                    <View style={styles.habit4Box}>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                    </View>
                    <View style={styles.habit5Box}>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                    </View>
                    <View style={styles.habit6Box}>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                    </View>
                    <View style={styles.habit7Box}>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                      <TouchableOpacity style={styles.checkBox} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.editButton}>
                  <TouchableOpacity style={styles.habitButton} onPress={()=>console.log("button pressed")}>
                    <Text style={styles.buttonText}>edit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.optionText} onPress={()=>console.log("button pressed")}>
                <Text style={styles.buttonText}>daily</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionText} onPress={()=>console.log("button pressed")}>
                <Text style={styles.buttonText}>monthly</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
  
  );
}

const styles = StyleSheet.create ({
  bigContainer: {
      width:'100%',
      height:'100%',
      backgroundColor:'white',
  },
  smallContainer: {
      width:'100%',
      height:'100%',
  },
  calendarContainer: {
    backgroundColor:'#e5e5e5',
    width:'90%',
    height:'12%',
    borderRadius:20,
    alignContent:'center',
    textAlign:'center',
    marginLeft:20,
  },
  weekHeader: {
    color:'black',
    fontSize:12,
    fontFamily:'spartan',
    textAlign:'left',
    marginTop:10,
    marginLeft:10,
    letterSpacing:1,
  },
  weekDays: {
    display:'flex',
    flexDirection:'row',
    textAlign:'center',
    alignContent:'center',
    marginLeft:30,
    marginRight:15,
    padding:5,
  },
  weekDay: {
    margin:5,
    color:'rgba(56,56,56,0.6)',
    fontSize:11,
    fontFamily:'spartan',
  },
  weekNumbers: {
    display:'flex',
    flexDirection:'row',
    textAlign:'center',
    alignContent:'center',
    marginLeft:45,
    paddingBottom:20,
  },
  weekNumber: {
    marginRight:28,
    textAlign:'center',
    color:'black',
    fontFamily:'spartan',
    fontSize:12,
  },
  habitContainer: {
    marginTop:20,
    width:'95%',
    height:'auto',
    marginLeft:20,
  },
  headerTop: {
    display:'flex',
    flexDirection:'row',
    width:'90%',
    height:'auto',
    marginBottom:10,
  },
  leftHeader: {
    textAlign:'left',
    marginLeft:20,
    fontSize:14,
  },
  rightHeader: {
    textAlign:'right',
    marginLeft:100,
    display:'flex',
    flexDirection:'row',
    fontSize:14,
  },
  habitHeader: {
    letterSpacing:1,
    fontSize:12,
    color:'black',
    fontFamily:'spartan',
    marginRight:10,
  },
  habitBoxContainer: {
    borderRadius:30,
    borderColor:'black',
    borderWidth:1,
    height:'auto',
    width:'95%',
  },
  habitBoxes: {
    display:'flex',
    flexDirection:'row',
  },
  leftBox: {
    textAlign:'left',
    display:'flex',
    flexDirection:'column',
    padding:10,
    width:'50%',
    marginTop:20,
  },
  habitText: {
    fontSize:14,
    color:'black',
    letterSpacing:1,
    paddingBottom:40,
  },
  habitendText: {
    fontSize:14,
    color:'black',
    letterSpacing:1,
  },
  rightBox: {
    textAlign:'right',
    display:'flex',
    flexDirection:'column',
    width:'50%',
  },
  habit1Box: {
    backgroundColor:'#e5e5e5',
    width:'95%',
    height:'auto',
    padding:10,
    borderRadius:50,
    display:'flex',
    flexDirection:'row',
    marginTop:20,
  },
  habit2Box: {
    backgroundColor:'#e5e5e5',
    width:'95%',
    height:'auto',
    padding:10,
    borderRadius:50,
    display:'flex',
    flexDirection:'row',
    marginTop:20,
  },
  habit3Box: {
    backgroundColor:'#e5e5e5',
    width:'95%',
    height:'auto',
    padding:10,
    borderRadius:50,
    display:'flex',
    flexDirection:'row',
    marginTop:20,
  },
  habit4Box: {
    backgroundColor:'#e5e5e5',
    width:'95%',
    height:'auto',
    padding:10,
    borderRadius:50,
    display:'flex',
    flexDirection:'row',
    marginTop:20,
  },
  habit5Box: {
    backgroundColor:'#e5e5e5',
    width:'95%',
    height:'auto',
    padding:10,
    borderRadius:50,
    display:'flex',
    flexDirection:'row',
    marginTop:20,
  },
  habit6Box: {
    backgroundColor:'#e5e5e5',
    width:'95%',
    height:'auto',
    padding:10,
    borderRadius:50,
    display:'flex',
    flexDirection:'row',
    marginTop:20,
  },
  habit7Box: {
    backgroundColor:'#e5e5e5',
    width:'95%',
    height:'auto',
    padding:10,
    borderRadius:50,
    display:'flex',
    flexDirection:'row',
    marginTop:20,
  },
  checkBox: {
    borderColor:'black',
    borderWidth:1,
    width:10,
    height:10,
    margin:5,
  },
  editButton: {
    alignContent:'center',
    marginLeft:140,
  },
  habitButton: {
    backgroundColor:'#DCF0E7',
    textAlign:'center',
    padding:10,
    marginTop:20,
    width:'30%',
    height:'auto',
    borderRadius:30,
    marginBottom:20,
  },
  buttonText: {
    letterSpacing:1,
    color:'black',
    fontSize:12,
  },
  buttonContainer: {
    width:'100%',
    marginTop:20,
    marginLeft:60,
    height:'auto',
    display:'flex',
    flexDirection:'row',
  },
  optionText: {
    backgroundColor:'#f2e6fc',
    width:'30%',
    height:'auto',
    padding:10,
    borderRadius:50,
    margin:10,
    textAlign:'center',
  }
});