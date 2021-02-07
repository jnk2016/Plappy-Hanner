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
          <View style={styles.mainContainer}>
            <View style={styles.headContainer}>
              <View style={styles.leftHead}>
                <Text style={styles.headText}>
                  <Text style={{fontSize:20,}}>TODAY</Text>
                  <Text style={{color:'#5d7cb8'}}>I'M FEELING:</Text>
                </Text>
              </View>
              <View style={styles.rightHead}>
                <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('MoodShare', {screen:'MoodShare'})}>
                  <Text style={styles.buttonText}>SHARE MY MOOD</Text>
                </TouchableOpacity>
              </View>
            </View>
              <View style={styles.topContainer}>
                <View style={styles.leftTop}>
                  <View style={styles.dateContainer}>
                    <Text style={styles.currentDate}>
                      <Text>{this.state.dayShort}</Text>
                      <Text style={{fontSize:24,}}>{this.state.dateNumber}</Text>
                    </Text>
                  </View>
                </View>
                <View style={styles.rightTop}>
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
              </View>
              <View style={styles.bottomContainer}>
                <View style={styles.bottomBack}>
                <View style={styles.leftBottom}>
                  <Image
                  source={Happy}
                  style={{width:50,height:50,alignSelf:'center',justifyContent:'space-around'}} 
                  />
                  <Image
                  source={Sleepy}
                  style={{width:50,height:50,alignSelf:'center',justifyContent:'space-around'}} 
                  />
                  <Image
                  source={Happy}
                  style={{width:50,height:50,alignSelf:'center',justifyContent:'space-around'}} 
                  />
                  <Image
                  source={Satisfied}
                  style={{width:50,height:50,alignSelf:'center',justifyContent:'space-around'}} 
                  />
                </View>
                  <View style={styles.noteContainer}>
                    <View style={styles.noteWhite}>
                      <Text style={styles.noteText}>
                        <Text style={{fontSize:14,fontWeight:'600'}}>HAPPY</Text>
                        <Text>11:01 AM</Text>
                      </Text>
                    </View>
                    <View style={styles.noteWhite}>
                      <Text style={styles.noteText}>
                        <Text style={{fontSize:14,fontWeight:'600'}}>SLEEPY</Text>
                        <Text>1:20 PM</Text>
                      </Text>
                    </View>
                    <View style={styles.noteWhite}>
                      <Text style={styles.noteText}>
                        <Text style={{fontSize:14,fontWeight:'600'}}>HAPPY</Text>
                        <Text>2:00 PM</Text>
                      </Text>
                    </View>
                    <View style={styles.noteWhite}>
                      <Text style={styles.noteText}>
                        <Text style={{fontSize:14,fontWeight:'600'}}>SATISFIED</Text>
                        <Text>3:01 PM</Text>
                      </Text>
                    </View>
                  </View>
              </View>
                </View>
          </View>
        </View>
      </View>
  );
}}

const styles = StyleSheet.create ({
  bigContainer: {
    backgroundColor:'white',
    alignContent:'center',
    width:'100%',
    height:'100%',
  },
  smallContainer:{
    alignSelf:'center',
    justifyContent:'space-around',
    width:'90%',
    height:'100%',
    fontFamily:'spartan'
  },
  mainContainer: {
    alignSelf:'center',
    width:'100%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
  },
  headContainer: {
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'10%',
    alignSelf:'center',
    justifyContent:'space-between',
    padding:10,
    fontFamily:'spartan'
  },
  leftHead: {
    width:'40%',
    height:'100%',
  },
  headText: {
    display:'flex',
    flexDirection:'column',
    width:'100%',
    height:'100%',
    color:'black',
    fontSize:14,
    lineHeight:20,
    letterSpacing:1,
  },
  rightHead: {
    width:'50%',
    height:'100%',
  },
  buttonContainer: {
    width:'80%',
    height:'auto',
    padding:10,
    textAlign:'center',
    backgroundColor:'#e5e5e5',
    borderRadius:10,
    alignSelf:'flex-end'
  },
  buttonText: {
    color:'black',
    fontSize:10,
    letterSpacing:0.5
  },
  topContainer:{
    backgroundColor:'#fffbd8',
    width:'100%',
    height:'30%',
    display:'flex',
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'space-between',
  },
  rightTop: {
    display:'flex',
    flexDirection:'column',
    width:'70%',
    height:'auto',
    backgroundColor:'#fffbd8',
    padding:5,
  },
  monthText: {
    fontSize:18,
    color:'black',
    letterSpacing:1,
    textAlign:'right',
    margin:5,
    fontFamily:'spartan',
    textTransform:'lowercase'
  },
  leftTop: {
    width:'20%',
    height:'60%',
    alignItems:'flex-end',
    justifyContent:'flex-start',
  },
  dateContainer: {
    width:'85%',
    height:'100%',
    backgroundColor:'#c8d8f9',
    textAlign:'center',
    padding:5,
    justifyContent:'center',
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
  bottomContainer: {
    width:'100%',
    height:'60%',
  },
  leftBottom: {
    display:'flex',
    flexDirection:'column',
    width:'25%',
    height:'90%',
    alignSelf:'center',
    justifyContent:'space-between',
  },
  bottomBack: {
    width:'90%',
    height:'100%',
    backgroundColor:'#e5e5e5',
    alignSelf:'center',
    justifyContent:'space-between',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  noteContainer: {
    display:'flex',
    flexDirection:'column',
    width:'80%',
    height:'90%',
    alignSelf:'center',
    justifyContent:'space-between',
  },
  noteWhite: {
    width:'80%',
    height:'15%',
    backgroundColor:'white',
    padding:10,
  },
  noteText: {
    display:'flex',
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'space-between',
    color:'black',
    fontSize:10,
    width:'95%',
    alignItems:'center',
    letterSpacing:0.5,
    marginTop:10,
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
})