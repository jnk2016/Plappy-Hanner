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
        <Text style={styles.headToday}>TODAY</Text>
        <View style={styles.mainContainer}>
          <View style={styles.topContainer}>
            <View style={styles.topContainer}>
              <View style={styles.topHeader}>
                <View style={styles.topLeft}>
                  <View style={styles.headerText}>
                    <Text style={styles.graphHeader}>
                      <Text>DAILY AVERAGE:</Text>
                      <Text style={{color:'#5d7cb8',fontSize:18}}>1000ml</Text>
                    </Text>
                  </View>
                </View>
                <View style={styles.topRight}>
                  <TouchableOpacity style={styles.headButton} onPress={()=>console.log("button pressed")}>
                    <Text style={styles.buttonText}>WEEK</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.headButton} onPress={()=>console.log("button pressed")}>
                    <Text style={styles.buttonText}>MONTH</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.graphContainer}>
                <View style={styles.graphBox}>
                  <View style={styles.graphLeft}>
                    <View style={{flexDirection:'row',alignItems:'center'}}/>
                      <View style={{flex: 1, height: 1, backgroundColor: '#8c96ab'}}/></View>
                      </View>
                      <View style={styles.barOrder}>
                        <View style={styles.barsunGraph}></View>
                        <View style={styles.barmonGraph}></View>
                        <View style={styles.bartueGraph}></View>
                        <View style={styles.barwedGraph}></View>
                        <View style={styles.barthuGraph}></View>
                        <View style={styles.barfriGraph}></View>
                      </View>
                    <View style={styles.graphDays}>
                      <Text style={styles.weekDays}>S</Text>
                      <Text style={styles.weekDays}>M</Text>
                      <Text style={styles.weekDays}>T</Text>
                      <Text style={styles.weekDays}>W</Text>
                      <Text style={styles.weekDays}>R</Text>
                      <Text style={styles.weekDays}>F</Text>
                      <Text style={styles.weekDays}>S</Text>
                    </View>
                  </View>
                  <View style={styles.graphRight}>
                    <Text style={styles.graphNumbers}>2500 ml</Text>
                    <Text style={styles.graphAverage}>avg</Text>
                    <Text style={styles.graphNumbers}>0</Text>
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
    alignItems:'center',
    backgroundColor:'white',
    width:'100%',
    height:'100%',
  },
  smallContainer: {
    width:'100%',
    height:'100%',
  },
  headToday: {
    color:'black',
    letterSpacing:1,
    fontSize:18,
    textAlign:'left',
  },
  mainContainer: {
    width:'100%',
    height:'auto',
    backgroundColor:'#d7e0f1',
  },
  topContainer: {
    width:'90%',
    height:'auto',
  },
  topHeader: {
    display:'flex',
    flexDirection:'row',
    width:'100%',
    marginTop:10,
  },
  topLeft: {
    width:'50%',
    textAlign:'left',
  },
  headerText: {
    marginLeft:10,
  },
  graphHeader: {
    display:'flex',
    flexDirection:'column',
    fontSize:12,
    color:'black',
  },
  topRight: {
    width:'50%',
    display:'flex',
    flexDirection:'row',
  },
  headButton: {
    borderRadius:30,
    backgroundColor:'#93b4df',
    width:'40%',
    padding:10,
    margin:5,
  },
  buttonText: {
    letterSpacing:1,
    color:'black',
    fontSize:10,
  },
  graphContainer: {
    width:'100%',
    height:'auto',
    marginLeft:10,
  },
  graphBox: {
    width:'100%',
    height:'auto',
    display:'flex',
    flexDirection:'row',
  },
  graphLeft: {
    borderBottomWidth:1,
    borderTopWidth:1,
    borderColor:'#383838',
  },
  barOrder: {
    display:'flex',
    flexDirection:'row',
  },
  barsunGraph: {
    width:20,
    height:30,
    backgroundColor:'#5d7cb8',
  },
  barmonGraph: {
    width:20,
    height:60,
    backgroundColor:'#5d7cb8',
  },
  bartueGraph: {
    width:20,
    height:20,
    backgroundColor:'#5d7cb8',
  },
  barwedGraph: {
    width:20,
    height:50,
    backgroundColor:'#5d7cb8',
  },
  barthuGraph: {
    width:20,
    height:80,
    backgroundColor:'#5d7cb8',
  },
  barfriGraph: {
    width:20,
    height:90,
    backgroundColor:'#5d7cb8',
  },
  graphDays: {
    display:'flex',
    flexDirection:'row',
  },
  weekDays: {
    color:'#a0b2d4',
    fontSize:10,
  }
});