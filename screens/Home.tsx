import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert, TouchableOpacity} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import XDate from 'xdate';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default class Home extends Component {

    state = {
        curTime: null,
        date: null,
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
              curTime : new XDate().toString('HH:mm'),
              date: new XDate().toString('dddd,  MMMM d')
            })
          }, 1000)
    }

    render() {return(
    <View style={styles.container}>
        <View style={styles.topContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.dateText}>
                        <Text>FRIDAY</Text>
                        <Text style={{fontSize:30, fontWeight:'600'}}>8 JAN</Text>
                        <Text>2021</Text>
                    </Text>
                </View>
                
                <View style={styles.eventsContainer}>
                    <View style={styles.eventsCircle}></View>
                        <View style={styles.listBox}>
                        <View style={styles.listText}>
                            <Text style={styles.listUpcoming}>
                                <Text>goals</Text>
                                <Text style={{fontSize:18}}>9</Text>
                            </Text>
                        </View>
                        <View style={[styles.listText,{borderColor:'#ff9797'}]}>
                            <Text style={styles.listUpcoming}>
                                <Text>tasks</Text>
                                <Text style={{fontSize:18}}>6</Text>
                            </Text>
                        </View>
                        <View style={[styles.listText,{borderColor:'#5d7cb8'}]}>
                            <Text style={styles.listUpcoming}>
                                <Text>events</Text>
                                <Text style={{fontSize:18}}>11</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        <View style={styles.bottomContainer}>
            <Text style={styles.bottomHead}>SCHEDULE</Text>
            <View style={styles.smallContainer}>
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
                        <Text style={{textAlign: 'center', marginVertical: '2%', fontSize: 12,fontFamily: 'Spartan', letterSpacing:1, fontWeight: '500', color: state === 'disabled' ? 'gray' : 'black'}}>
                        {date.day}
                        </Text>
                    </View>
                    );
                }}
                // Do not show days of other months in month page. Default = false
                hideExtraDays={true}
                style={{width: '100%', alignSelf: 'center', paddingBottom: '3%', marginHorizontal: '6%', marginVertical: '4%'}}
                />
                <Text style={styles.monthText}>
                    <Text>J</Text>
                    <Text>A</Text>
                    <Text>N</Text>
                    <Text>U</Text>
                    <Text>A</Text>
                    <Text>R</Text>
                    <Text>Y</Text>
                </Text>
            </View>
                
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.mainButton} onPress={()=> console.log("button pressed")}>
                    <Text style={styles.buttonText}>WEEK VIEW</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainButton} onPress={()=> console.log("button pressed")}>
                    <Text style={styles.buttonText}>MONTH VIEW</Text>
                </TouchableOpacity>
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
        backgroundColor: 'white',
    },
    topContainer: {
        backgroundColor:'#FFFBDB',
        width:'100%',
        height:'45%',
        display:'flex',
        flexDirection:'row',
        position:'relative',
    },
    headerContainer: {
        backgroundColor:'white',
        width:'35%',
        height:'90%',
        textAlign:'center',
        marginTop:20,
        marginLeft:30,
        alignSelf:'flex-start',
        justifyContent:'center',
        zIndex:1,
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
    eventsContainer: {
        width:'100%',
        height:'auto',
        display:'flex',
        flexDirection:'row',
        marginTop:20,
        position:'relative'
    },
    eventsCircle: {
        width:240,
        height:240,
        zIndex:0,
        position:'absolute',
        borderRadius:115,
        borderWidth:3,
        marginLeft:-130,
        marginTop:20,
        borderColor:'#f9efe0',
        borderRightColor:'#e5e5e5',
    },
    listBox: {
        display:'flex',
        flexDirection:'column',
        width:'50%',
        height:'100%',
        marginTop:50,
        marginLeft:10,
    },
    listText: {
        marginTop:10,
        width:'100%', 
        height:'auto',
        borderWidth:1,
        borderColor:'gray',
        padding:5,
        justifyContent:'center',
        alignSelf:'center',
        marginBottom:20,
        alignItems:'center',
    },
    listUpcoming: {
        width:'95%',
        height:'95%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'center',
        color:'black',
        fontSize:14,
        textAlign:'center',
        fontFamily:'spartan',
    },
    bottomContainer: {
        backgroundColor: 'rgba(140,150,171,0.6)',
        width:'100%',
        height:'60%',
        flexDirection: 'column',
        paddingBottom: '5%',
    },
    bottomHead: {
        color:'#383838',
        fontSize:18,
        fontFamily:'spartan',
        letterSpacing:1,
        alignSelf:'flex-start',
        margin:20,
        fontWeight:'600'
    },
    smallContainer: {
        display:'flex',
        flexDirection:'row',
        width:'90%',
        height:'60%',
        alignSelf:'center',
        justifyContent:'center',
        marginTop:5,
        backgroundColor:'white',
    },
    monthText: {
        display:'flex',
        lineHeight:30,
        marginLeft:20,
        flexDirection:'column',
        alignContent:'space-between',
        color:'rgba(56,56,56,0.8)',
        fontSize:16,
        fontFamily:'spartan',
        width:'auto',
        fontWeight:'600',
        marginTop:15,
    },
    left: {
        marginVertical: '2%',
    },
    buttonContainer: {
        width:'90%',
        height:'auto',
        display:'flex',
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'space-between',
        textAlign:'center',
        marginTop:30,
    },
    mainButton: {
        borderWidth:1,
        borderColor:'black',
        width:'40%',
        height:'auto',
        padding:10,
    },
    buttonText: {
        color:'black',
        fontSize:14,
        fontFamily:'spartan',
    },
  })