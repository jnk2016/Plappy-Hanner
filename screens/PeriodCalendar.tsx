import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import Protect from '../assets/images/bi_shield.png';
import Polygon from '../assets/images/Polygon 4.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default function PeriodCalendar ({navigation}) {

  return (
    <View>
        <View style={styles.bigContainer}>
            
            <Calendar // HOW TO USE CALENDAR https://github.com/wix/react-native-calendars
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
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create ({
    bigContainer: {
      backgroundColor:'white',
      alignContent:'center',
    },
})