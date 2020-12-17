import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import AxiosLogin from '../Axios Functions/AxiosLogin';
import Modal from 'modal-react-native-web';
import '../assets/css/focus.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Calendar from '../assets/images/CALENDAR.png';


class Focus extends Component {

  render() {return (
    <div className="Focus">
    <html lang="en">
    <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Document</title>
        <link rel="stylesheet" href="focus.css"/>
        <style>@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');</style>
        <style>@import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');</style>
    </head>
    <body>
        <div className="focusHeader">
            <ul>
                <li><a href="#">FOCUS</a></li>
                <li><img src={Calendar} alt="calendar" className="calendi"/></li>
                <li><img src={Ellipseavatar} alt="avatar" className="avatar"/></li>
            </ul>
        </div>
        <div className="focusContainer">
            <ul>
                <li>
                    <div className="goal">
                        <a href="#">GOAL TRACKER</a>
                        <div className="button_container">
                            <p>4 GOALS <mark className="orange">IN PROGRESS</mark></p>
                            <button>KEEP WORKING</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="vision">
                        <h2>VISION BOARD</h2>
                        <div className="visionButton_container2">
                            <p>ENVISION YOUR GOALS</p>
                            <button>GET INSPIRED</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="budget">
                        <h3>BUDGET TRACKER</h3>
                        <div className="button_container3">
                            <h4>SAVINGS GOAL</h4>
                            <ul>
                                <li>
                                    <div className="month">
                                        <p>per month</p>
                                        <a href="#">$1500</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="year">
                                        <p>for year</p>
                                        <a href="#">$18000</a>
                                    </div>
                                </li>
                            </ul>
                            <button>TRACK SAVINGS</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </body>
    </html>
    </div>
  );
  }
}
export default Focus;