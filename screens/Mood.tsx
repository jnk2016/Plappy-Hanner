import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert, TouchableOpacity} from 'react-native';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import Happy from '../assets/images/happy.png';
import Sleepy from '../assets/images/sleepy.png';
import Satisfied from '../assets/images/satisfied.png';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import XDate from 'xdate';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default class Mood extends Component<{},any> {
  

    state = {
        curTime: null,
        date: null,
        dayOfWeek: null,
        currentMonth: null,
        dateNumber: null,
        dayShort: null,
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
            })
          }, 1000)
    }

    render() {return(
      <View style={styles.bigContainer}>
        <View style={styles.smallContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.monthText}>{this.state.currentMonth}</Text>
            <View style={styles.calendarContainer}>
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
                          // marginTop: '-10%',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          }
                      },
                      textDayHeaderFontSize: 14,
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
                  style={{width: '100%', alignSelf: 'center', paddingBottom: '5%', marginHorizontal: '10%', marginVertical: '4%'}}
                  />
                  </View>
          </View>
              <View style={styles.endContainer}>
                <Text style={styles.date}>{this.state.date}</Text>
                <View style={styles.moodBottom}>
                  <View style={styles.happyContainer}>
                    <Image
                    source={Happy}
                    style={{width:50,height:50,alignSelf:'center',justifyContent:'space-around'}} 
                    />
                    <Text style={styles.moodText}>HAPPY</Text>
                    <Text style={styles.timeText}>11:01 AM</Text>
                  </View>
                <View style={styles.sleepyContainer}>
                    <View style={styles.topSleepy}>
                  <Image
                  source={Sleepy}
                  style={{width:50,height:50,alignSelf:'center',justifyContent:'space-around'}} 
                  />
                  <Text style={styles.moodText}>SLEEPY</Text>
                  <Text style={styles.timeText}>1:20 PM</Text>
                  </View>
                  <View style={styles.moodDesc}>
                    <Text>I am finally free from this project!</Text>
                    <TouchableOpacity style={styles.editButton}>
                      <Text style={styles.buttonText}>EDIT</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.mainButton}>
                  <Text style={styles.buttonText}>SHARE MY MOOD</Text>
                </TouchableOpacity>
                </View>
          </View>
        </View>
      </View>
  );
}}

const styles = StyleSheet.create ({
  bigContainer: {
    backgroundColor:'#fffbdb',
    alignContent:'center',
    width:'100%',
    height:'100%',
  },
  smallContainer:{
    alignSelf:'center',
    justifyContent:'space-around',
    width:'90%',
    height:'100%',
    fontFamily:'spartan',
    backgroundColor:'#fffbdb',
  },
  topContainer:{
    backgroundColor:'#fffbdb',
    width:'100%',
    height:'40%',
    display:'flex',
    flexDirection:'column',
    alignSelf:'center',
  },
  monthText: {
    fontSize:24,
    color:'black',
    letterSpacing:1,
    textAlign:'center',
    margin:5,
    fontFamily:'spartan',
  },
  currentDate: {
    color:'black',
    display:'flex',
    flexDirection:'column',
    fontSize:14,
    letterSpacing:0.1,
    fontFamily:'spartan',
    lineHeight:40,
    textTransform:'uppercase'
  },
  calendarContainer:{
    backgroundColor:'#fffbdb',
    width:'auto',
    height:'90%',
  },
  endContainer: {
    width:'110%',
    backgroundColor:'white',
    height:'60%',
    alignSelf:'center',
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
  date:{
    marginTop:30,
    fontFamily:'spartan',
    fontWeight:'600',
    fontSize:16,
    letterSpacing:1,
    textAlign:'center',
    textDecoration:'capitalize',
  },
  moodBottom:{
    marginTop:30,
    display:'flex',
    flexDirection:'column',
    width:'90%',
    height:'70%',
    justifyContent:'space-between',
    alignSelf:'center',
  },
  happyContainer:{
    backgroundColor:'#e5e5e5',
    width:'90%',
    height:'auto',
    padding:10,
    borderRadius:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    alignSelf:'center',
  },
  moodText:{
    fontFamily:'spartan',
    fontSize:14,
    color:'black',
  },
  timeText:{
    fontSize:12,
    fontFamily:'spartan',
    justifySelf:'flex-start',
    color:'black',
  },
  moodDesc:{
    fontFamily:'spartan',
    fontSize:12,
    color:'black',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  topSleepy:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    height:'auto',
    alignItems:'center',
  },
  sleepyContainer:{
    display:'flex',
    flexDirection:'column',
    backgroundColor:'#e5e5e5',
    justifyContent:'space-between',
    width:'90%',
    height:'40%',
    padding:10,
    borderRadius:10,
    alignSelf:'center',
  },
  editButton:{
    backgroundColor:'white',
    padding:10,
    textAlign:'center',
    borderRadius:10,
  },
  buttonText:{
    fontFamily:'spartan',
    fontSize:10,
    color:'black',
    alignSelf:'center',
  },
  mainButton:{
    backgroundColor:'#fffbdb',
    width:'50%',
    alignSelf:'center',
    borderRadius:10,
    padding:10,
  }
})