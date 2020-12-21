import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import AxiosLogin from '../Axios Functions/AxiosLogin';
import Modal from 'modal-react-native-web';
import '../assets/css/sched.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png'; 

class Calendar extends Component {

  render() {return (
    <div className="Calendar">
    <html lang="en">
    <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>SCHEDULE</title>
        <link rel="stylesheet" href="sched.css"/>
        <style>@import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');</style>
        <style>@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');</style>
        <style>@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@600&display=swap');</style>
    </head>
    <body>
        <div className="calendarComponents">
            <div className="calendarHead">
                <h1 className="calendarMonth">JANUARY 2021</h1>
                <div className="calendarDays">
                    <ul>
                        <li><a href="#">SUN<br/>3</a></li>
                        <li><a href="#">MON<br/>4</a></li>
                        <li><a href="#">TUE<br/>5</a></li>
                        <li><a href="#">WED<br/>6</a></li>
                        <li><a href="#">THU<br/>7</a></li>
                        <li><a href="#" id="calendarMain">FRI<br/>8</a></li>
                        <li><a href="#">SAT<br/>9</a></li>
                    </ul>
                </div>
            </div>    
            <div className="calendarSection">
                <div className="calendarToday">
                    <h2 className="sched-today">TODAY</h2>
                </div>
                <div className="calendarContainer">
                    <ul>
                        <li>
                            <div className="myTasks">
                                <h3 className="tasksHeader">My tasks</h3>
                                <ul>
                                    <li>
                                        <div className="pending">
                                            <h4 className="blue">PENDING</h4>
                                            <p>you have 5 tasks to start</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="progress">
                                            <h4 className="white">IN PROGRESS</h4>
                                            <p>you have 1 task to complete</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="mySchedule">
                                <h3 className="scheduleHeader">My Schedule</h3>
                                <ul>
                                    <li>
                                        <div className="study-bar">
                                            <h4 className="calendarTime">10 AM</h4>
                                            <h5 className="calendarTopic">STUDY!</h5>
                                            <h6 className="calendarDesc">CSS GRIDS</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="work-bar">
                                            <h4 className="calendarTime">1-9 PM</h4>
                                            <h5 className="calendarTopic">WORK</h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dinner-bar">
                                            <h4 className="calendarTime">9:30 PM</h4>
                                            <h5 className="calendarTopic">DINNER</h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div> 
        </div>
    </body>
    </html>
    </div>
  );
  }
}
export default Calendar;