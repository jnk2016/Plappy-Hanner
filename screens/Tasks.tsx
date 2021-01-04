import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import '../assets/css/task.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import Home from '../assets/images/clarity_home-line.png';
import Work from '../assets/images/clarity_work-line.png';
import Person from '../assets/images/clarity_person-line.png';
import School from '../assets/images/clarity_school-line.png';
import Event from '../assets/images/EVENT.png';


class Tasks extends Component {

  render() {return (
    <div className="Tasks">
    <html lang="en">
    <head>
        <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Document</title>
          <link rel="stylesheet" href="tasks.css"/>
          <style>@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');</style>
          <style>@import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');</style>
    </head>
    <body>
      <div className="taskMain">
        <input type="text" placeholder="Search"/>
        <div className="taskCalendar">
          <div className="taskWeek">
              <h1 className="taskCurrentWeek">CURRENT WEEK</h1>
              <div className="taskDays">
                  <a href="#">SUN <br/>3</a>
                  <a href="#">MON <br/>4</a>
                  <a href="#">TUE <br/>5</a>
                  <a href="#">WED <br/>6</a>
                  <a href="#">THU <br/>7</a>
                  <a href="#" id="taskMain">FRI <br/>8</a>
                  <a href="#">SAT <br/>9</a>
              </div>
          </div>
        </div>
        <div className="taskContainer">
          <div className="taskCheck">
              <ul>
                <li>
                  <button></button>
                  <div className="firstCheck">
                      <a href="#">do laundry</a>
                      <a href="#"><img src={Home} alt="homeTask"/></a>
                  </div>
                </li>
                <li>
                  <button></button>
                  <div className="secondCheck">
                      <a href="#">put availability on schedule</a>
                      <a href="#"><img src={Work} alt="workTask"/></a>
                  </div>
                </li>
                <li>
                  <button></button>
                  <div className="thirdCheck">
                      <a href="#">reply to messages</a>
                      <a href="#"><img src={Person} alt="personTask"/></a>
                  </div>
                </li>
                <li>
                  <button></button>
                  <div className="fourthCheck">
                      <a href="#">code 1 screen</a>
                      <a href="#"><img src={Work} alt="workTask"/></a>
                  </div>
                </li>
              </ul>
            </div>
        </div>
        <div className="taskIcons">
                <ul>
                    <li>
                        <button className="allTasks"></button>
                        <a href="#">ALL</a>
                    </li>
                    <li>
                        <button><img src={Person} alt="personList"/></button>
                        <a href="#">personal</a>
                    </li>
                    <li>
                        <button><img src={Work} alt="workList"/></button>
                        <a href="#">work</a>
                    </li>
                    <li>
                        <button><img src={Home} alt="homeList"/></button>
                        <a href="#">home</a>
                    </li>
                    <li>
                        <button><img src={School} alt="schoolList"/></button>
                        <a href="#">school</a>
                    </li>
                    <li>
                        <button><img src={Event} alt="addList"/></button>
                        <a href="#">add</a>
                    </li>
                </ul>
            </div>
      </div>            
    </body>
    </html>
    </div>
  );
  }
}
export default Tasks;