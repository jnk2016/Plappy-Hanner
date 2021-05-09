import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Flatlist, TouchableOpacity, Text, View, Alert} from 'react-native';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import Event from '../assets/images/EVENT.png';
import { PieChart } from 'react-minimal-pie-chart';
import Collapsible from 'react-native-collapsible';
// import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/Colors';


export default function HabitTracker ({navigation}) {
  
return(
      <View style={styles.bigContainer}>
        <View style={styles.textHead}>
          <Text style={styles.progressText}>MY PROGRESS</Text>
          <Text style={styles.completeText}>
            <Text style={{fontSize:48, fontWeight:'600'}}>5/10</Text>
            <Text>habits completed</Text>
          </Text>
        </View>
        <View style={styles.habitContainer}>
          <TouchableOpacity style={styles.habitCircle}>
            <View style={styles.habitColumn}>
              <TouchableOpacity style={styles.addHabit}>
                <Image
                source={Event}
                style={{width:30, height:30, tintColor:'#383838'}}
                />
              </TouchableOpacity>
              <Text style={styles.habitName}>MAKE BED</Text>
              <Text style={styles.habitNumber}>1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.habitCircle}>
            <View style={styles.habitColumn}>
            <TouchableOpacity style={styles.addHabit}>
                <Image
                source={Event}
                style={{width:30, height:30, tintColor:'#383838'}}
                />
              </TouchableOpacity>
              <Text style={[styles.habitName,{fontSize:10}]}>TAKE VITAMINS</Text>
              <Text style={styles.habitNumber}>1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.habitCircle}>
            <View style={styles.habitColumn}>
            <TouchableOpacity style={styles.addHabit}>
                <Image
                source={Event}
                style={{width:30, height:30, tintColor:'#383838'}}
                />
              </TouchableOpacity>
              <Text style={styles.habitName}>PRAY</Text>
              <Text style={styles.habitNumber}>1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.habittwoCircle}>
            <View style={styles.habitColumn}>
              <TouchableOpacity style={styles.addHabit}>
                <Image
                source={Event}
                style={{width:30, height:30, tintColor:'#383838'}}
                />
              </TouchableOpacity>
              <Text style={styles.habitName}>SKIN CARE</Text>
              <Text style={styles.habitNumber}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.habitCircle,{backgroundColor:'#b59bc9', borderColor:'#b59bc9'}]}>
            <View style={styles.habitColumn}>
            <TouchableOpacity style={styles.addHabit}>
                <Image
                source={Event}
                style={{width:30, height:30, tintColor:'white'}}
                />
              </TouchableOpacity>
              <Text style={[styles.habitName,{fontSize:10, color:'white'}]}>CLEAN ROOM</Text>
              <Text style={[styles.habitNumber, {color:'white'}]}>1</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
 
);
}

const styles = StyleSheet.create ({
  bigContainer:{
    backgroundColor:'#f1dff4',
    width:'100%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    alignSelf:'center',
    overflow:'scroll',
    paddingTop:20,
    justifyContent:'space-between'
  },
  textHead:{
    display:'flex',
    flexDirection:'row',
    width:'90%',
    height:'5%',
    alignSelf:'center',
    justifyContent:'space-between',
  },
  progressText:{
    fontSize:14,
    color:'#383838',
    fontWeight:'600',
    fontFamily:'spartan',
  },
  completeText:{
    fontSize:18,
    color:'#383838',
    fontFamily:'spartan',
    display:'flex',
    flexDirection:'column',
    width:'60%',
    textAlign:'right'
  },
  habitContainer:{
    paddingTop:50,
    display:'flex',
    flexDirection:'column',
    alignSelf:'center',
    justifyContent:'space-between',
    width:'95%',
    height:'100%',
  },
  habitCircle:{
    borderWidth:5,
    borderColor:'white',
    width:120,
    height:120,
    borderRadius:60,
    alignSelf:'center',
    justifyContent:'center',
  },
  habittwoCircle:{
    borderWidth:5,
    borderLeftColor:'white',
    borderRightColor:'#b59bc9',
    borderTopColor:'white',
    borderBottomColor:'#b59bc9',
    width:120,
    height:120,
    borderRadius:60,
    alignSelf:'center',
    justifyContent:'center',
  },
  habitColumn:{
    padding:10,
    alignSelf:'center',
    display:'flex',
    flexDirection:'column',
    textAlign:'center',
    justifyContent:'space-between',
    height:'80%',
  },
  addHabit:{
    alignSelf:'center',
  },
  habitName:{
    fontFamily:'spartan',
    fontSize:12,
    color:'#383838',
  },
  habitNumber:{
    fontFamily:'spartan',
    fontSize:12,
    color:'#383838',
    fontWeight:'600',
  }

});
