import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert, TouchableOpacity} from 'react-native';
// import '../assets/css/selfcare.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import { PieChart } from 'react-minimal-pie-chart';
import LinearGradient from '../assets/features/LinearGradient';
import XDate from 'xdate';


const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default class Home extends Component<{},any> {

    state = {
        curTime: null,
        date: null,
        dayOfWeek: null,
        currentMonth: null,
        dayDate: null,
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
              curTime : new XDate().toString('HH:mm'),
              date: new XDate().toString('MMM d yyyy'),
              dayOfWeek: new XDate().toString('dddd'),
              currentMonth: new XDate().toString('MMMM'),
              dayDate: new XDate().toString('dddd d'),
            })
          }, 1000)
    }

    render() {return(
      <View style={styles.bigContainer}>
          <View style={styles.dateBox}>
              <Text style={styles.dateText}>{this.state.dayDate}</Text>
          </View>
          <View style={styles.mainContainer}>
              <View style={styles.textHead}>
                <Text style={styles.topText}>
                <Text style={{letterSpacing:1,}}>DAILY GOAL:</Text>
                <Text>2500ml</Text>
                </Text>
              </View>
              <View style={styles.tableContainer}>
                <View style={styles.graphCircle}>
                    <Text style={styles.graphText}>1200ml</Text>
                </View>
                <View style={styles.totalGraph}>
                    <View style={styles.doneGraph}></View>
                </View>
              </View>
              <TouchableOpacity style={styles.mainButton}>
                  <Text style={styles.buttonText}>RECORD WATER</Text>
              </TouchableOpacity>
          </View>
      </View>
  );
}}

const styles = StyleSheet.create ({
    bigContainer:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        justifyContent:'center'
    },
    dateBox:{
        borderBottomColor:'black',
        borderBottomWidth:2,
        width:'85%',
        height:'5%',
        textAlign:'center',
        alignSelf:"center",
    },
    dateText:{
        color:'black',
        textTransform:'uppercase',
        fontSize:14,
        fontFamily:"spartan",
        letterSpacing:1,
        fontWeight:'600'
    },
    mainContainer: {
        backgroundColor:'#8c96ab',
        width:'100%',
        height:'90%',
        paddingTop:30,
    },
    textHead:{
        display:'flex',
        flexDirection:'column',
        width:'90%',
        height:'10%',
        alignSelf:'center',
        justifyContent:'space-around',
    },
    topText:{
        textAlign:'center',
        color:'white',
        fontSize:18,
        fontWeight:'800',
        fontFamily:'spartan',
    },
    headText:{
        color:'white',
        fontSize:18,
        fontFamily:'spartan',
        letterSpacing:1,
        textAlign:'left',
        fontWeight:'600',
    },
    tableContainer:{
        width:'90%',
        height:'70%',
        display:'flex',
        flexDirection:'row',
        alignSelf:"center",
        justifyContent:'space-around',
        alignItems:'center',
    },
    graphCircle:{
        width:80,
        height:80,
        borderRadius:40,
        backgroundColor:'#5d7cb8',
        textAlign:'center',
    },
    graphText:{
        fontWeight:'600',
        color:'white',
        fontFamily:'spartan',
        alignSelf:'center',
        paddingTop:30,
    },
    totalGraph:{
        width:100,
        height:450,
        backgroundColor:'white',
        borderRadius:20,
        alignSelf:'center',
        justifyContent:'flex-end',
    },
    doneGraph:{
        backgroundColor:'#5d7cb8',
        width:100,
        height:210,
        borderRadius:20,
        alignSelf:'center',
    },
    mainButton:{
        backgroundColor:'#e5e5e5',
        width:140,
        height:35,
        padding:10,
        textAlign:'center',
        alignSelf:"center",
        borderRadius:10,
    },
    buttonText:{
        color:'black',
        fontSize:12,
        fontFamily:'spartan',
    },
})