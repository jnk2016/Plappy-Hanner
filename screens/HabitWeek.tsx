import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, Text, View, Alert} from 'react-native';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';


export default function HabitWeek ({navigation}) {

  return (
      <View style={styles.bigContainer}> 
        <View style={styles.mainContainer}>
          <View style={styles.habitContainer}>
            <View style={styles.habitOptions}>
              <View style={styles.habitBox}>
                <Text style={styles.habitText}>MAKE BED</Text>
              </View>
              <View style={styles.habitWeek}>
                <TouchableOpacity style={[styles.habitweekCircle,{backgroundColor:'#b59bc9'}]} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={[styles.habitweekCircle,{backgroundColor:'#b59bc9'}]} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={[styles.habitweekCircle,{backgroundColor:'#b59bc9'}]} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={[styles.habitweekCircle,{backgroundColor:'#b59bc9'}]} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                </View>
            </View>
            <View style={styles.habitOptions}>
              <View style={styles.habitBox}>
                <Text style={styles.habitText}>MOISTURIZE</Text>
              </View>
              <View style={styles.habitWeek}>
                <TouchableOpacity style={[styles.habitweekCircle,{backgroundColor:'#b59bc9'}]} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={[styles.habitweekCircle,{backgroundColor:'#b59bc9'}]} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={[styles.habitweekCircle,{backgroundColor:'#b59bc9'}]} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                </View>
            </View>
            <View style={styles.habitOptions}>
              <View style={styles.habitBox}>
                <Text style={styles.habitText}>PRAY</Text>
              </View>
              <View style={styles.habitWeek}>
                <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={[styles.habitweekCircle,{backgroundColor:'#b59bc9'}]} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={[styles.habitweekCircle,{backgroundColor:'#b59bc9'}]} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                </View>
            </View>
            <View style={styles.habitOptions}>
              <View style={styles.habitBox}>
                <Text style={styles.habitText}>CLEAN ROOM</Text>
              </View>
              <View style={styles.habitWeek}>
                <TouchableOpacity style={[styles.habitweekCircle,{backgroundColor:'#b59bc9'}]} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={[styles.habitweekCircle,{backgroundColor:'#b59bc9'}]} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={[styles.habitweekCircle,{backgroundColor:'#b59bc9'}]} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={[styles.habitweekCircle,{backgroundColor:'#b59bc9'}]} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                </View>
            </View>
            <View style={styles.habitOptions}>
              <View style={styles.habitBox}>
                <Text style={styles.habitText}>VITAMINS</Text>
              </View>
              <View style={styles.habitWeek}>
                <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={[styles.habitweekCircle,{backgroundColor:'#b59bc9'}]} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={[styles.habitweekCircle,{backgroundColor:'#b59bc9'}]} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={[styles.habitweekCircle,{backgroundColor:'#b59bc9'}]} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                </View>
            </View>
            <View style={styles.habitOptions}>
              <View style={styles.habitBox}>
                <Text style={styles.habitText}>SKIN CARE ROUTINE</Text>
              </View>
              <View style={styles.habitWeek}>
                <TouchableOpacity style={[styles.habitweekCircle,{backgroundColor:'#b59bc9'}]} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={[styles.habitweekCircle,{backgroundColor:'#b59bc9'}]} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={[styles.habitweekCircle,{backgroundColor:'#b59bc9'}]} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={[styles.habitweekCircle,{backgroundColor:'#b59bc9'}]} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                </View>
            </View>
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
      justifyContent:'center',
  },
  mainContainer:{
   width:'90%',
   height:'100%',
   marginTop:5,
   backgroundColor:'#f1dff4',
   alignSelf:'center',
   justifyContent:'space-around',
  },
  habitContainer:{
    display:'flex',
    flexDirection:'column',
    width:'90%',
    height:'75%',
    alignSelf:'center',
    justifyContent:"space-between",
    alignContent:'center',
  },
   habitOptions: {
    width:'100%',
    height:'auto',
    margin:5,
   },
   habitBox: {
     display:'flex',
     flexDirection:'column',
    width:280,
    height:50,
    borderColor:'black',
    borderWidth:1,
   },
   habitText: {
     color:'black',
     fontSize:12,
     fontFamily:'spartan',
     padding:10,
   },
   habitWeek: {
     width:'100%',
     height:'auto',
     display:'flex',
     flexDirection:'row',
     marginLeft:15,
   },
   habitweekCircle: {
     width:18,
     height:18,
     borderRadius:9,
     borderWidth:1,
     borderColor:'black',
     backgroundColor:'white',
     marginLeft:10,
     marginTop:-10,
   }
});