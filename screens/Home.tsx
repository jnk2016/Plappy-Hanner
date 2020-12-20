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
            <title>HOMESCREEN</title>
            <link rel="stylesheet" href="hearthome.css"/>
            <style>@import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');</style>
        </head>
        <body>
            <main>
                <section id="section-a" className="grid">
                    <div className="calendar-wrap">
                        <h2 className="month-name">JAN 2021</h2>
                        <div className="days-jan">
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
                </section>
                <section id="section-b" className="grid"> 
                    <div className="yellow-wrap">
                        <div className="main-static">
                            <ul>
                                <li><button>OVERVIEW</button></li>
                                <li><button>DAILY</button></li>
                                <li><button>WEEKLY</button></li>
                                <li><button>MONTHLY</button></li>
                            </ul>
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
                                        <div className="tasks">
                                            <h3>TASKS</h3>
                                            <h4>12</h4>
                                            <p>pending</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="section-c" className="grid">
                    <div className="features-menu">
                        <h6>My Features</h6>
                        <ul>
                            <li><button style={{backgroundColor: "#e8d7f7"}}>HABITS</button></li>
                            <li><button style={{backgroundColor: "#ffe6ef"}}>PERIOD</button></li>
                            <li><button style={{backgroundColor:"#EEB4C9"}}>GOALS</button></li>
                            <li><button style={{background: "#FFF9C4"}}>MOOD</button></li>
                            <li><button style={{background: "#FFE0C2"}}>MEAL</button></li>
                            <li><button style={{background: "rgba(255, 151, 151, 0.5)"}}>VISION <br/> BOARD</button></li>
                            <li><button style={{background: "#E3EDFF"}}>BRAIN <br/> DUMP</button></li>
                            <li><button style={{background: "#E5E5E5"}}>ACTIVITY</button></li>
                            <li><button style={{background: "#CCDED6"}}>BUDGET</button></li>
                        </ul>
                    </div>
                </section>
            </main>
        </body>
        </html>
      </div>
  );
  }
}
export default Home;