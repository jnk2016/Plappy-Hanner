import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import AxiosLogin from '../Axios Functions/AxiosLogin';
import Modal from 'modal-react-native-web';
import '../assets/css/health.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import bed from '../assets/images/bed.png';
import fire from '../assets/images/fire.png';
import water from '../assets/images/water.png';
import fheart from '../assets/images/fheart.png';
import steps from '../assets/images/steps.png';


class HealthMealPlanner extends Component {

  render() {return (
    <div className="Health">
    <html lang="en">
    <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Document</title>
        <link rel="stylesheet" href="health.css"/>
        <style>@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');</style>
        <style>@import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');</style>
    </head>
    <body>
    <div className="healthHeader">
            <img src={Heart} alt="heart" className="heart"/>  
        </div>
        <div className="healthCalendar">
            <div className="healthWeek">
                <h1 className="healthcurrentWeek">CURRENT WEEK</h1>
                <div className="healthDays">
                    <a href="#">SUN <br/>3</a>
                    <a href="#">MON <br/>4</a>
                    <a href="#">TUE <br/>5</a>
                    <a href="#">WED <br/>6</a>
                    <a href="#">THU <br/>7</a>
                    <a href="#" id="healthMain">FRI <br/>8</a>
                    <a href="#">SAT <br/>9</a>
                </div>
            </div>
            <div className="healthContainer">
                <ul>
                    <li>
                        <h2 className="healthHead">MEALS PLANNED THIS WEEK</h2>
                    </li>
                    <li>
                        <div className="healthCircleMeal">
                            <h3 className="healthNumber">21</h3>
                            <p className="healthDesc">meals</p>
                        </div>
                    </li>
                    <li>
                    <button className="healthTrack" onClick={()=> this.props.navigation.navigate('Meal')}>PLAN MY MEALS</button>
                    </li>
                </ul>
            </div>
        </div>
        
        <div className="healthButton">
            <ul>
                <li>
                    <button className="healthPeriod" onClick={()=> this.props.navigation.navigate('Health')}>
                        PERIOD TRACKER
                    </button>
                    <button className="healthMealGold">
                        MEAL PLANNER
                    </button>
                    <button className="healthActivity" onClick={()=> this.props.navigation.navigate('HealthActivityTracker')}>
                        WATER TRACKER
                    </button>
                </li>
            </ul>
        </div>
    </body>
    </html>
    </div>
  );
  }
}
export default HealthMealPlanner;