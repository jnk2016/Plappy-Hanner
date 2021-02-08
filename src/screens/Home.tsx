import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert, TouchableOpacity} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import XDate from 'xdate';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default class Home extends Component {
    state = {
        dayOfWeek: null,
        date: null,
        year: null,
        month: null,
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
              dayOfWeek : new XDate().toString('dddd'),
              date: new XDate().toString('d MMM'),
              year: new XDate().toString('yyyy'),
              month: new XDate().toString('MMMM'),
            })
          }, 1000)
    }

    render() {return(
        <View style={styles.container}>
            <View style={styles.topContainer}>
                    <View style={styles.headerContainer}>
                        <View style={styles.dateContainer}>
                            <Text style={styles.dayYearText}>{this.state.dayOfWeek}</Text>
                            <Text style={styles.dayMonthText}>{this.state.date}</Text>
                            <Text style={styles.dayYearText}>{this.state.year}</Text>
                        </View>
                    </View>
                    <View style={styles.eventsContainer}>
                        <View style={styles.eventsCircle}></View>
                            <View style={styles.listBox}>
                            <View style={styles.listText}>
                                <Text style={styles.listUpcoming}>goals</Text>
                                <Text style={{...styles.listUpcoming, fontSize:18}}>9</Text>
                            </View>
                            <View style={[styles.listText,{borderColor:'#ff9797'}]}>
                                <Text style={styles.listUpcoming}>tasks</Text>
                                <Text style={{...styles.listUpcoming, fontSize:18}}>6</Text>
                        </View>
                            <View style={[styles.listText,{borderColor:'#5d7cb8'}]}>
                                <Text style={styles.listUpcoming}>events</Text>
                                <Text style={{...styles.listUpcoming, fontSize:18}}>11</Text>
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
                            // textMonthFontSize: 0,
                            'stylesheet.calendar.header': {
                                week: {
                                marginTop: '-5%',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginHorizontal:'2%'
                                },
                                monthText: {
                                    margin:0,
                                    // position:'absolute',
                                    // flexDirection:'column',
                                    // flex:1,
                                    // fontSize:12
                                }
                            },
                            textDayHeaderFontSize: 11,
                            // 'stylesheet.day.basic':{
                            //     base:{
                            //         marginTop:'-10%',
                            //         height:10,
                            //     }
                            // },
                        }}
                        dayComponent={({date, state}) => {
                            return (
                            <View>
                                <Text style={{textAlign: 'center', marginVertical: '0%', fontSize: 12,fontFamily: 'Spartan-Regular', letterSpacing:1, fontWeight: '500', color: state === 'disabled' ? 'gray' : 'black'}}>
                                {date.day}
                                </Text>
                            </View>
                            );
                        }}
                        // Do not show days of other months in month page. Default = false
                        hideExtraDays={true}
                        style={{width: '90%', alignSelf: 'flex-start', paddingBottom: '3%'}}
                        />
                    <Text style={styles.monthText}>{this.state.month}</Text>
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
    dateContainer: {
        display:'flex',
        flexDirection:'column',
        width:'auto',
        // lineHeight:30,
    },
    dayYearText: {
        textAlign:'center',
        // display:'flex',
        flexDirection:'column',
        // width:'auto',
        color:'black',
        fontFamily:'Spartan-Regular',
        fontSize:14,
        letterSpacing:1,
        // lineHeight:30,
        textTransform:'uppercase',
    },
    dayMonthText: {
        textAlign:'center',
        // display:'flex',
        flexDirection:'column',
        // width:'auto',
        color:'black',
        fontFamily:'Spartan-SemiBold',
        fontSize:30,
        letterSpacing:1,
        // lineHeight:30,
        textTransform:'uppercase',
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
        // marginTop:20,
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
        // height:'20%',
        borderWidth:1,
        borderColor:'gray',
        padding:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'center',
        marginBottom:20,
        alignItems:'center',
    },
    listUpcoming: {
        alignSelf:'center',
        color:'black',
        fontSize:14,
        textAlign:'center',
        fontFamily:'Spartan-Regular',
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
        fontFamily:'Spartan-SemiBold',
        letterSpacing:1,
        alignSelf:'flex-start',
        margin:10,
        fontWeight:'600'
    },
    smallContainer: {
        // display:'flex',
        flexDirection:'row',
        width:'90%',
        // height:'60%',
        alignSelf:'center',
        justifyContent:'center',
        // marginTop:5,
        // marginVertical:'5%',
        backgroundColor:'white',
    },
    monthText: {
        // display:'flex',
        lineHeight:30,
        // marginLeft:20,
        flexDirection:'column',
        // alignSelf:'flex-end',
        width:20,
        // flex:1,
        // alignContent:'space-between',
        color:'rgba(56,56,56,0.8)',
        fontSize:16,
        fontFamily:'Spartan-SemiBold',
        textTransform:'uppercase',
        // justifyContent:'space-between',
        // width:'auto',
        // fontWeight:'600',
        // marginTop:15,
        textAlignVertical:'center'
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
        marginTop:'2%',
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
        fontFamily:'Spartan-Regular',
    },
  })