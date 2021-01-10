import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import '../assets/css/mood.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import Happy from '../assets/images/happy.png';
import Sleepy from '../assets/images/sleepy.png';
import Satisfied from '../assets/images/satisfied.png';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Mood ({navigation}) {
  return (
    <View>
      <View style={styles.bigContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.leftContain}>
              <Text style={styles.bigText}>DAILY CHECK-IN</Text>
              <Text h3 style={{color:'#5D7CB8', fontSize:24, fontFamily:'spartan'}}>I'M FEELING:</Text>
            </View>
            <View style={styles.rightContain}>
              <TouchableOpacity style={styles.checkIn}>
                <Text style={styles.buttonText}>Share my mood</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.leftContent}>
              <Text style={styles.headerText}>STATISTICS</Text>
            </View>
            <View style={styles.rightContent}>
              <TouchableOpacity style={styles.monthCheck}>
                <Text style={styles.buttonText}>MONTH VIEW</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.statContainer}>
              <View style={styles.leftStat}>
                <Text style={styles.statText}>you have checked in:</Text>
                <Text style={styles.statBig}>2 times</Text>
                <Text style={styles.statText}>in the past:</Text>
                <Text style={styles.statBig}>3 hours</Text>
              </View>
              <View style={styles.rightStat}>
                  <Text style={styles.rightText}>overall mood today:</Text>
                <Image
                  source={{uri:Happy}}
                  style={{width: 105, height:100, alignContent:'center',padding:20,marginLeft:30,marginBottom:10,}}
                />
              </View>
          </View>
          <View style={styles.latestContainer}>
            <Text style={styles.latestText}>latest check in:</Text>
            <View style={styles.latestUpdate}>
              <View style={styles.leftUpdate}>
                <Text h4 style={{color:'#5D7CB8', fontSize:14, fontFamily:'spartan',textAlign:'left'}}>I'M FEELING:
                  <Text style={{color:'black', fontSize:14, fontFamily:'spartan'}}>HAPPY</Text>
                </Text>
                <Image
                source={{uri:Happy}}
                style={{width: 85, height:80}}
                />
              </View>
              <View style={styles.rightUpdate}>
                <Text style={styles.dateText}>1/08/21</Text>
                <Text style={styles.lateSmall}>3:01 PM</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{flex:1,flexShrink:4,lineHeight:20,fontSize:12,fontFamily:'spartan',textAlign:'right'}}>Boyfriend decided to get me some coffee to help wake me up!</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.lastContainer}>
            <Text style={styles.headerText}>THIS WEEK</Text>
            <View style={styles.weekContainer}>
              <View style={styles.sleepyContainer}>
                <Text style={styles.dayText}>TUE</Text>
                <Image
                source={{uri:Sleepy}}
                style={{width: 50, height:50, marginLeft:10}}
                />
              </View>
              <View style={styles.satisfiedContainer}>
                <Text style={styles.dayText}>WED</Text>
                <Image
                source={{uri:Satisfied}}
                style={{width: 50, height:50, marginLeft:10}}
                />
              </View>
              <View style={styles.happyContainer}>
                <Text style={styles.dayText}>THU</Text>
                <Image
                source={{uri:Happy}}
                style={{width: 50, height:50, marginLeft:10}}
                />
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
    backgroundColor:'white',
    alignContent:'center'
  },
  headerContainer: {
    backgroundColor:'#e5e5e5',
    width:'90%',
    height:'auto',
    padding:20,
    display:'flex',
    borderRadius: 30,
    flexDirection:'row',
    flex:1,
    marginLeft:20,
  },
  leftContain: {
    flexDirection:'column',
  },
  bigText: {
    fontSize:16,
    color:'black',
    fontFamily:'spartan',
    margin:5,
  },
  checkIn: {
    backgroundColor: 'white',
    width:'100%',
    height:'auto',
    padding:10,
    marginLeft:'20%',
    borderRadius:10,
  },
  buttonText: {
    textAlign:'center',
    fontSize:12,
  },
  mainContainer: {
    backgroundColor: '#F4EAC7',
    width:'100%',
    height:'auto',
    marginTop:30,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingBottom:30,
  },
  headerText: {
    paddingTop:10,
    fontSize:16,
    marginLeft:20,
    fontFamily:'spartan',
  },
  contentContainer: {
    display:'flex',
    flexDirection:'row',
    margin:10,
  },
  monthCheck: {
    width:'70%',
    backgroundColor:'white',
    padding:10,
    borderRadius:20,
    marginLeft:90,
  },
  statContainer: {
    width:'95%',
    height:'auto',
    margin:20,
    display:'flex',
    flexDirection:'row',
  },
  leftStat: {
    backgroundColor:'white',
    width:'40%',
  },
  rightStat: {
    backgroundColor:'#c5c5c5',
    width:'50%',
  },
  rightText: {
    fontSize:13,
    margin:10,
    fontFamily:'spartan',
    textAlign:'center',
  },
  statText: {
    color:'black',
    fontSize:14,
    fontFamily:'spartan',
    margin:5,
  },
  statBig: {
    color:'black',
    fontSize:20,
    fontFamily:'spartan',
    margin:5,
    fontWeight:'bold',
  },
  latestContainer: {
    width:'100%',
    height:'auto',
    marginLeft:20,
  },
  latestText: {
    color:'black',
    fontSize:18,
    fontFamily:"spartan",
    letterSpacing:1,
    textAlign:'center',
  },
  latestUpdate: {
    backgroundColor:'white',
    width:'90%',
    height:'auto',
    padding:10,
    marginTop:20,
    display:'flex',
    flexDirection:'row',
  },
  leftUpdate: {
    padding:10,
  },
  rightUpdate: {
    width:'50%',
    flexDirection:'column',
    textAlign:'right',
    marginVertical:1,
    padding:10,
  },
  dateText: {
    fontSize:12,
    fontFamily:'spartan',
    textAlign:'right',
  },
  lateSmall: {
    fontSize:9,
    fontFamily:'spartan',
    margin:1,
  },
  weekContainer: {
    display:'flex',
    flexDirection:'row'
  },
  lastContainer: {
    width:'100%',
    height:'auto',
  },
  sleepyContainer: {
    backgroundColor:'white',
    width:'30%',
    height:'auto',
    padding:20,
    margin:5,
    borderRadius:30
  },
  satisfiedContainer: {
    backgroundColor:'white',
    width:'30%',
    height:'auto',
    padding:20,
    margin:5,
    borderRadius:30
  },
  happyContainer: {
    backgroundColor:'white',
    width:'30%',
    height:'auto',
    padding:20,
    margin:5,
    borderRadius:30
  },
  dayText: {
    fontSize:18,
    fontFamily:'spartan',
    textAlign:'center',
  }
});