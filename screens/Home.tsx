import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import AxiosLogin from '../Axios Functions/AxiosLogin';
import Modal from 'modal-react-native-web';
import '../assets/css/hearthome.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png'; 
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


class Home extends Component {

    render() {return (
      <div className="Home">
          <html lang="en">
          <head>
              <meta charSet="UTF-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <title>HOMESCREEN</title>
              <link rel="stylesheet" href="hearthome.css"/>
              <style>@import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');</style>
              <style>@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');</style>
              <style>@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@600&display=swap');</style>
              <style>@import url('https://fonts.googleapis.com/css2?family=Abhaya+Libre&display=swap');</style>
          </head>
          <body>
              <div className="homescreen">
                  <div className="homeSearch">
                      <input type="text" placeholder="Search"/>
                  </div>
              </div>
              <div className="homeContainer">
                  <div className="homeVariable">
                      <ul>
                          <li>
                              <time>15:01</time>
                              <h2 className="homeDay">friday, january 8</h2>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="homeSections">
                  <div className="homeSide">
                      <ul>
                          <li>
                              <div className="homeGoals">
                                  <div className="homeNumber">
                                      4
                                  </div>
                                  <p>goals</p>
                              </div>
                          </li>
                          <li>
                              <div className="homeTasks">
                                  <div className="homeNumber">
                                      0
                                  </div>
                                  <p>b-days</p>
                              </div>
                          </li>
                          <li>
                              <div className="homeEvents">
                                  <div className="homeNumber">
                                      3
                                  </div>
                                  <p>events</p>
                              </div>
                          </li>
                      </ul>
                  </div>
                    <View style={{paddingTop: '30%'}}>
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
                        style={{width: '90%', alignSelf: 'center', borderRadius: 25, paddingBottom: '3%'}}
                        />
                    </View>
              </div> 
              <div className="homeSchedule">
                  <h3>Schedule</h3>
                  <div className="homeButtons">
                      <ul>
                          <li><button className="homeDaily">DAILY</button></li>
                          <li><button className="homeWeekly">WEEKLY</button></li>
                          <li><button className="homeMonthly">MONTHLY</button></li>
                      </ul>
                  </div>
              </div>
          </body>
          </html>
        </div>
    );
    }
  }
  export default Home;