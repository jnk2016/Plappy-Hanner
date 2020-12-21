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
    </head>
    <body>
        <main>
            <section id="section-asched" className="grid">
                <div className="calendar-head">
                    <h1 className="month-name">JAN 2021</h1>
                    <div className="days-janhead">
                        <ul>
                            <li><a href="#">SUN<br/>3</a></li>
                            <li><a href="#">MON<br/>4</a></li>
                            <li><a href="#">TUE<br/>5</a></li>
                            <li><a href="#">WED<br/>6</a></li>
                            <li><a href="#">THU<br/>7</a></li>
                            <li><a href="#" id="main">FRI<br/>8</a></li>
                            <li><a href="#">SAT<br/>9</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="section-bsched" className="grid">
                <div className="sched-head">
                    <div className="today">
                        <h2 className="sched-today">TODAY</h2>
                    </div>
                    <div className="sched-sections">
                        <ul>
                            <li>
                                <div className="my-tasks">
                                    <h3>My tasks</h3>
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
                                <div className="my-schedule">
                                    <h3>My Schedule</h3>
                                    <ul>
                                        <li>
                                            <div className="study-bar">
                                                <h4>10 AM</h4>
                                                <h5>STUDY!</h5>
                                                <h6>CSS GRIDS</h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="work-bar">
                                                <h4>1-9 PM</h4>
                                                <h5>WORK</h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dinner-bar">
                                                <h4>9:30 PM</h4>
                                                <h5>DINNER</h5>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div> 
            </section>
        </main>
    </body>
    </html>
      </div>
  );
  }
}
export default Calendar;