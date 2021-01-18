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
                <View style={styles.mainContainer}>
                <Text style={styles.mainHead}>upcoming deadlines</Text>
                    <View style={styles.mainBox}>
                        <View style={styles.goalNames}>
                            <View style={styles.projectLines}>
                                <View style={styles.projectBox}>
                                    <Text style={styles.goalDates}>1/20</Text>
                                </View>
                                <Text style={styles.goalText}>APP PROJECT</Text>
                            </View>
                            <View style={styles.projectLines}>
                                <View style={styles.projectBox}>
                                    <Text style={styles.goalDates}>1/20</Text>
                                </View>
                                <Text style={styles.goalText}>APP PROJECT</Text>
                            </View>
                            <View style={styles.projectLines}>
                                <View style={styles.projectBox}>
                                    <Text style={styles.goalDates}>1/20</Text>
                                </View>
                                <Text style={styles.goalText}>APP PROJECT</Text>
                            </View>
                            <View style={styles.projectLines}>
                                <View style={styles.projectBox}>
                                    <Text style={styles.goalDates}>1/20</Text>
                                </View>
                                <Text style={styles.goalText}>APP PROJECT</Text>
                            </View>
                            <View style={styles.projectLines}>
                                <View style={styles.projectBox}>
                                    <Text style={styles.goalDates}>1/20</Text>
                                </View>
                                <Text style={styles.goalText}>APP PROJECT</Text>
                            </View>
                            <View style={styles.projectLines}>
                                <View style={styles.projectBox}>
                                    <Text style={styles.goalDates}>1/20</Text>
                                </View>
                                <Text style={styles.goalText}>APP PROJECT</Text>
                            </View>
                            
                        </View>
                </View>
                    <View style={styles.mainbuttonContainer}>

                        <TouchableOpacity style={styles.mainButton}>
                            <Text style={styles.mainbuttonText}>ADD GOAL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.mainButton}>
                            <Text style={styles.mainbuttonText}>VIEW ALL</Text>
                        </TouchableOpacity>
                    </View>
            </View>
            <View style={styles.sideContainer}>
                    <View style={styles.leftContainer}>
                        <TouchableOpacity style={styles.leftButton}>
                            <Text style={styles.leftbuttonText}>COMPLETED</Text>
                        </TouchableOpacity>
                </View> 
                <View style={styles.rightContainer}>
                    <TouchableOpacity style={[styles.rightButtons,{backgroundColor:'#bc855c'}]} onPress={()=> console.log("button pressed")}>
                        <Text style={styles.rightbuttonText}>to review</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.rightButtons,{backgroundColor:'#ddbda7'}]} onPress={()=> console.log("button pressed")}>
                        <Text style={styles.rightbuttonText}>in progress</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.rightButtons,{backgroundColor:'#dcc7b4'}]} onPress={()=> console.log("button pressed")}>
                        <Text style={styles.rightbuttonText}>open</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.rightButtons,{backgroundColor:'#d2cac2'}]} onPress={()=> console.log("button pressed")}>
                        <Text style={styles.rightbuttonText}>developing</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
     </View>
  );
  }

  const styles = StyleSheet.create ({
    bigContainer: {
        alignItems: 'center',
        paddingBottom:100,
        backgroundColor:'white',
        width:'100%',
        height:'100%',
        position:'relative',
    },
    smallContainer: {
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        display:'flex',
        flexDirection:'column',
    },
    mainContainer: {
        backgroundColor:'#f9efe0',
        width:'80%',
        height:'100%',
        position:'absolute',
        alignSelf:'center',
        display:'flex',
        flexDirection:'column',
        marginTop:20,
        zIndex:0,
    },
    mainHead: {
        color:'black',
        fontSize:16,
        fontFamily:'spartan',
        textAlign:'left',
        marginTop:20,
        marginLeft:30,
        marginBottom:20,
    },
    mainBox: {
        width:'75%',
        height:'80%',
        borderColor:'black',
        borderWidth:1,
        alignSelf:'center',
        // marginTop:150,
        // marginRight:80,
    },
    goalNames: {
        display:'flex',
        flexDirection:'column',
        width:'95%',
        height:'85%',
        alignSelf:'center',
        justifyContent:'space-between',
        padding:10,
    },
    projectLines: {
        width:'100%',
        height:'5%',
        textAlign:'left',
        display:'flex',
        flexDirection:'column',
        margin:1,
    },
    projectBox: {
        borderBottomColor:'#cf6363',
        borderBottomWidth:2,
        width:'90%',
        height:'100%',
        margin:1,
    },
    goalDates: {
        color:'black',
        fontSize:14,
        fontFamily:'spartan',
        fontWeight:'600',
    },
    goalText: {
        color:'black',
        fontSize:14,
        fontFamily:'spartan',
        letterSpacing:1,
    },
    mainbuttonContainer: {
        display:'flex',
        flexDirection:'row',
        width:'80%',
        height:'30%',
        alignSelf:'center',
        justifyContent:'space-between',
        marginTop:50,
    },
    mainButton: {
        width:100,
        height:'auto',
        backgroundColor:'#C4C4C4',
        textAlign:'center',
        borderRadius:10,
        padding:10,
    },
    mainbuttonText: {
        color:'black',
        fontSize:12,
        fontFamily:'spartan',
    },
    sideContainer: {
        width:'100%',
        height:'100%',
        zIndex:1,
        display:'flex',
        flexDirection:'row',
    },
    leftContainer: {
        width:'50%',
        height:'100%',
        marginTop:450,
        marginLeft:-30,
    },
    leftButton: {
        borderWidth:1,
        borderColor:'black',
        height:40,
        width:175,
        transform:[{rotate:'-90deg'}],
        textAlign:'center',
        padding:10,
    },
    leftbuttonText: {
        color:'black',
        fontSize:20,
        fontFamily:'spartan',
    },
    rightContainer:{
        width:'80%',
        height:'80%',
        display:'flex',
        flexDirection:'column',
        alignSelf:'center',
        justifyContent:'space-between',
        marginLeft:100,
    },
    rightButtons: {
        width:100,
        height:100,
        borderRadius:50,
        textAlign:'center',
    },
    rightbuttonText: {
        color:'white',
        fontSize:16,
        fontFamily:'spartan',
        fontWeight:'600',
        paddingTop:40,
    }
});
