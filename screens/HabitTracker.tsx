import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, Text, View, Alert} from 'react-native';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';


export default function HabitTracker ({navigation}) {

  return (
      <View style={styles.bigContainer}> 
      <Text style={styles.headingText}>MY STATISTICS</Text>
        <View style={styles.smallContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.headLeft}>
              <View style={styles.headBox}>
                <View style={styles.headCircle}>
                  <Text style={styles.circleText}>
                    <Text>day</Text>
                    <Text style={{fontSize:48, fontWeight:'600'}}>32</Text>
                  </Text>
                </View>
                <Text style={styles.headboxText}>MY CURRENT STREAK</Text>
              </View>
            </View>
            <View style={styles.headRight}>
              <View style={styles.headbox}>
                <Text style={styles.boxText}>
                  <Text style={{fontSize:18,fontWeight:'600'}}>1</Text>
                  <Text>to do</Text>
                </Text>
              </View>
              <View style={styles.headbox}>
                <Text style={styles.boxText}>
                  <Text style={{fontSize:18,fontWeight:'600'}}>2</Text>
                  <Text>started</Text>
                </Text>
              </View>
              <View style={styles.headbox}>
                <Text style={styles.boxText}>
                  <Text style={{fontSize:18,fontWeight:'600'}}>3</Text>
                  <Text>completed</Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.mainButton,{backgroundColor:'#383838',width:45}]} onPress={()=>console.log("button pressed")}>
              <Text style={[styles.buttonText,{color:'white'}]}>edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.mainButton,{backgroundColor:'#c4c4c4',width:115, marginLeft:60,}]} onPress={()=>console.log("button pressed")}>
              <Text style={[styles.buttonText,{color:'black'}]}>MONTH VIEW</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.habitContainer}>
            <View style={styles.habitOptions}>
              <View style={styles.habitBox}>
                <Text style={styles.habitText}>MAKE BED</Text>
              </View>
              <View style={styles.habitWeek}>
                <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                </View>
            </View>
            <View style={styles.habitOptions}>
              <View style={styles.habitBox}>
                <Text style={styles.habitText}>MOISTURIZE</Text>
              </View>
              <View style={styles.habitWeek}>
                <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
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
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                </View>
            </View>
            <View style={styles.habitOptions}>
              <View style={styles.habitBox}>
                <Text style={styles.habitText}>CLEAN ROOM</Text>
              </View>
              <View style={styles.habitWeek}>
                <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
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
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                </View>
            </View>
            <View style={styles.habitOptions}>
              <View style={styles.habitBox}>
                <Text style={styles.habitText}>SKIN CARE ROUTINE</Text>
              </View>
              <View style={styles.habitWeek}>
                <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
                  <TouchableOpacity style={styles.habitweekCircle} onPress={()=>console.log("button pressed")}></TouchableOpacity>
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
  },
  smallContainer: {
    width:'90%',
    height:'100%',
    alignSelf:'center',
    alignItems:'center',
    backgroundColor:'#f1dff4',
    borderRadius:10,
    marginTop:30,
  },
  headerContainer: {
    width:'100%',
    height:'auto',
    alignSelf:'center',
    justifyContent:'space-around',
    display:'flex',
    flexDirection:'row',
    marginLeft:80,
    marginTop:-20,
  },
  headingText:{
    color:'black',
    fontFamily:'spartan',
    fontSize:16,
    textAlign:'center',
  },
  headLeft:{
    display:'flex',
    flexDirection:'column',
    width:'50%',
    height:'auto',
  },
  headBox: {
    backgroundColor:'#c2c7d1',
    width:190,
    height:150,
    borderRadius:10,
  },
  headCircle: {
    backgroundColor:'#eeeeee',
    width:100,
    alignSelf:'center',
    justifyContent:'space-around',
    height:95,
    borderRadius:50,
    textAlign:'center',
    margin:5,
  },
  circleText: {
    color:'black',
    display:'flex',
    flexDirection:'column',
    margin:5,
  },
  headboxText: {
    color:'black',
    fontSize:14,
    paddingTop:10,
    alignSelf:'center',
    fontFamily:'spartan'
  },
  headRight:{
    display:'flex',
    flexDirection:'column',
    width:'50%',
    height:'auto',
    padding:10,
    marginLeft:30,
  },
  headbox: {
    backgroundColor:'white',
    width:65,
    height:40,
    borderWidth:1,
    borderColor:'black',
    margin:5,
    textAlign:'center',
  },
  boxText: {
    display:'flex',
    flexDirection:'column',
    color:'black',
    fontSize:10,
    fontFamily:'spartan',
    padding:1,
  },
  buttonContainer:{
    marginTop:5,
    width:'90%',
    height:'auto',
    flexDirection:'row',
    display:'flex',
    alignSelf:'center',
    justifyContent:'space-around'
  },
  mainButton: {
    height:'auto',
    padding:10,
    textAlign:'center',
    borderRadius:10,
  },
  buttonText: {
    fontSize:10,
    fontFamily:'spartan',
  },
   habitContainer:{
    display:'flex',
    flexDirection:'column',
    width:'90%',
    height:'auto',
    marginTop:5,
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
    height:45,
    borderColor:'black',
    borderWidth:1,
    margin:10,
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
     marginTop:-20,
   }
});