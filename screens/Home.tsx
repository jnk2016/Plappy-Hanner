import React, {Component, useState, } from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert, TouchableOpacity} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import XDate from 'xdate';
import LinearGradient from '../assets/features/LinearGradient';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default class Home extends Component<{},any> {

    state = {
        curTime: null,
        date: null,
        dayOfWeek: null,
        currentMonth: null,
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
              curTime : new XDate().toString('HH:mm'),
              date: new XDate().toString('MMM d yyyy'),
              dayOfWeek: new XDate().toString('dddd'),
              currentMonth: new XDate().toString('MMMM'),
            })
          }, 1000)
    }

    render() {return(
    <View style={styles.container}>
       <View style={styles.smallContainer}>
           <View style={styles.containerContent}>
               <View style={styles.bigContainers}>
                   <View style={styles.topContainer}>
                        <Text style={{height:'10%', fontSize:20, color:'black',letterSpacing:0.5, fontWeight:'600', fontFamily:'spartan', textAlign:'center', }}>TODAY</Text>
                    <View style={styles.headContainer}>
                        <View style={styles.innerHead}>
                            <View style={styles.innerContent}>
                                <View style={styles.rightInner}>
                                    <View style={styles.rightLabel}>
                                        <Text style={styles.rightText}>{this.state.curTime}</Text>
                                    </View>
                                </View>
                                <View style={styles.bottomInner}>
                                    <View style={styles.circleContainer}>  
                                        <View style={styles.smallCircle}></View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.blockCircle}>
                            <Text style={styles.headText}>
                                <Text>{this.state.dayOfWeek}</Text>
                                <Text style={{fontWeight:'800'}}>{this.state.date}</Text>
                            </Text>
                        </View>
                    </View>
                    </View>
                    <View style={styles.calendarContainer}>
                        <View style={styles.bottomContainer}>
                            <Text style={styles.monthText}>{this.state.currentMonth}</Text>
                        <Calendar // HOW TO USE CALENDAR https://github.com/wix/react-native-calendars
                        // Collection of dates that have to be marked.
                        // markedDates={{
                        //     '2021-01-02': {textColor: 'red'},
                        //     '2021-01-03': {textColor: 'red'},
                        //     '2021-01-04': {textColor: 'red'},
                        //     '2021-01-05': {textColor: 'red'},
                        //     '2021-01-06': {textColor: 'red', marked: true, dotColor: 'pink'}
                        // }}
                        // // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
                        // markingType='period'
                        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                        monthFormat={''}
                        // Disable left arrow. Default = false
                        disableArrowLeft={true}
                        hideArrows={true}
                        // Disable right arrow. Default = false
                        disableArrowRight={true}
                        theme={{
                            textMonthFontSize: 10,
                            'stylesheet.calendar.header': {
                                week: {
                                marginTop: '-10%',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                }
                            },
                            textDayHeaderFontSize: 11,
                        }}
                        dayComponent={({date, state}) => {
                            return (
                            <View>
                                <Text style={{textAlign: 'center', marginVertical: '2%', fontSize: 8,fontFamily: 'Spartan', letterSpacing:1, fontWeight: '500', color: state === 'disabled' ? 'gray' : 'black'}}>
                                {date.day}
                                </Text>
                            </View>
                            );
                        }}
                        // Do not show days of other months in month page. Default = false
                        hideExtraDays={true}
                        style={{width: '100%', alignSelf: 'center', paddingBottom: '3%', marginHorizontal: '6%', marginVertical: '4%'}}
                        />
                        </View>
                        <View style={styles.buttonContainer}>
                            <View style={styles.buttonContent}>
                                <View style={styles.scheduleBox}>
                                    <Text style={{fontSize:14,marginTop:10,color:'black', fontWeight:'600', letterSpacing:0.1,fontFamily:'spartan'}}>SCHEDULE</Text>
                                </View>
                            </View>
                            <View style={styles.buttonRow}>
                                <View style={styles.buttonOutline}>
                                    <TouchableOpacity style={styles.mainButton} onPress={()=>this.props.navigation.navigate('HomeWeekly', {screen:'HomeWeekly'})}>
                                        <Text style={styles.buttonText}>WEEK</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.buttonOutline}>
                                    <TouchableOpacity style={styles.mainButton} onPress={()=>this.props.navigation.navigate('HomeMonthly',{screen:'HomeMonthly'})}>
                                        <Text style={styles.buttonText}>MONTH</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.yellowContainer}>
                    <View style={styles.yellowContent}>
                        <View style={styles.yellowBox}>
                            <View style={[styles.boxText,{backgroundColor:'#8c96ab'}]}>
                                <Text style={styles.numberBox}>9</Text>
                            </View>
                            <Text style={styles.yellowText}>GOALS</Text>
                        </View>
                        <View style={styles.yellowBox}>
                            <View style={[styles.boxText,{backgroundColor:'#A0B2D4'}]}>
                                <Text style={styles.numberBox}>11</Text>
                            </View>
                            <Text style={styles.yellowText}>EVENTS</Text>
                        </View>
                        <View style={styles.yellowBox}>
                            <View style={[styles.boxText,{backgroundColor:'#C4C4C4'}]}>
                                <Text style={styles.numberBox}>6</Text>
                            </View>
                            <Text style={styles.yellowText}>HABITS</Text>
                        </View>
                        <View style={styles.yellowBox}>
                            <View style={[styles.boxText,{backgroundColor:'#D7E0F1'}]}>
                                <Text style={styles.numberBox}>5</Text>
                            </View>
                            <Text style={styles.yellowText}>TASKS</Text>
                        </View>
                    </View>
                </View>
            </View>
       </View>     
    </View>
    );
  }}
  
  
  
  const styles = StyleSheet.create({
    container: {
    //   justifyContent:'center',
    //   alignItems: 'center',
        height: '100%',
        width:'100%',
        backgroundColor: 'white',
    },
    smallContainer: {
        width:'100%',
        height:'100%',
        alignSelf:'center',
        alignContent:'center',
        display:'flex',
        flexDirection:'column',
    },
    containerContent:{
        marginTop:20,
        width:'95%',
        height:'95%',
        display:'flex',
        flexDirection:'column',
        alignSelf:'center',
        justifyContent:'space-around',
        fontFamily:'spartan',
        position:'relative',
    },
    bigContainers: {
        marginTop:20,
        width:'100%',
        height:'100%',
        justifyContent:'space-between',
        alignSelf:'center',
        display:'flex',
        flexDirection:'column',
        position:'absolute',
        zIndex:0,
    },
    topContainer: {
        width:'100%',
        height:'40%',
        alignSelf:'center',
        display:'flex',
        flexDirection:'column',    
    },
    headContainer:{
        backgroundColor:'#dda7a7',
        width:'100%',
        height:'100%',
        alignSelf:'center',
        display:'flex',
        flexDirection:'column',
    },
    innerHead: {
        backgroundColor:'white',
        width:'90%',
        height:'60%',
        alignSelf:'center',
        justifyContent:'space-around',
        marginTop:10,
    },
    innerContent: {
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignSelf:'center',
        justifyContent:'space-between',
    },
    rightInner: {
        height:'40%',
        width:'90%',
        alignSelf:'center',
        justifyContent:'space-around'
    },
    rightLabel: {
        width:80,
        height:40,
        alignContent:'center',
        alignSelf:'flex-end',
        backgroundColor:'#8c96ab',
    },
    rightText: {
        color:'white',
        fontSize:24,
        letterSpacing:0.1,
        marginLeft:10,
        marginTop:5,
    },
    bottomInner: {
        width:'100%',
        height:'60%',
        alignSelf:'center',
        position:'relative',
    },
    circleContainer: {
        borderTopWidth:2,
        borderTopColor:'#727272',
        borderColor:'#dda7a7',
        width:320,
        height:320,
        borderRadius:160,
        alignSelf:'center',
    },
    smallCircle: {
        backgroundColor:'#f6e197',
        width:15,
        height:15,
        alignSelf:'center',
        borderRadius:8,
        marginTop:-5,
    },
    blockCircle: {
        backgroundColor:'#dda7a7',
        width:'100%',
        height:'40%',
        alignSelf:'center',
    },
    headText: {
        display:'flex',
        flexDirection:'column',
        color:'white',
        letterSpacing:1,
        fontSize:24,
        textAlign:'center',
        marginTop:20,
        fontFamily:"spartan",
        textTransform:'uppercase',
    },
    yellowContainer: {
        backgroundColor:'#f9efe0',
        width:'75%',
        height:'15%',
        alignContent:'center',
        alignSelf:'center',
        zIndex:1,
        marginBottom:-10,
    },
    yellowContent: {
        display:'flex',
        flexDirection:'row',
        width:'98%',
        height:'90%',
        alignSelf:'center',
        justifyContent:'space-between',
        padding:15,
        marginLeft:10,
    },
    yellowBox: {
        display:'flex',
        flexDirection:'column',
        width:'28%',
        height:'100%',
    },
    boxText: {
        alignContent:'center',
        width:40,
        height:40,
        textAlign:'center',
    },
    numberBox: {
        padding:10,
        color:'black',
        fontSize:20,
    },
    yellowText: {
        fontSize:12,
        width:'100%',
        height:'auto',
    },
    dateText: {
        display:'flex',
        flexDirection:'column',
        width:'auto',
        color:'black',
        fontFamily:'spartan',
        fontSize:14,
        letterSpacing:1,
        lineHeight:30,
    },
    calendarContainer: {
        backgroundColor:'#bcc1bf',
        alignSelf:'center',
        width:'100%',
        height:'45%',
        alignContent:'center',
        justifyContent:'space-around'
    },
    bottomContainer: {
        marginTop:40,
        display:'flex',
        flexDirection:'column',
        width:'65%',
        height:'60%',
        alignSelf:'center',
        justifyContent:'center',
        backgroundColor:'white',
    },
    monthText: {
        color:'rgba(56,56,56,0.8)',
        fontSize:16,
        fontFamily:'spartan',
        width:'auto',
        fontWeight:'600',
        marginTop:35,
        textAlign:'center',
        letterSpacing:0.5,
        textTransform:'lowercase'
    },
    left: {
        marginVertical: '2%',
    },
    buttonContainer: {
        width:'95%',
        height:'20%',
        display:'flex',
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'space-between',
        textAlign:'center',
        marginTop:30,
        alignItems:'center'
    },
    buttonContent: {
        width:'60%',
        height:'90%',
        alignSelf:'flex-start',
        alignContent:'center',
        justifyContent:'space-around'
    },
    scheduleBox: {
        backgroundColor:'#f4f4f4',
        width:120,
        height:40,
        alignContent:'center',
    },
    buttonRow: {
        display:'flex',
        flexDirection:'row',
        width:'40%',
        height:'100%',
        alignSelf:'flex-end',
        justifyContent:'space-between'
    },
    buttonOutline: {
        width:60,
        height:60,
        backgroundColor:'#eaf4ef',
        borderRadius:30,
    },
    mainButton: {
        borderWidth:1,
        borderColor:'black',
        width:60,
        height:60,
        borderRadius:30,
        alignContent:'center',
        marginLeft:5,
    },
    buttonText: {
        color:'black',
        fontSize:10,
        fontFamily:'spartan',
        marginTop:25,
    },
  })