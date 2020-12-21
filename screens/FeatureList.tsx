import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import AxiosLogin from '../Axios Functions/AxiosLogin';
import Modal from 'modal-react-native-web';
import '../assets/css/featureslist.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import SelfCare from './SelfCare';

class FeatureList extends Component {
  click(){
    console.log("Button pressed");
  }

  render() {return (
    <div className="FeatureList">
    <html lang="en">
    <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Document</title>
        <link rel="stylesheet" href="featureslist.css"/>
        <style>@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');</style>
        <style>@import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');</style>
    </head>
    <body>
        <div className="featuresList">
            <div className="headerFeatures">
                <h1>MY FEATURES</h1>
                {/* <img src="../assets/images/Ellipseavatar.png" alt="avatar"/> */}
                <img src={Ellipseavatar} alt="avatar"/>
            </div>
            <div className="featuresContainer">
                <div className="containerFeatures">
                    <ul>
                        <li>
                            <button className="selfcare" onClick={()=> this.props.navigation.navigate('SelfCare')}>
                                    <a href="#">SELF CARE</a>
                                    <img src={Vector} alt="flower"/>
                            </button>
                        </li>
                        <li>
                            <button className="health" onClick={()=> this.props.navigation.navigate('Health')}>
                                    <a href="#">HEALTH</a>
                                    <img src={Heart} alt="heart"/>
                            </button>
                        </li>
                        <li>
                            <button className="focus">
                                <a href="#">FOCUS</a>
                                <img src={CalStar} alt="calendar" onClick={()=> this.props.navigation.navigate('Focus')}/>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </body>
    </html>
    </div>
  );
  }
}
export default FeatureList;