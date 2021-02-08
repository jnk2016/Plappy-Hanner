import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import Happy from '../assets/images/happy.png';
import Sleepy from '../assets/images/sleepy.png';
import Satisfied from '../assets/images/satisfied.png';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Mood ({navigation}) {
  return (
    <View>
      <View style={styles.bigContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              <Text>OVERALL MOOD TODAY</Text>
              <Text style={{color:'#5d7cb8'}}>I'M FEELING:</Text>
            </Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.happyContainer}>
            <Image
              source={Happy}
              style={{width:215,height:205,alignSelf:'center',justifyContent:'space-around'}} 
            />
            <Text style={styles.happyText}>HAPPY</Text>
          </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.mainButton,{backgroundColor:'#dcf0e7'}]} onPress={()=>console.log("button pressed")}>
            <Text style={styles.buttonText}>View Check-ins</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.mainButton,{backgroundColor:'white'}]} onPress={()=>console.log("button pressed")}>
            <Text style={styles.buttonText}>Share my mood</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.weekContainer}>
          <View style={styles.weekHead}>
            <Text style={styles.weekheadText}>WEEKLY STATISTICS</Text>
            <TouchableOpacity style={styles.weekButton} onPress={()=>console.log("button pressed")}>
              <Text style={styles.weekbuttonText}>MONTH VIEW</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.weekStats}>
            <View style={styles.dayBox}>
              <Text style={styles.dayText}>SUN</Text>
              <Image
              source={Sleepy}
              style={{width:40,height:40,alignSelf:'center',justifyContent:'space-around'}} 
              />
              <Text style={styles.moodText}>sleepy</Text>
            </View>
            <View style={styles.dayBox}>
              <Text style={styles.dayText}>MON</Text>
              <Image
              source={Satisfied}
              style={{width:40,height:40,alignSelf:'center',justifyContent:'space-around'}} 
              />
              <Text style={styles.moodText}>satisfied</Text>
            </View>
            <View style={styles.dayBox}>
              <Text style={styles.dayText}>TUE</Text>
              <Image
              source={Happy}
              style={{width:40,height:40,alignSelf:'center',justifyContent:'space-around'}} 
              />
              <Text style={styles.moodText}>happy</Text>
            </View>
            <View style={styles.dayBox}>
              <Text style={styles.dayText}>WED</Text>
              <Image
              source={Sleepy}
              style={{width:40,height:40,alignSelf:'center',justifyContent:'space-around'}} 
              />
              <Text style={styles.moodText}>sleepy</Text>
            </View>
            <View style={styles.dayBox}>
              <Text style={styles.dayText}>THU</Text>
              <Image
              source={Happy}
              style={{width:40,height:40,alignSelf:'center',justifyContent:'space-around'}} 
              />
              <Text style={styles.moodText}>happy</Text>
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
    backgroundColor:'#fffbdb',
    alignContent:'center',
    width:'100%',
    height:'100%',
    paddingBottom:10,
  },
  headerContainer: {
    marginTop:20,
    width:'90%',
    height:'auto',
    padding:10,
    alignSelf:'center',
    justifyContent:'space-around',
  },
  headerText: {
    textAlign:'center',
    color:'black',
    fontFamily:'Spartan-Regular',
    fontSize:16,
    letterSpacing:2,
    flexDirection:'column',
    display:'flex',
    fontWeight:'600',
    lineHeight:20,
  },
  mainContainer: {
    width:'100%',
    height:'auto',
    display:'flex',
    flexDirection:'column',
  },
  happyContainer: {
    flexDirection:'column',
    width:'100%',
    height:'auto',
    marginTop:30,
    textAlign:'center',
  },
  happyText: {
    color:'#727272',
    marginTop:10,
    alignSelf:'center',
    fontSize:24,
    letterSpacing:2,
    fontFamily:'Spartan-Regular',
  },
  buttonContainer: {
    marginTop:'5%',
    alignSelf:'center',
    justifyContent:'space-around',
    width:'100%',
    height:'auto',
    display:'flex',
    flexDirection:'row',
  },
  mainButton: {
    width:130,
    height:'auto',
    padding:10,
    borderRadius:10,
    textAlign:'center',
  },
  buttonText: {
    color:'black',
    fontFamily:'Spartan-Regular',
    fontSize:12,
  },
  weekContainer: {
    width:'100%',
    height:'auto',
    marginTop:'12%',
    alignSelf:'baseline',
  },
  weekHead: {
    display:'flex',
    flexDirection:'row',
    alignSelf:'center',
    alignItems:'center',
    width:'90%',
    justifyContent:'space-between',
  },
  weekheadText: {
    color:'black',
    fontFamily:'Spartan-Regular',
    fontSize:16,
  },
  weekButton: {
    width:120,
    height:'auto',
    backgroundColor:'#c4c4c4',
    textAlign:'center',
    padding:10,
    borderRadius:10,
    margin:5,
  },
  weekbuttonText: {
    color:'black',
    fontFamily:'Spartan-Regular',
    fontSize:10,
  },
  weekStats: {
    width:'90%',
    height:'auto',
    alignSelf:'center',
    borderTopColor:'black',
    borderTopWidth:1,
    display:'flex',
    flexDirection:'row',
  },
  dayBox: {
    width:'auto',
    height:'auto',
    display:'flex',
    flexDirection:'column',
    margin:5,
    textAlign:'center'
  },
  dayText: {
    color:'black',
    letterSpacing:1,
    fontSize:10,
    padding:5,
  },
  moodText: {
    fontSize:10,
    fontFamily:'Spartan-Regular',
    letterSpacing:2,
    color:'black',
    padding:5,
  }
});