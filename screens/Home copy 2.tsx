import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import AxiosLogin from '../Axios Functions/AxiosLogin';
import Modal from 'modal-react-native-web';
import '../assets/css/hearthome.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png'; 


export default function Home ({navigation}){
    
    return(
      <View style={styles.container}>
          <View style={styles.variables}>
                  <Text style={styles.time}>15:01</Text>
                  <Text style={styles.day}>friday, january 8</Text>
              </View>
          <View style={styles.smallcontainer}>
              
              <View style={styles.sections}>
                  <View style={styles.left}>
                    <View style={styles.circleShapeGoal}>
                        <Text style={styles.insideGoal}>4</Text>
                    </View>
                    <Text style={styles.subscriptGoal}>goals</Text>
                    <View style={styles.numberTask}>
                        <Text style={styles.insideTask}>12</Text>
                    </View>
                    <Text style={styles.subscriptTask}>tasks</Text>
                    <View style={styles.numberEvent}>
                        <Text style={styles.insideEvent}>3</Text>
                    </View>
                    <Text style={styles.subscriptEvent}>events</Text>
                    </View>
                  </View>
                <View style={styles.right}>
                   <View style={styles.calendar}>
                        <View style={styles.calendar}>
                            <View style={styles.week}>
                                <Text style={styles.day}>SUN</Text>
                                <Text style={styles.day}>SUN</Text>
                                <Text style={styles.day}>SUN</Text>
                                <Text style={styles.day}>SUN</Text>
                                <Text style={styles.day}>SUN</Text>
                                <Text style={styles.day}>SUN</Text>
                                <Text style={styles.day}>SUN</Text>
                            </View>
                        </View>
                    </View> 
                </View>
          </View>
      </View>
    );
  }
  
  
  
  const styles = StyleSheet.create({
    container: {
      justifyContent:'center',
      alignItems: 'center',
    },
    smallcontainer: {
        backgroundColor: '#fffbdb',
        width:'100%',
        height:'60',
    },
    variables: {
        backgroundColor:'#e5e5e5',
        width:'50%',
        height:'20',
    },
    time: {
        fontSize:54,
        fontFamily:'Abhaya Libre',
        textAlign:'left',
    },
    day: {
        fontSize:18,
        fontFamily:'Abhaya Libre',
    },
    left: {
        marginVertical: '2%',
    },
    insideGoal: {
        width:40,
        height:40,
        borderRadius: 100/2,
        backgroundColor:'#9cc3b0',
        textAlign:'center',
        fontSize:20,
        paddingTop:'2%',
    },
    insideTask: {
        width:40,
        height:40,
        borderRadius: 100/2,
        backgroundColor:'#e4e4e4',
        textAlign:'center',
        fontSize:20,
        paddingTop:'2%',
    },
    insideEvent: {
        width:40,
        height:40,
        borderRadius: 100/2,
        backgroundColor:'#9EB4DF',
        textAlign:'center',
        fontSize:20,
        paddingTop:'2%',
    },
    text: {
      color:'black',
      fontSize:30,
    }
  })