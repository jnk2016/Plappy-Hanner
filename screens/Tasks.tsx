import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert, TouchableOpacity} from 'react-native';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import Home from '../assets/images/clarity_home-line.png';
import Work from '../assets/images/clarity_work-line.png';
import Person from '../assets/images/clarity_person-line.png';
import School from '../assets/images/clarity_school-line.png';
import Event from '../assets/images/EVENT.png';

export default function Tasks ({navigation}) {
  return (
    <View style={styles.bigContainer}>
      <View style={styles.smallContainer}>
        <View style={styles.topLine}>
          <Text style={styles.headText}>TODAY</Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.taskList}>
            <View style={styles.priorityContainer}>
              <Text style={styles.priorityText}>HIGH PRIORITY</Text>
              <View style={[styles.priorityBox,{backgroundColor:'#e8cec1'}]}>
                <View style={styles.priorityList}>
                  <View style={styles.priorityTask}>
                    <TouchableOpacity style={styles.whiteButton} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                    <Text style={styles.loremText}>Lorem ipsum dolor sit amet.</Text>
                  </View>
                  <View style={styles.priorityTask}>
                    <TouchableOpacity style={styles.whiteButton} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                    <Text style={styles.loremText}>Lorem ipsum dolor sit amet.</Text>
                  </View>
                  <View style={styles.priorityTask}>
                    <TouchableOpacity style={styles.whiteButton} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                    <Text style={styles.loremText}>Lorem ipsum dolor sit amet.</Text>
                  </View>
                  <View style={styles.priorityTask}>
                    <TouchableOpacity style={styles.whiteButton} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                    <Text style={styles.loremText}>Lorem ipsum dolor sit amet.</Text>
                  </View>
                  <View style={styles.priorityTask}>
                    <TouchableOpacity style={styles.whiteButton} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                    <Text style={styles.loremText}>Lorem ipsum dolor sit amet.</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.priorityContainer}>
              <View style={[styles.priorityBox,{backgroundColor:'#9eacc8'}]}>
                <View style={styles.priorityList}>
                  <View style={styles.priorityTask}>
                    <TouchableOpacity style={styles.whiteButton} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                    <Text style={styles.loremText}>Lorem ipsum dolor sit amet.</Text>
                  </View>
                  <View style={styles.priorityTask}>
                    <TouchableOpacity style={styles.whiteButton} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                    <Text style={styles.loremText}>Lorem ipsum dolor sit amet.</Text>
                  </View>
                  <View style={styles.priorityTask}>
                    <TouchableOpacity style={styles.whiteButton} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                    <Text style={styles.loremText}>Lorem ipsum dolor sit amet.</Text>
                  </View>
                  <View style={styles.priorityTask}>
                    <TouchableOpacity style={styles.whiteButton} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                    <Text style={styles.loremText}>Lorem ipsum dolor sit amet.</Text>
                  </View>
                  <View style={styles.priorityTask}>
                    <TouchableOpacity style={styles.whiteButton} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                    <Text style={styles.loremText}>Lorem ipsum dolor sit amet.</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.priorityText}>MEDIUM PRIORITY</Text>
            </View>
            <View style={styles.priorityContainer}>
              <Text style={styles.priorityText}>LOW PRIORITY</Text>
              <View style={[styles.priorityBox,{backgroundColor:'#9aada4'}]}>
                <View style={styles.priorityList}>
                  <View style={styles.priorityTask}>
                    <TouchableOpacity style={styles.whiteButton} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                    <Text style={styles.loremText}>Lorem ipsum dolor sit amet.</Text>
                  </View>
                  <View style={styles.priorityTask}>
                    <TouchableOpacity style={styles.whiteButton} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                    <Text style={styles.loremText}>Lorem ipsum dolor sit amet.</Text>
                  </View>
                  <View style={styles.priorityTask}>
                    <TouchableOpacity style={styles.whiteButton} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                    <Text style={styles.loremText}>Lorem ipsum dolor sit amet.</Text>
                  </View>
                  <View style={styles.priorityTask}>
                    <TouchableOpacity style={styles.whiteButton} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                    <Text style={styles.loremText}>Lorem ipsum dolor sit amet.</Text>
                  </View>
                  <View style={styles.priorityTask}>
                    <TouchableOpacity style={styles.whiteButton} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                    <Text style={styles.loremText}>Lorem ipsum dolor sit amet.</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomLine}>
          <Text style={styles.headText}>ALL</Text>
        </View>
      </View>
     </View>
  );
}

const styles = StyleSheet.create ({
  bigContainer: {
    widht:'100%',
    height:'100%',
    alignContent:'center',
    fontFamily:'spartan',
    backgroundColor:'white',
  },
  smallContainer: {
    width:'90%',
    height:'95%',
    backgroundColor:'white',
    alignSelf:'center',
    justifyContent:'space-around'
  },
  topLine: {
    borderBottomWidth:1,
    borderBottomColor:'black',
    width:'100%',
    height:'auto',
    textAlign:'left',
  },
  headText: {
    color:'black',
    fontSize:18,
    fontFamily:'spartan',
    letterSpacing:1,
  },
  mainContainer: {
    width:'100%',
    height:'80%',
    alignSelf:"center",
    justifyContent:'space-around',
  },
  taskList: {
    display:'flex',
    flexDirection:'column',
    width:'100%',
    height:'100%',
    alignSelf:'center',
    justifyContent:'space-between',           
  },
  priorityContainer: {
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'30%',
    textAlign:'left',
    alignItems:'center',
  },
  priorityText: {
    color:'black',
    fontSize:12,
    fontFamily:'spartan',
    lineHeight:20,
    letterSpacing:0.5,
    textAlign:'center',
  },
  priorityBox: {
    width:'70%',
    height:'100%',
  },
  priorityList: {
    alignSelf:'flex-start',
    justifyContent:'space-between',
    width:'100%',
    height:'90%',
    display:'flex',
    flexDirection:'column',
  },
  priorityTask:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'auto',
    padding:10,
  },
  whiteButton:{
    width:10,
    height:10,
    borderRadius:5,
    backgroundColor:'white',
  },
  loremText: {
    color:'black',
    fontSize:10,
    fontFamily:'spartan',
    marginLeft:5,
  },
  bottomLine: {
    borderTopWidth:1,
    borderTopColor:'black',
    width:'100%',
    textAlign:'right',
  }
});