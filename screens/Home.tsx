import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import AxiosLogin from '../Axios Functions/AxiosLogin';
import Modal from 'modal-react-native-web';
import '../assets/css/hearthome.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png'; 

class Home extends Component {

  render() {return (
    <div className="Home">
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Document</title>
            <link rel="stylesheet" href="hearthome.css"/>
            <style>@import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');</style>
        </head>
        <body>
            <div className="mainhome">
                <div className="header_heart">
                    <img src={Ellipseavatar} alt="avatar"/>
                    <div className="heading_heart">
                        <h2>Hello, Danphuong</h2>
                        <p>Have a great day!</p>  
                    </div>
                </div>
            </div>
            <div className="mainNotification">
                <div className="homeCalendar">
                    <p><b>JANUARY 2021</b></p>
                    <div className="options">
                        <ul>
                            <li><a href="#">SUN<br/>3</a></li>
                            <li><a href="#">MON<br/>4</a></li>
                            <li><a href="#">TUE<br/>5</a></li>
                            <li><a href="#">WED<br/>6</a></li>
                            <li><a href="#">THU<br/>7</a></li>
                            <li><a href="#" id="main">FRI<br/>8</a></li>
                            <li><a href="#">SAT<br/>9</a></li>
                        </ul>
                    </div>
                </div>
            </div> 
            <div className="home_button_nav">
                <ul>
                    <li><button>OVERVIEW</button></li>
                    <li><button>DAILY</button></li>
                    <li><button>WEEKLY</button></li>
                    <li><button>MONTHLY</button></li>
                    <li>
                        <div className="notification">
                            <ul>
                                <li>
                                    <div className="homeEvents">
                                        <h3>EVENTS</h3>
                                        <h4>3</h4>
                                        <p>upcoming</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="homeTasks">
                                        <h3>TASKS</h3>
                                        <h4>12</h4>
                                        <p>pending</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div> 
                <div className="feat_container">
                    
                    
                    <div className="feat_options">
                        <h5>My Features</h5>
                        <ul>
                            <li><button style={{backgroundColor: "#e8d7f7"}}>HABITS</button></li>
                            <li><button style={{backgroundColor: "#ffe6ef"}}>PERIOD</button></li>
                            <li><button style={{backgroundColor:"#EEB4C9"}}>GOALS</button></li>
                            <li><button style={{background: "#FFF9C4"}}>MOOD</button></li>
                            <li><button style={{background: "#FFE0C2"}}>MEAL</button></li>
                            <li><button style={{background: "#FF9797"}}>VISION BOARD</button></li>
                            <li><button style={{background: "#E3EDFF"}}>BRAIN DUMP</button></li>
                            <li><button style={{background: "#E5E5E5"}}>ACTIVITY</button></li>
                            <li><button style={{background: "#CCDED6"}}>BUDGET</button></li>
                        </ul>
                    </div>
                </div> 
            
        </body>
        </html>
      </div>
  );
  }
}
export default Home;