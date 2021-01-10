import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import AxiosLogin from '../Axios Functions/AxiosLogin';
import Modal from 'modal-react-native-web';
import {CSS} from '../assets/css/focus.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';


class FocusBudgetTracker extends Component {

  render() {return (
    <div className="Focus">
    <html lang="en">
    <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Document</title>
        <link rel="stylesheet" href={CSS}/>
        <style>@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');</style>
        <style>@import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');</style>
        <style>@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@600&display=swap');</style>
    </head>
    <body>
        <div className="focusHeader">
            <img src={CalStar} alt="focus" className="focus"/>  
        </div>
        <div className="focusCalendar">
            <div className="focusWeek">
                <h1 className="focuscurrentWeek">CURRENT WEEK</h1>
                <div className="focusDays">
                    <a href="#">SUN <br/>3</a>
                    <a href="#">MON <br/>4</a>
                    <a href="#">TUE <br/>5</a>
                    <a href="#">WED <br/>6</a>
                    <a href="#">THU <br/>7</a>
                    <a href="#" id="focusMain">FRI <br/>8</a>
                    <a href="#">SAT <br/>9</a>
                </div>
            </div>
            <div className="focusContainer">
                <ul>
                    <li>
                        <h2 className="focusHead">MONTHLY BUDGET</h2>
                    </li>
                    <li>
                        <div className="focusCircleBudget">
                            <h3 className="focusNumber" id="focusB">2500</h3>
                            <p className="focusDesc">dollars</p>
                        </div>
                    </li>
                    <li>
                    <button className="focusTrack" onClick={()=> this.props.navigation.navigate('BudgetTracker')}>PLAN MY BUDGET</button>
                    </li>
                </ul>
            </div>
        </div>
        
        <div className="focusButton">
            <ul>
                <li>
                    <button className="focusGoal" onClick={()=> this.props.navigation.navigate('Focus')}>
                        GOAL TRACKER
                    </button>
                    <button className="focusTask" onClick={()=> this.props.navigation.navigate('FocusTaskManager')}>
                        TASK MANAGER
                    </button>
                    <button className="focusBudgetGold">
                        BUDGET TRACKER
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
export default FocusBudgetTracker;