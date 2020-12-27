import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import '../assets/css/habittracker.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';


class HabitTracker extends Component {

  render() {return (
    <div className="HabitTracker">
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Document</title>
          <link rel="stylesheet" href="habittracker.css"/>
          <style>@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');</style>
          <style>@import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');</style>
    </head>
    <body>
      <div className="habContainer">
        <div className="habitHead">
            <h1 className="habitMonth">CURRENT WEEK</h1>
            <div className="habitDays">
                <ul>
                    <li><a href="#">SUN<br/>3</a></li>
                    <li><a href="#">MON<br/>4</a></li>
                    <li><a href="#">TUE<br/>5</a></li>
                    <li><a href="#">WED<br/>6</a></li>
                    <li><a href="#">THU<br/>7</a></li>
                    <li><a href="#" id="habitMain">FRI<br/>8</a></li>
                    <li><a href="#">SAT<br/>9</a></li>
                </ul>
            </div>
        </div>
        <div className="habMain">
          <div className="mainhabHeaders">
            <ul>
              <li>HABITS</li>
              <li>
                <div className="mainhabDays">
                  <ul>
                    <li>S</li>
                    <li>M</li>
                    <li>T</li>
                    <li>W</li>
                    <li>TH</li>
                    <li>F</li>
                    <li>S</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="habSections">
              <div className="habLists">
                <ul>
                  <li>MAKE BED</li>
                  <li>MOISTURIZE</li>
                  <li>PRAY</li>
                  <li>CLEAN <br/> ROOM</li>
                  <li>VITAMINS</li>
                  <li>STRETCH</li>
                  <li>SKIN CARE <br/> ROUTINE</li>
                </ul>
              </div>
            <div className="habButtons">
              <div className="habFill">
                <ul>
                  <li>
                    <div className="habBed">
                      <ul>
                        <li><button className="box1"></button></li>
                        <li><button className="box2"></button></li>
                        <li><button className="box3"></button></li>
                        <li><button className="box4"></button></li>
                        <li><button className="box5"></button></li>
                        <li><button className="box6"></button></li>
                        <li><button className="box7"></button></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="habMoist">
                      <ul>
                        <li><button className="box1"></button></li>
                        <li><button className="box2"></button></li>
                        <li><button className="box3"></button></li>
                        <li><button className="box4"></button></li>
                        <li><button className="box5"></button></li>
                        <li><button className="box6"></button></li>
                        <li><button className="box7"></button></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="habPray">
                      <ul>
                        <li><button className="box1"></button></li>
                        <li><button className="box2"></button></li>
                        <li><button className="box3"></button></li>
                        <li><button className="box4"></button></li>
                        <li><button className="box5"></button></li>
                        <li><button className="box6"></button></li>
                        <li><button className="box7"></button></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="habClean">
                      <ul>
                        <li><button className="box1"></button></li>
                        <li><button className="box2"></button></li>
                        <li><button className="box3"></button></li>
                        <li><button className="box4"></button></li>
                        <li><button className="box5"></button></li>
                        <li><button className="box6"></button></li>
                        <li><button className="box7"></button></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="habVit">
                      <ul>
                        <li><button className="box1"></button></li>
                        <li><button className="box2"></button></li>
                        <li><button className="box3"></button></li>
                        <li><button className="box4"></button></li>
                        <li><button className="box5"></button></li>
                        <li><button className="box6"></button></li>
                        <li><button className="box7"></button></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="habStret">
                      <ul>
                        <li><button className="box1"></button></li>
                        <li><button className="box2"></button></li>
                        <li><button className="box3"></button></li>
                        <li><button className="box4"></button></li>
                        <li><button className="box5"></button></li>
                        <li><button className="box6"></button></li>
                        <li><button className="box7"></button></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="habSkin">
                      <ul>
                        <li><button className="box1"></button></li>
                        <li><button className="box2"></button></li>
                        <li><button className="box3"></button></li>
                        <li><button className="box4"></button></li>
                        <li><button className="box5"></button></li>
                        <li><button className="box6"></button></li>
                        <li><button className="box7"></button></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>  
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
export default HabitTracker;