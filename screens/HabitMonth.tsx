import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert, TouchableOpacity} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import XDate from 'xdate';
import Mad from '../assets/images/mad.png';
import Satisfied from '../assets/images/satisfied.png';
import Sad from '../assets/images/sad.png';
import Unwell from '../assets/images/UNWELL.png';
import Happy from '../assets/images/happy.png';
import Meh from '../assets/images/meh.png';
import Sleepy from '../assets/images/sleepy.png';
import Confident from '../assets/images/confident.png';
import Anxious from '../assets/images/anxious.png';
import LinearGradient from '../assets/features/LinearGradient';
import { PieChart } from 'react-minimal-pie-chart';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default class Mood extends Component<{},any> {
  

    state = {
        curTime: null,
        date: null,
        dayOfWeek: null,
        currentMonth: null,
        dateNumber: null,
        dayShort: null,
        monthYear: null,
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
              curTime : new XDate().toString('HH:mm'),
              date: new XDate().toString('dddd,  MMMM d'),
              dayOfWeek: new XDate().toString('dddd'),
              currentMonth: new XDate().toString('MMMM'),
              dateNumber: new XDate().toString('d'),
              dayShort: new XDate().toString('ddd'),
              monthYear: new XDate().toString('MMMM yyyy'),
            })
          }, 1000)
    }

    render() {return(
    <View style={styles.bigContainer}>
        <View style={styles.smallContainer}>
        <Text style={styles.monthText}>{this.state.monthYear}</Text>
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.pieCircle}>
                    <PieChart style={{alignSelf: 'center'}}
                    data={[
                        { title: 'One', value: 3, color: '#e8d7f6' },
                        {title: 'Two', value: 1, color: 'white' },
                        { title: 'Three', value: 2, color: '#e8d7f6' },
                        { title: 'Four', value: 24, color: 'white' },
                    ]} lineWidth={20} viewBoxSize={[100,100]}
                    />
                    <Text style={styles.pieText}>MAKE BED</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pieCircle}>
                    
                    <PieChart style={{alignSelf: 'center'}}
                    data={[
                        { title: 'One', value: 3, color: '#e8d7f6' },
                        {title: 'Two', value: 27, color: 'white' },
                    ]} lineWidth={20} viewBoxSize={[100,100]}
                    />
                        <Text style={styles.pieText}>MOISTURIZE</Text>
                    
                </TouchableOpacity>
            </View>
            <View style={styles.middleContainer}>
                <TouchableOpacity style={styles.pieCircle}>
                    
                    <PieChart style={{alignSelf: 'center'}}
                    data={[
                        { title: 'One', value: 4, color: '#e8d7f6' },
                        {title: 'Two', value: 26, color: 'white' },
                    ]} lineWidth={20} viewBoxSize={[100,100]}
                    />
                        <Text style={styles.pieText}>VITAMINS</Text>
                   
                </TouchableOpacity>
                <TouchableOpacity style={styles.pieCircle}>
                    
                    <PieChart style={{alignSelf: 'center'}}
                    data={[
                        { title: 'One', value: 3, color: '#e8d7f6' },
                        {title: 'Two', value: 1, color: 'white' },
                        {title: 'Three', value: 1, color:'#e8d7f6'},
                        {title: 'Four', value: 25, color:'white'},
                    ]} lineWidth={20} viewBoxSize={[100,100]}
                    />
                        <Text style={[styles.pieText,{marginTop:-90}]}>SKIN ROUTINE</Text>
                    
                </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.pieCircle}>
                   
                    <PieChart style={{alignSelf: 'center'}}
                    data={[
                    { title: 'One', value: 1, color: '#e8d7f6' },
                        {title: 'Two', value: 29, color: 'white' },
                    ]} lineWidth={20} viewBoxSize={[100,100]}
                    />
                        <Text style={styles.pieText}>PRAY</Text>
                   
                </TouchableOpacity>
                <TouchableOpacity style={styles.pieCircle}>
                   
                    <PieChart style={{alignSelf: 'center'}}
                    data={[
                        {title: 'One', value: 4, color: '#e8d7f6'},
                        {title: 'Two', value: 1, color: 'white' },
                        {title: 'Three', value: 2, color:'#e8d7f6'},
                        {title: 'Four', value:23, color:'white'},
                    ]} lineWidth={20} viewBoxSize={[100,100]}
                    />
                        <Text style={[styles.pieText,{marginTop:-90}]}>CLEAN ROOM</Text>
                    
                </TouchableOpacity>
            </View>
        </View>
        </View>
    </View>
  );
  }}

  const styles = StyleSheet.create ({
    bigContainer: {
        width:'100%',
        height:'100%',
        justifyContent:'center',
        backgroundColor:'#f1dff4',
    },
    smallContainer: {
        width:'90%',
        height:'90%',
        alignSelf:'center',
        justifyContent:'space-around',
    },
    monthText: {
        fontFamily:"spartan",
        fontSize:20,
        fontWeight:'600',
        color:'black',
        textTransform:'uppercase',
        textAlign:'center',
        letterSpacing:1,
    },
    mainContainer: {
        display:'flex',
        flexDirection:'column',
        width:'95%',
        height:'80%',
        alignSelf:'center',
        justifyContent:"space-between",
    },
    topContainer:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        height:'30%',
        alignSelf:'center',
        justifyContent:'space-between',
    },
    middleContainer:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        height:'30%',
        alignSelf:'center',
        justifyContent:'space-between',
    },
    bottomContainer:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        height:'30%',
        alignSelf:'center',
        justifyContent:'space-between',
    },
    pieCircle: {
        width:140,
        height:140,
        borderRadius:75,
        borderWidth:1,
        borderColor:'gray',
        alignItems:'center',
    },
    pieText:{
        color:'black',
        fontFamily:"spartan",
        fontSize:12,
        display:'flex',
        flexDirection:'column',
        width:100,
        letterSpacing:1,
        lineHeight:20,
        alignSelf:'center',
        marginTop:-80,
        textAlign:'center',
    },
  })