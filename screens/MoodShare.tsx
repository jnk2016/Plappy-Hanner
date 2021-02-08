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

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default class Mood extends Component<{},any> {
  

    state = {
        curTime: null,
        date: null,
        dayOfWeek: null,
        currentMonth: null,
        dateNumber: null,
        dayShort: null,
        dayDate: null,
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
              dayDate: new XDate().toString('dddd d'),
            })
          }, 1000)
    }

    render() {return(
        <View style={styles.bigContainer}>
            <View style={styles.contentAlign}>
                <View style={styles.headContainer}>
                    <Text style={styles.headText}>I'M FEELING:</Text>
                </View>
            <View style={styles.mainContainer}>
                <View style={styles.topMain}>
                    <TouchableOpacity style={styles.buttonMain}>
                        <Image
                        source={Mad}
                        style={{width:100, height:100}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMain}>
                        <Image
                        source={Satisfied}
                        style={{width:100, height:100}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMain}>
                        <Image
                        source={Sad}
                        style={{width:100, height:100}}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.middleMain}>
                    <TouchableOpacity style={styles.buttonMain}>
                        <Image
                        source={Unwell}
                        style={{width:100, height:100}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMain}>
                        <Image
                        source={Happy}
                        style={{width:105, height:100}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMain}>
                        <Image
                        source={Meh}
                        style={{width:100, height:100}}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomMain}>
                    <TouchableOpacity style={styles.buttonMain}>
                        <Image
                        source={Sleepy}
                        style={{width:100, height:100}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMain}>
                        <Image
                        source={Confident}
                        style={{width:100, height:100}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMain}>
                        <Image
                        source={Anxious}
                        style={{width:100, height:100}}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.dateText}>
                    <Text>{this.state.date}</Text>
                    <Text>{this.state.curTime}</Text>
                </Text>
            </View>

            </View>
        </View>
    );
    }}

const styles = StyleSheet.create ({
    bigContainer: {
        backgroundColor:"white",
        width:'100%',
        height:'100%',
        justifyContent:'center',
    },
    contentAlign:{
        height:'90%',
        width:'95%',
        alignSelf:'center',
        justifyContent:'space-between',
        display:'flex',
        flexDirection:'column',
    },
    headContainer: {
        width:'100%',
        height:'10%',
        alignSelf:'center',
        textAlign:'center',
    },
    headText:{
        fontFamily:'spartan',
        letterSpacing:2,
        color:'#5d7cb8',
        fontSize:20,
        textAlign:'center',
        lineHeight:20,
    },
    mainContainer:{
        display:'flex',
        flexDirection:'column',
        width:'90%',
        height:'60%',
        alignSelf:"center",
        justifyContent:'space-between',
    },
    topMain:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        height:'30%',
        alignSelf:'center',
        justifyContent:'space-between',
    },
    middleMain:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        height:'30%',
        alignSelf:'center',
        justifyContent:'space-between',
    },
    bottomMain:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        height:'30%',
        alignSelf:'center',
        justifyContent:'space-between',
    },
    buttonMain:{
        width:'auto',
        height:'auto',
    },
    bottomContainer: {
        width:'100%',
        height:'25%',
        alignSelf:'center',
        justifyContent:'center'
    },
    dateText:{
        display:'flex',
        flexDirection:'column',
        color:'black',
        letterSpacing:1,
        fontSize:18,
        fontFamily:'times new roman',
        textTransform:'uppercase',
        alignSelf:'center',
        textAlign:"center",
        lineHeight:30,
    },
})