import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, Text, View, Alert} from 'react-native';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import Event from '../assets/images/EVENT.png';
import { PieChart } from 'react-minimal-pie-chart';


export default function HabitTracker ({navigation}) {

  return (
    <View style={styles.bigContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.leftContainer}>
          <Text style={{fontSize:20,color:'black',letterSpacing:1,textAlign:'left'}}>TODAY</Text>
          <View style={styles.leftContent}>
          <View style={styles.habitOpen}>
            <View style={styles.habitContainer}>
              <View style={styles.barContainer}>
                <View style={styles.habitBar}>
                  <View style={styles.habitProgress}>
                    <Text style={styles.habitText}>MOISTURIZE</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.addButton}onPress={()=> console.log("button pressed")}>
                <Image
                source={Event}
                style={{width:20,height:20}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.habitContainer}>
              <View style={styles.barContainer}>
                <View style={styles.habitBar}>
                  <View style={styles.habitProgress}>
                    <Text style={styles.habitText}>PRAY</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.addButton}onPress={()=> console.log("button pressed")}>
                <Image
                source={Event}
                style={{width:20,height:20}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.habitContainer}>
              <View style={styles.barContainer}>
                <View style={styles.habitBar}>
                  <View style={styles.habitProgress}>
                    <Text style={[styles.habitText,{paddingTop:5,}]}>TAKE VITAMINS</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.addButton}onPress={()=> console.log("button pressed")}>
                <Image
                source={Event}
                style={{width:20,height:20}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.habitContainer}>
              <View style={styles.barContainer}>
              <View style={styles.habitBar}>
                <View style={styles.habitProgress}>
                  <Text style={[styles.habitText,{paddingTop:5,}]}>SKIN CARE ROUTINE</Text>
                </View>
              </View>
              </View>
              <TouchableOpacity style={styles.addButton}onPress={()=> console.log("button pressed")}>
                <Image
                source={Event}
                style={{width:20,height:20}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottomHabit}>
            <View style={styles.habitComplete}>
              <Text style={styles.headText}>COMPLETED</Text>
              <View style={styles.habitcompleteContainer}>
                <View style={styles.habitcompleteBar}>
                    <Text style={styles.habitText}>MAKE BED</Text>
                  </View>
                </View>
              </View>
            <View style={styles.habitSkipped}>
              <Text style={styles.headText}>SKIPPED</Text>
              <View style={styles.habitskippedContainer}>
                <View style={styles.habitBar}>
                    <Text style={styles.habitText}>CLEAN ROOM</Text>
                </View>
              </View>

          </View>
          </View>  
          </View>
          </View>
        <View style={styles.rightContainer}>
          <View style={styles.rightBox}>
            <View style={styles.rightContent}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.mainButtons}>
                  <Text style={styles.buttonText}>VIEW WEEK</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainButtons}>
                  <Text style={styles.buttonText}>VIEW MONTH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainButtons}>
                  <Text style={styles.buttonText}>VIEW HABITS</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.statContainer}>
                <View style={styles.goalPie}>
                  <Text style={styles.headText}>HABIT GOAL REACHED:</Text>
                  <View style={styles.pieContainer}>
                    <View style={styles.outsidePie}>
                      <PieChart style={{alignSelf: 'center'}}
                      data={[
                      { title: 'One', value: 1, color: 'white' },
                      {title: 'Two', value: 1, color: '#e8d7f6' },
                      ]} lineWidth={100} viewBoxSize={[100,100]}
                      />
                      <Text style={styles.pieText}>50%</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.streakContainer}>
                  <Text style={styles.headText}>CURRENT STREAK:</Text>
                  <View style={styles.streakCircle}>
                    <Text style={styles.streakText}>
                      <Text>DAY</Text>
                      <Text style={{fontSize:50}}>5</Text>
                    </Text>
                  </View>
                </View>
              </View>
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
    fontFamily:'spartan',
    backgroundColor:'white',
  },
  mainContainer: {
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'100%',
    fontFamily:'spartan',
  },
  leftContainer: {
    display:'flex',
    flexDirection:'column',
    width:'40%',
    height:'100%',
    marginLeft:10,
  },
  leftContent: {
    display:'flex',
    flexDirection:'column',
    width:'100%',
    height:'80%',
    alignSelf:'flex-start',
    justifyContent:'space-between'
  },
  habitOpen: {
    display:'flex',
    flexDirection:'column',
    width:'90%',
    height:'50%',
    alignSelf:'flex-start',
    justifyContent:'space-between',
    marginTop:10,
  },
  habitContainer: {
    display:'flex',
    flexDirection:'row',
    height:'20%',
    width:'100%',
    justifyContent:'space-around',
    alignSelf:'flex-start',
    alignItems:'center',
  },
  barContainer: {
    display:'flex',
    flexDirection:'column',
    width:'85%',
    height:'auto',
  },
  habitBar: {
    width:135,
    height:60,
    borderRadius:10,
    backgroundColor:'#e5e5e5',
    textAlign:'left',
    alignContent:'center',
  },
  habitProgress: {
    width:65,
    height:60,
    backgroundColor:'#e8d7f6',
    borderRadius:10,
  },
  habitText: {
    color:'black',
    width:'150%',
    margin:10,
    paddingTop:10,
    fontSize:14,
    letterSpacing:1,
    textAlign:'left',
  },
  addButton: {
    width:'10%',
    height:'auto',
  },
  bottomHabit: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    height:'30%',
    width:'100%',
    alignSelf:'center'
  },
  habitComplete: {
    width:'100%',
    height:'15%',
    display:'flex',
    flexDirection:'column',
    alignSelf:'flex-start'
  },
  habitcompleteContainer: {
    display:'flex',
    flexDirection:'row',
    height:'20%',
    width:'100%',
    alignSelf:'flex-start',
  },
  headText: {
    color:'black',
    fontSize:16,
    margin:10,
    letterSpacing:0.5,
  },
  habitcompleteBar: {
    width:135,
    height:60,
    backgroundColor:'#e8d7f6',
    textAlign:'left',
    borderRadius:10,
  },
  habitSkipped: {
    width:'100%',
    height:'15%',
    display:'flex',
    flexDirection:'column',
    alignSelf:'flex-start'
  },
  habitskippedContainer: {
    display:'flex',
    flexDirection:'row',
    height:'20%',
    width:'100%',
    alignSelf:'flex-start',
  },
  rightContainer: {
    display:'flex',
    flexDirection:'column',
    width:'60%',
    height:'100%',
    justifyContent:'space-around',
    alignSelf:'center',
  },
  rightBox: {
    height:'100%',
    width:'80%',
    alignSelf:'center',
    justifyContent:'space-around',
    backgroundColor:'#e8d7f6',
  },
  rightContent: {
    display:'flex',
    flexDirection:'column',
    width:'100%',
    height:'100%',
  },
  buttonContainer: {
    display:'flex',
    flexDirection:'column',
    height:'20%',
    width:'100%',
    justifyContent:'space-between',
    alignSelf:'center',
    marginTop:20,
    marginLeft:50,
  },
  mainButtons:{
    backgroundColor:'#e5e5e5',
    borderRadius:10,
    width:130,
    height:35,
    textAlign:'center',
    alignContent:'center',
    justifyContent:'space-around'
  },
  buttonText: {
    color:'black',
    fontSize:12,
    alignSelf:'center',
  },
  statContainer: {
    marginTop:20,
    display:'flex',
    flexDirection:'column',
    width:'100%',
    height:'70%',
    justifyContent:'space-between',
    textAlign:'center',
    alignSelf:'center',
  },
  goalPie: {
    display:'flex',
    flexDirection:'column',
    width:'100%',
    height:'40%',
    justifyContent:'space-between',
    alignContent:'center',
    alignSelf:'center',
  },
  pieContainer:{
    alignContent:'center',
    textAlign:'center',
    width:'auto',
    height:'auto',
  },
  outsidePie: {
    width:150,
    height:150,
    borderWidth:3,
    borderColor:'white',
    borderRadius:75,
    alignSelf:'center',
  },
  pieText: {
    color:'#383838',
    fontSize:48,
    letterSpacing:1,
    marginTop:-105,
  },
  streakContainer: {
    width:'100%',
    height:'50%',
    display:'flex',
    flexDirection:'column',
  },
  streakCircle: {
    width:150,
    height:150,
    backgroundColor:'white',
    borderRadius:75,
    alignSelf:'center',
  },
  streakText: {
    color:'black',
    fontSize:24,
    display:'flex',
    flexDirection:'column',
    marginTop:40,
  },
});