import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import '../assets/css/goal.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Goal extends Component {

  render() {return (
    <div className="Goal">
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Document</title>
          <link rel="stylesheet" href="goal.css"/>
          <style>@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');</style>
          <style>@import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');</style>
    </head>
    <body>
      <div className="goalMenu">
          <input type="text" placeholder="Search"/>
          <div className="goalNavbar">
              <ul>
                  <li>
                      <button className="allGoal" style={{background: "#c5c5c5"}}>
                            ALL
                      </button>
                  </li>
                  <li>
                      <button className="reviewGoal" style={{background: "#fa9d9d"}}>
                          REVIEW
                      </button>
                  </li>
                  <li>
                      <button className="progressGoal" style={{background: "#ffc6c6"}}>
                          IN PROGRESS
                      </button>
                  </li>
                  <li>
                      <button className="openGoal" style={{background: "#ffdede"}}>
                          OPEN
                      </button>
                  </li>
                  <li>
                      <button className="developGoal" style={{background: "#ffeeee"}}>
                        IN DEVELOPMENT
                      </button>
                  </li>
                  <li>
                      <button className="completeGoal" style={{background: "#fff7ef"}}>
                          COMPLETED
                      </button>
                  </li>
              </ul>
              <div className="addButton">
                  <button className="addingGoal">ADD</button>
              </div>
          </div>
      </div>
</body>
</html>
</div>
  );
}
}
export default Goal;