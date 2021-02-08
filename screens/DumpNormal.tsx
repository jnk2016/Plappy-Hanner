import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderBackground } from '@react-navigation/stack';


export default function DumpNormal ({navigation}) {

  return (
      <View style={styles.bigContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.mainContent}>
            <View style={styles.headMain}>
              <Text style={styles.headText}>FOCUS</Text>
              <View style={styles.labelBox}>
                <View style={styles.innerLabel}></View>
              </View>
            </View>
            <View style={styles.middleMain}>
              <View style={styles.dumpingBox}>
                <Text style={[styles.headText,{letterSpacing:2,}]}>dumping ground</Text>
              </View>
            </View>
            <View style={styles.bottomMain}>
              <View style={styles.priorityContainer}>
                <Text style={styles.headText}>PRIORITIES</Text>
                <View style={styles.boxContainer}>
                  <View style={styles.priorityBox}>
                    <View style={styles.priorityInner}>
                      <Text style={styles.priorityNumber}>1</Text>
                    </View>
                  </View>
                  <View style={styles.priorityBox}>
                    <View style={styles.priorityInner}>
                      <Text style={styles.priorityNumber}>2</Text>
                    </View>
                  </View>
                  <View style={styles.priorityBox}>
                    <View style={styles.priorityInner}>
                      <Text style={styles.priorityNumber}>3</Text>
                    </View>
                  </View>
                </View>
              </View>
            <TouchableOpacity style={styles.mainButton}>
              <Text style={styles.mainText}>SAVE</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
  )
};

const styles = StyleSheet.create ({
  bigContainer: {
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    paddingTop:30,
  },
  mainContainer: {
    backgroundColor:'#e5e5e5',
    width:'90%',
    height:'100%',
    alignSelf:'center',
  },
  mainContent: {
    display:'flex',
    flexDirection:'column',
    width:'95%',
    height:'85%',
    alignSelf:"center",
    justifyContent:'space-between',
  },
  headMain: {
    width:'100%',
    height:'15%',
    display:'flex',
    flexDirection:'column',
    alignSelf:'center',
  },
  headText: {
    color:'black',
    fontFamily:'times new roman',
    fontSize:14,
    letterSpacing:1,
    textAlign:'center',
    lineHeight:30,
  },
  labelBox: {
    backgroundColor:"white",
    width:'100%',
    height:'80%',
  },
  innerLabel: {
    borderWidth:1,
    borderColor:'gray',
    width:'95%',
    height:'95%',
    alignSelf:"center",
  },
  middleMain: {
    width:'100%',
    height:'40%',
    alignSelf:'center',
  },
  dumpingBox: {
    backgroundColor:'#c2c6ce',
    width:'95%',
    height:'110%',
    borderRadius:20,
    alignSelf:'center',
    textAlign:'center',
  },
  bottomMain:{
    display:'flex',
    flexDirection:'column',
    width:'100%',
    height:'25%',
    alignSelf:"center",
  },
  priorityContainer: {
    height:'100%',
    width:'100%',
    alignSelf:'center',
    textAlign:'center',
  },
  boxContainer: {
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'80%',
    alignSelf:'center',
    justifyContent:'space-between',
  },
  priorityBox: {
    width:100,
    height:100,
    backgroundColor:'white',
  },
  priorityInner: {
    borderWidth:1,
    borderColor:'gray',
    width:'95%',
    height:'95%',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'flex-end',
  },
  priorityNumber: {
    fontSize:24,
    fontFamily:'times new roman',
    fontWeight:'600',
    alignSelf:'center',
  },
  mainButton: {
    width:70,
    height:40,
    padding:15,
    backgroundColor:'white',
    borderRadius:10,
    alignSelf:'flex-end',
    textAlign:'center',
    marginTop:30,
  },
  mainText: {
    color:'black',
    fontSize:12,
    fontFamily:'spartan',
    letterSpacing:1,
  }
});