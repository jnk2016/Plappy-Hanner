import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
// import '../assets/css/goal.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import { RotationGestureHandler, TouchableOpacity } from 'react-native-gesture-handler';

export default function Goal ({navigation}) {

  return (
        <View style={styles.bigContainer}>
            <View style={styles.smallContainer}>
                <View style={styles.topContainer}>
                    <View style={styles.buttonList}>
                    <TouchableOpacity style={styles.rightButton} onPress={()=> console.log("button pressed")}>
                        <View style={styles.buttonContent}>
                            <View style={[styles.circleColor,{backgroundColor:'#aa7c7a'}]}></View>
                            <Text style={styles.rightbuttonText}>to review</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rightButton} onPress={()=> console.log("button pressed")}>
                        <View style={styles.buttonContent}>
                            <View style={[styles.circleColor,{backgroundColor:'#beaba7'}]}></View>
                            <Text style={styles.rightbuttonText}>in progress</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rightButton} onPress={()=> console.log("button pressed")}>
                        <View style={styles.buttonContent}>
                            <View style={[styles.circleColor,{backgroundColor:'#e8dbd4'}]}></View>
                            <Text style={styles.rightbuttonText}>open</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rightButton} onPress={()=> console.log("button pressed")}>
                        <View style={styles.buttonContent}>
                            <View style={[styles.circleColor,{backgroundColor:'#cad0da'}]}></View>
                            <Text style={styles.rightbuttonText}>developing</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                </View>
                
            <View style={{position:'absolute',borderLeftWidth:1,borderLeftColor:'black',width:'80%',height:'100%', marginLeft:100, marginTop:50, zIndex:-1,}}></View>
        </View>
     </View>
  );
  }

  const styles = StyleSheet.create ({
    bigContainer: {
        alignItems: 'center',
        backgroundColor:'white',
        width:'100%',
        height:'100%',
    },
    smallContainer: {
        width:'95%',
        height:'100%',
        backgroundColor:'white',
        display:'flex',
        flexDirection:'column',
        alignSelf:'center',
        justifyContent:'space-between'
    },
    topContainer: {
        width:'100%',
        height:'60%',
        alignSelf:'center',
        justifyContent:'space-around',
        marginTop:-20,
    },
    buttonList: {
        width:'100%',
        height:'70%',
        display:'flex',
        flexDirection:'column',
        alignSelf:'center',
        justifyContent:'space-between',
        position:'relative',
    },
    rightButton: {
        width:'80%',
        height:75,
        backgroundColor:'#e5e5e5',
        textAlign:'left',
        alignSelf:'center',
        zIndex:0,
        position:'absolute',
        alignContent:'flex-start',
    },
    buttonContent: {
        width:'70%',
        height:'100%',
        justifyContent:'space-between',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        textAlign:'left',
    },
    circleColor:{
        width:50,
        height:50,
        borderRadius:25,
    },
    rightbuttonText:{
        color:'black',
        fontSize:14,
        fontFamily:'spartan',
        letterSpacing:0.5,
    },
    bottomContainer: {
        alignSelf:'center',
        justifyContent:'space-around',
        width:'100%',
        height:'40%',
    },
    mainHead: {
        color:'black',
        fontSize:18,
        fontFamily:'spartan',
        letterSpacing:0.5,
        textAlign:'right',
    },
    mainBox:{
        backgroundColor:'#f9efe0',
        width:'100%',
        height:'90%',
        alignSelf:'flex-end',
        marginRight:-10,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
    },
    goalNames:{
        display:'flex',
        flexDirection:'row',
        width:'45%',
        height:'auto',
        padding:10,
        justifyContent:'space-between',
        alignSelf:'flex-end',
        textAlign:'right',
        alignItems:'center',
    },
    boxButton: {
        width:15,
        height:15,
        backgroundColor:'#c4c4c4',
    },
    goalDesc: {
        display:"flex",
        flexDirection:'column',
        color:'black',
        fontSize:14,
        fontFamily:'spartan',
        lineHeight:30,
    }
});
