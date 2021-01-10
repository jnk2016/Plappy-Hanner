import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert, TouchableOpacity} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
// import AbhayaLibre from '../fonts/AbhayaLibre-Medium.tff';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default class Home extends Component {

    state = {
        curTime: null,
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
              curTime : new Date().toLocaleString('en-US',options),
            })
          }, 1000)
    }

    render() {return(
    <View style={styles.container}>
        <TextInput style={{alignSelf: 'center',margin: '2%', borderRadius: 20, backgroundColor: '#e5e5e5', width: '80%', fontSize: 15}}
            inlineImageLeft='search_icon'
            placeholder='Search'
            placeholderTextColor='#c4c4c4'/>
        <View style={styles.smallcontainer}>
            <View style={{marginTop: '-10%', marginHorizontal: '5%'}}>
                <View style={styles.variables}>
                    <Text style={styles.time}>15:01</Text>
                    <Text style={styles.day}>friday, january 8</Text>
                </View>
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
                        marginTop: '-3%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        }
                    },
                    textDayHeaderFontSize: 11,
                }}
                dayComponent={({date, state}) => {
                    return (
                    <View>
                        <Text style={{textAlign: 'center', marginVertical: '2%', fontSize: 10,fontFamily: 'Spartan', fontWeight: '600', color: state === 'disabled' ? 'gray' : 'black'}}>
                        {date.day}
                        </Text>
                    </View>
                    );
                }}
                // Do not show days of other months in month page. Default = false
                hideExtraDays={true}
                style={{width: '100%', alignSelf: 'center', borderRadius: 25, paddingBottom: '3%', marginHorizontal: '6%', marginVertical: '10%'}}
                />
            </View>
            <View style={styles.sections}>
                <View style={styles.left}>
                <View style={styles.circleGoal}>
                    <Text style={styles.insideCircle}>4</Text>
                </View>
                <Text style={styles.subscript}>goals</Text>
                <View style={styles.circleBirth}>
                    <Text style={styles.insideCircle}>12</Text>
                </View>
                <Text style={styles.subscript}>birthdays</Text>
                <View style={styles.circleEvent}>
                    <Text style={styles.insideCircle}>3</Text>
                </View>
                <Text style={styles.subscript}>events</Text>
                </View>
            </View>
        </View>
        <View style={{backgroundColor: '#fffbdb'}}>
        <View style={styles.sched}>
            <Text style={styles.schedHeader}>Schedule</Text>
            <View style={styles.options}>
                <TouchableOpacity style={styles.optionsdailyContainer} onPress={()=>console.log("button pressed")}>
                    <Text style={styles.optionsText}>   DAILY   </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionsweeklyContainer} onPress={()=>console.log("button pressed")}>
                    <Text style={styles.optionsText}> WEEKLY </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionsmonthlyContainer} onPress={()=>console.log("button pressed")}>
                    <Text style={styles.optionsText}>MONTHLY</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    </View>
    );
  }}
  
  
  
  const styles = StyleSheet.create({
    sched:{
        backgroundColor: '#F9F7F7',
        width:'100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: '-5%'
    },
    schedHeader:{
        fontSize: 18,
        paddingVertical: '6%',
        marginLeft: '2%'
    },
    options:{
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'space-evenly'
    },
    optionsdailyContainer:{
        backgroundColor: '#ccded6',
        borderRadius: 15,
        paddingHorizontal: '6%',
        paddingVertical: '10%'
    },
    optionsweeklyContainer:{
        backgroundColor: '#AAD3C0',
        borderRadius: 15,
        paddingHorizontal: '6%',
        paddingVertical: '10%'
    },
    optionsmonthlyContainer:{
        backgroundColor: '#9cc3b0',
        borderRadius: 15,
        paddingHorizontal: '6%',
        paddingVertical: '10%'
    },
    optionsText:{
        fontSize: 15
    },
    circleGoal:{
        borderRadius: 50,
        backgroundColor: '#FF9797',
        alignItems: 'center',
    },
    circleBirth:{
        borderRadius: 50,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
    },
    circleEvent:{
        borderRadius: 50,
        backgroundColor: '#9EB4DF',
        alignItems: 'center'
    },
    insideCircle:{
        fontSize: 24,
        paddingHorizontal: '4%',
        paddingVertical: '3%',
        alignSelf: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginVertical: '1%',
        fontFamily: 'Spartan'
    },
    subscript:{
        fontSize: 13,
        fontFamily: 'Spartan',
        paddingBottom: '80%',
        textAlign: 'center'
    },
    sections:{
        flexDirection: 'column',
        marginTop: '5%'
    },
    container: {
    //   justifyContent:'center',
    //   alignItems: 'center',
    height: '100%',
    },
    smallcontainer: {
        backgroundColor: '#fffbdb',
        width:'100%',
        flexDirection: 'row',
        marginTop: '15%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    variables: {
        backgroundColor:'#e5e5e5',
        width:'90%',
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '3%',
        
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
        width:"40%",
        height:"40%",
        borderRadius: 100/2,
        backgroundColor:'#9cc3b0',
        textAlign:'center',
        fontSize:20,
        paddingTop:'2%',
    },
    insideTask: {
        width:"40%",
        height:"40%",
        borderRadius: 100/2,
        backgroundColor:'#e4e4e4',
        textAlign:'center',
        fontSize:20,
        paddingTop:'2%',
    },
    insideEvent: {
        width:"40%",
        height:"40%",
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