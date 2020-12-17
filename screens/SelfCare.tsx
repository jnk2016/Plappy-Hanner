import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import AxiosLogin from '../Axios Functions/AxiosLogin';
import Modal from 'modal-react-native-web';
import '../assets/css/selfcare.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';


class SelfCare extends Component {

  render() {return (
    <div className="SelfCare">
    <html lang="en">
    <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Document</title>
        <link rel="stylesheet" href="selfcare.css"/>
        <style>@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');</style>
        <style>@import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');</style>
    </head>
    <body>
        {/* <div className="navbar">
            <div className="bottom_options">
                <ul>
                    <li><a href="#"><img src="images/home.png" alt="home" id="home"/></a></li>
                    <li><a href="#"><img src="images/CALENDAR.png" alt="calen" id="calendar"/></a></li>
                    <li><a href="#"><img src="images/EVENT.png" alt="event" id="event"/></a></li>
                    <li><a href="#"><img src="images/ACTIVITY.png" alt="activity" id="activity"/></a></li>
                    <li><a href="#"><img src="images/SETTINGS.png" alt="settings" id="settings"/></a></li>
                </ul>
            </div>
        </div> */}
        <div className="selfcareHeader">
            <ul>
                <li><a href="#">SELF CARE</a></li>
                <li><img src={Vector} alt="flower" className="flower"/></li>
                <li><img src={Ellipseavatar} alt="avatar" className="avatar"/></li>
            </ul>
        </div>
        <div className="selfcareContainer">
            <ul>
                <li>
                    <div className="habit">
                        <a href="#">HABIT TRACKER</a>
                        <div className="selfcare_button_container">
                            <button>TRACK MY PROGRESS</button>
                            <ul className="days">
                                <li>S</li>
                                <li>M</li>
                                <li>T</li>
                                <li>W</li>
                                <li>R</li>
                                <li>F</li>
                                <li>S</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="mood">
                        <a href="#">MOOD TRACKER</a>
                        <div className="selfcare_button_container2">I AM FEELING...
                            <button>SHARE MY MOOD</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="brain">
                        <h3>BRAIN DUMP</h3>
                        <div className="selfcare_button_container3">
                            <h4>WHAT'S ON YOUR MIND?</h4>
                            <button>DECLUTTER MY MIND</button>
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
export default SelfCare;