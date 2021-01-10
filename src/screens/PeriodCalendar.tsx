import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import Protect from '../assets/images/bi_shield.png';
import Polygon from '../assets/images/Polygon 4.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default function PeriodCalendar ({navigation}) {

  return (
    <View style={{height:'100%', backgroundColor: 'white'}}>
        <View style={styles.bigContainer}>
          <View style={styles.pinkContainer}>
            <Calendar // HOW TO USE CALENDAR https://github.com/wix/react-native-calendars
              // Enable the option to swipe between months. Default = false
              enableSwipeMonths={true}
              theme={{
                  'stylesheet.calendar.header': {
                    monthText: {
                      fontSize: 15,
                      fontFamily: 'Spartan',
                      fontWeight: '700',
                      color: 'black',
                      marginVertical: '10%',
                      letterSpacing: '0.1em',
                    },
                    dayHeader: {
                      marginTop: 2,
                      marginBottom: 7,
                      width: 32,
                      textAlign: 'center',
                      fontSize: 10,
                      fontFamily: 'Spartan',
                      fontWeight: '600',
                      color: 'gray',
                      textTransform: 'uppercase',
                    },
                    arrow: {
                      padding: 10,
                      backgroundColor: '#FFD2D0',
                      borderRadius: 7,
                    }
                  }
              }}
              // Do not show days of other months in month page. Default = false
              hideExtraDays={true}
              // Collection of dates that have to be marked.
              markedDates={{
                '2021-01-02': {textColor: 'red'},
                '2021-01-03': {textColor: 'red'},
                '2021-01-04': {textColor: 'red'},
                '2021-01-05': {textColor: 'red'},
                '2021-01-06': {textColor: 'red', marked: true, dotColor: 'pink'}
              }}
              // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
              markingType='period'
              // Handler which gets executed on day press. Default = undefined
              onDayPress={(day) => {console.log('selected day', day)}}
              style={{width: '90%', alignSelf: 'center', borderRadius: 25, paddingBottom: '3%'}}
            />
            <TouchableOpacity style={{justifyContent: 'center', marginVertical: '3%',marginHorizontal: '30%',backgroundColor: '#CCDED6',paddingVertical: '4%',borderRadius: 30}}>
              <Text style={{alignSelf: 'center', fontFamily: 'Spartan', fontSize: 13, fontWeight: '600'}}>Edit Period Dates</Text>
            </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create ({
    bigContainer: {
      backgroundColor:'white',
      alignContent:'center',
      height:'100%'
    },
    pinkContainer: {
      backgroundColor:'#FF9797',
      alignContent:'center',
      justifyContent: 'center',
      height:'100%',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
})