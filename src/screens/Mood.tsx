import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Mood ({navigation}) {
  return (
    <ScrollView>
      <View style={styles.bigContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.leftHeader}>
              <Text style={styles.bigText}>DAILY CHECK-IN</Text>
              <Text style={{color:'#5D7CB8', fontSize:24, fontFamily:'Spartan-SemiBold'}}>I'M FEELING:</Text>
            </View>
            <View style={styles.rightHeader}>
              <TouchableOpacity style={styles.checkIn} onPress={()=>console.log("button pressed")}>
                <Text style={styles.buttonText}>Share my mood</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.moodContainer}>
            <View style={styles.contentContainer}>
                <Text style={styles.headerText}>STATISTICS</Text>
                <TouchableOpacity style={styles.monthCheck}>
                  <Text style={styles.buttonText}>MONTH VIEW</Text>
                </TouchableOpacity>
              </View>
            </View>
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
                  source={require('../assets/images/happy.png')}
                  style={{width: 105, height:100, alignContent:'center',padding:20,marginLeft:30,marginBottom:10,}}
                />
              </View>
          </View>
          <View style={styles.latestContainer}>
            <Text style={styles.latestText}>latest check in:</Text>
            <View style={styles.latestUpdate}>
              <View style={styles.leftUpdate}>
                <Text style={{color:'#5D7CB8', fontSize:14, fontFamily:'Spartan-Regular',textAlign:'left'}}>I'M FEELING:
                  <Text style={{color:'black', fontSize:14, fontFamily:'Spartan-Regular'}}>HAPPY</Text>
                </Text>
                <Image
                source={require('../assets/images/happy.png')}
                style={{width: 85, height:80, marginTop: '2%'}}
                />
              </View>
              <View style={styles.rightUpdate}>
                <Text style={styles.dateText}>1/08/21</Text>
                <Text style={styles.lateSmall}>3:01 PM</Text>
                <View style={{flexDirection:'row', marginVertical: '3%'}}>
                <Text style={{flex:1,flexShrink:4,lineHeight:20,fontSize:12,fontFamily:'Spartan-Regular',textAlign:'right'}}>Boyfriend decided to get me some coffee to help wake me up!</Text>
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
                source={require('../assets/images/sleepy.png')}
                style={{width: 50, height:50, marginLeft:10}}
                />
              </View>
              <View style={styles.satisfiedContainer}>
                <Text style={styles.dayText}>WED</Text>
                <Image
                source={require('../assets/images/satisfied.png')}
                style={{width: 50, height:50, marginLeft:10}}
                />
              </View>
              <View style={styles.happyContainer}>
                <Text style={styles.dayText}>THU</Text>
                <Image
                source={require('../assets/images/happy.png')}
                style={{width: 50, height:50, marginLeft:10}}
                />
              </View>
            </View>
          </View>
        </View>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create ({
  bigContainer: {
    backgroundColor:'white',
    alignContent:'center',
    width:'100%',
    height:'100%',
  },
  mainContainer: {
    backgroundColor: '#F4EAC7',
    width:'100%',
    height:'100%',
    marginTop:10,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingBottom:30,
  },
  headerContainer: {
    backgroundColor:'#e5e5e5',
    width:'90%',
    height:'auto',
    padding:10,
    display:'flex',
    borderRadius: 30,
    flexDirection:'row',
    marginLeft:20,
    alignItems: 'center'
  },
  leftHeader: {
    margin:5,
  },
  bigText: {
    fontSize:16,
    color:'black',
    fontFamily:'Spartan-SemiBold',
    margin:5,
  },
  rightHeader: {
    margin:5,
  },
  checkIn: {
    backgroundColor: 'white',
    width:'100%',
    height:'auto',
    padding:10,
    // marginLeft:'20%',
    borderRadius:70,
    alignSelf: 'center',
  },
  buttonText: {
    textAlign:'center',
    fontSize:12,
    fontFamily: 'Spartan-Regular'
  },
  headerText: {
    paddingTop:10,
    fontSize:16,
    marginLeft:20,
    fontFamily:'Spartan-Regular',
  },
  moodContainer: {
    width:'100%',
    height:'auto',
  },
  contentContainer: {
    display:'flex',
    flexDirection:'row',
    marginLeft:10,
    marginTop:10,
  },
  monthCheck: {
    width:'70%',
    backgroundColor:'white',
    padding:10,
    borderRadius:20,
    marginLeft:90,
  },
  statContainer: {
    width:'90%',
    height:'auto',
    marginLeft:15,
    marginTop:10,
    display:'flex',
    flexDirection:'row',
  },
  leftStat: {
    backgroundColor:'white',
    width:'50%',
    padding:5,
  },
  rightStat: {
    backgroundColor:'#c5c5c5',
    width:'50%',
    padding:5,
  },
  rightText: {
    fontSize:13,
    margin:10,
    fontFamily:'Spartan-Regular',
    textAlign:'center',
  },
  statText: {
    color:'black',
    fontSize:12,
    fontFamily:'Spartan-Regular',
    margin:5,
  },
  statBig: {
    color:'black',
    fontSize:20,
    fontFamily:'Spartan-SemiBold',
    margin:5,
  },
  latestContainer: {
    width:'100%',
    height:'auto',
    marginLeft:20,
  },
  latestText: {
    color:'black',
    fontSize:18,
    fontFamily:"Spartan-Regular",
    letterSpacing:1,
    textAlign:'center',
    marginVertical:10,
  },
  latestUpdate: {
    backgroundColor:'white',
    width:'90%',
    height:'auto',
    padding:10,
    marginTop:5,
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
    fontFamily:'Spartan-Regular',
    textAlign:'right',
  },
  lateSmall: {
    fontSize:9,
    fontFamily:'Spartan-Regular',
    margin:1,
    textAlign: 'right'
  },
  weekContainer: {
    display:'flex',
    marginLeft:10,
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
    fontFamily:'Spartan-Regular',
    textAlign:'center',
  }
});