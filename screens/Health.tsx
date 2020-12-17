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


class Health extends Component {

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
            <ul>
                <li><a href="#">HEALTH</a></li>
                <li><img src={Heart} alt="heart" className="heart"/></li>
                <li><img src={Ellipseavatar} alt="avatar" className="avatar"/></li>
            </ul>
        </div>
        <div className="healthContainer">
            <ul>
                <li>
                    <div className="period">
                        <a href="#">PERIOD TRACKER</a>
                        <div className="periodButton_container">
                            <p>PERIOD IN:</p>
                            <h2>5 DAYS</h2>
                            <button>LOG MY PERIOD</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="meal">
                        <h3>MEAL PLANNER</h3>
                        <div className="mealButton_container">
                            <ul>
                                <li>
                                    <div className="breakfast">breakfast
                                        <div className="cal">
                                            <a href="#">270 <br/>cal </a>
                                        </div>  
                                    </div>
                                </li>
                                <li>
                                    <div className="lunch">lunch
                                        <div className="cal2">
                                            <a href="#">400<br/>cal</a>
                                        </div>  
                                    </div>
                                </li>
                                <li>
                                    <div className="dinnerContainer">dinner
                                        <div className="cal3">
                                            <a href="#">...</a>
                                        </div>  
                                    </div>
                                </li>
                            </ul>
                            <button>PLAN MY MEALS</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="activity">
                        <h3>ACTIVITY TRACKER</h3>
                        <div className="activityButton_container3">
                            <ul>
                                <li><img src={bed} alt="bed"/></li>
                                <li><img src={water} alt="water"/></li>
                                <li><img src={fire} alt="fire"/></li>
                                <li><img src={fheart} alt="fheart"/></li>
                                <li><img src={steps} alt="step"/></li>
                            </ul>
                            <button>SEE MY ACTIVITY</button>
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
export default Health;