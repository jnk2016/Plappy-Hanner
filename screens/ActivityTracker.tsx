import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert, TouchableOpacity} from 'react-native';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import { PieChart } from 'react-minimal-pie-chart';
import LinearGradient from '../assets/features/LinearGradient';
import Right from '../assets/images/right_arrow.png';


export default function ActivityTracker ({navigation}) {
  return (
    <View style={styles.bigContainer}>
      <View style={styles.smallContainer}>
        <View style={styles.headPosition}>
          <View style={styles.waterCircle}>
            <PieChart style={{alignSelf: 'center'}}
                data={[
                  { title: 'One', value: 46, color: '#c8d8f9' },
                    {title: 'Two', value: 1, color: '#7394d3' },
                  ]} lineWidth={10} viewBoxSize={[150,150]}
                  />
              <View style={styles.waterinnerCircle}>
              <PieChart style={{alignSelf: 'center'}}
                data={[
                  { title: 'One', value: 46, color: '#c8d8f9' },
                    {title: 'Two', value: 1, color: '#7394d3' },
                    { title: 'Three', value: 52, color: '#d7e0f1' },
                    { title: 'Four', value: 1, color: '#7394d3' },
                ]} lineWidth={100} viewBoxSize={[100,100]}
                />
              <Text style={styles.waterText}>48%</Text>
              </View>
          </View>
          <View style={styles.statisticText}>
            <Text style={styles.statText}>
              <Text style={{fontSize:24, fontWeight:'800'}}>5/8</Text>
              <Text>cups</Text>
            </Text>
            <Text style={styles.statText}>
              <Text style={{fontSize:24, fontWeight:'800'}}>2500ml</Text>
              <Text>daily goal</Text>
            </Text>
          </View>
        </View>
            <TouchableOpacity style={styles.smallButton} onPress={()=>navigation.navigate('WaterRecord', {screen:'WaterRecord'})}>
                <Text style={styles.buttonText}>RECORD WATER</Text>
            </TouchableOpacity>
            <View style={{justifyContent:'flex-end'}}>
            <View style={styles.historyContainer}>
              <Text style={styles.historyText}>VIEW HISTORY</Text>
              <TouchableOpacity style={styles.historyButton} onPress={()=>navigation.navigate('WaterHistory', {screen:'WaterHistory'})}>
                  <Image
                  source={Right}
                  style={{width:28, height:28, tintColor:'white'}}
                  />
              </TouchableOpacity>
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
    fontFamily:'spartan',
  },
  smallContainer: {
    width:'100%',
    height:'100%',
    backgroundColor:'#d7e0f1',
    fontFamily:'spartan',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-end',
  },
  headText: {
    textAlign:'left',
    fontSize:20,
    color:'black',
    letterSpacing:1,
    margin:10,
  },
  headPosition: {
    display:'flex',
    flexDirection:'column',
    height:'auto',
    width:'90%',
    alignSelf:'center',
    justifyContent:'space-between',
  },
  waterCircle: {
    marginTop:10,
    borderWidth:6,
    borderColor:'rgba(93,124,184,0.5)',
    width:300,
    height:300,
    alignSelf:'center',
    alignContent:'center',
    justifyContent:'space-around',
    borderRadius:180,
    textAlign:'center',
  },
  waterinnerCircle: {
    width:250,
    height:250,
    borderRadius:100,
    alignSelf:'center',
    marginBottom:10,
  },
  waterText: {
    marginTop:-130,
    display:'flex',
    flexDirection:'column',
    color:'white',
    fontSize:48,
  },
  topText: {
    alignSelf:'center',
    justifyContent:'space-between',
    width:'90%',
    display:'flex',
    flexDirection:'row',
    marginTop:10,
  },
  leftText: {
    textAlign:'center',
    display:'flex',
    flexDirection:'column',
    color:'black',
    fontSize:14,
    fontFamily:'spartan',
  },
  rightText: {
    textAlign:'center',
    display:'flex',
    flexDirection:'column',
    color:'black',
    fontSize:14,
    fontFamily:'spartan',
  },
  recordHead: {
    width:'98%',
    height:'auto',
    alignSelf:'center',
    justifyContent:'space-between',
    display:'flex',
    flexDirection:'row',
    padding:5,
    color:'white',
  },
  totalText: {
    color:'black',
    fontSize:18,
    fontFamily:'spartan',
    letterSpacing:1,
  },
  totalwaterText: {
    color:'white',
    fontSize:20,
    fontFamily:'spartan',
    letterSpacing:2,
    fontWeight:'600'
  },
  recordContainer: {
    width:'80%',
    height:'50%',
    alignSelf:'center',
    justifyContent:'center',
    backgroundColor:'#8c96ab',
    marginTop:20,
  },
  recordInfo: {
    alignSelf:'center',
    justifyContent:'space-around',
    width:'90%',
    height:'auto',
    marginTop:20,
  },
  recordBorder:{
    borderTopWidth:1,
    borderTopColor:'white',
    width:'100%',
    height:'auto',
    padding:10,
    alignSelf:'center',
    justifyContent:'space-between',
    display:'flex',
    flexDirection:'row',
  },
  recordTime: {
    color:'white',
    fontSize:12,
    fontFamily:'spartan',
  },
  recordNumber: {
    color:'white',
    fontSize:12,
    fontFamily:'spartan',
    fontWeight:'600',
  },
  smallButton: {
    width:'40%',
    height:'auto',
    padding:10,
    backgroundColor:'#e5e5e5',
    textAlign:'center',
    marginTop:20,
    alignSelf:'center',
    borderRadius:10,
  },
  buttonText: {
    color:'black',
    fontSize:10,
    fontFamily:'spartan',
  },
  statisticText:{
    alignSelf:'center',
    width:"100%",
    height:'auto',
    padding:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:50,
  },
  historyContainer:{
    marginTop:100,
    backgroundColor:'#a0b2d4',
    width:'100%',
    height:'auto',
    padding:10,
    justifyContent:'space-between',
    alignText:'left',
    alignItems:'center',
    display:'flex',
    flexDirection:'row',
  },
  historyText:{
    color:'white',
    fontSize:18,
    fontFamily:'spartan',
    fontWeight:'600',
  },
  historyButton:{
    color:'white'
  },
  statText:{
    display:'flex',
    flexDirection:'column',
    color:'#383838',
    textAlign:'left',
    fontFamily:'spartan',
    fontSize:18,
  }
});