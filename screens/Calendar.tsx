import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import AxiosLogin from '../Axios Functions/AxiosLogin';
import Modal from 'modal-react-native-web';
import '../assets/css/home.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png'; 

class Calendar extends Component {

  render() {return (
    <div className="Calendar">
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>HOME</title>
            <link rel="stylesheet" href="home.css"/>
            <style>@import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');</style>
        </head>
        <body>
            <div className="calendarCal">
                <p><b>JANUARY 2021</b></p>
                <div className="options">
                    <ul>
                        <li><a href="#" id="main">SUN<br/>3</a></li>
                        <li><a href="#">MON<br/>4</a></li>
                        <li><a href="#">TUE<br/>5</a></li>
                        <li><a href="#">WED<br/>6</a></li>
                        <li><a href="#">THU<br/>7</a></li>
                        <li><a href="#">FRI<br/>8</a></li>
                        <li><a href="#">SAT<br/>9</a></li>
                    </ul>
                </div>
            </div>
            <div className="headerCalendar">
                <h1>TODAY</h1>
                <h2>My tasks</h2>
                <h3>TO DO
                    <a href="#">you have 5 tasks to start</a>
                </h3>
                <h4>IN PROGRESS
                    <a href="#">you have 1 task to complete</a>
                </h4>
                <h5>My Schedule
                    <div className="events">
                        <ul>
                            <li>
                                <div className="study">10 AM
                                    <a href="#">STUDY</a>
                                </div>
                            </li>
                            <li>
                                <div className="work">1-9 PM 
                                    <a href="#">WORK</a>
                                </div>
                            </li>
                            <li>
                                <div className="dinner">9:30 PM
                                    <a href="#">DINNER</a>
                                </div>
                            </li>    
                        </ul>
                    </div>
                </h5>
            </div>
        </body>
        </html>
      </div>
  );
  }
}
export default Calendar;