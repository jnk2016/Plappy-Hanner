import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import '../assets/css/mood.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import Happy from '../assets/images/happy.png';
import Sleepy from '../assets/images/sleepy.png';
import Satisfied from '../assets/images/satisfied.png';


class Mood extends Component {

  render() {return (
    <div className="Mood">
    <html lang="en">
    <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Document</title>
          <link rel="stylesheet" href="mood.css"/>
          <style>@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');</style>
          <style>@import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');</style>
    <body>
      <div className="moodContainer">
        <div className="moodHead">
          <ul>
            <li>
              <h2 className="moodCheck">DAILY CHECK-IN</h2>
              <h1 className="moodFeeling">I'M FEELING:</h1>
            </li>
            <li>
              <button>share my mood</button>
            </li>
          </ul>
        </div>
        <div className="moodLarge">
          <div className="moodThisWeek">
            <h3 className="moodThis">THIS WEEK</h3>
            <div className="moodweekContain">
              <ul>
                <li>
                  <div className="moodTue">
                    <a href="#">TUE</a>
                    <img src={Sleepy} alt="menuSleepy" className="moodSlep"/>
                  </div>
                </li>
                <li>
                  <div className="moodWed">
                    <a href="#">WED</a>
                    <img src={Satisfied} alt="menuSatisfied" className="moodSat"/>
                  </div>
                </li>
                <li>
                  <div className="moodThu">
                    <a href="#">THU</a>
                    <img src={Happy} alt="menuHappy" className="moodHappy"/>
                  </div>
                </li>
              </ul>
            </div>
            
              
          </div>
        </div>
      </div>
    </body>
    </html>
    </div>
  );
  }
}
export default Mood;