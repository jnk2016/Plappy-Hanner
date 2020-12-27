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
            <style>@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');</style>
            <style>@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@600&display=swap');</style>
            <style>@import url('https://fonts.googleapis.com/css2?family=Abhaya+Libre&display=swap');</style>
        </head>
        <body>
            <div className="homescreen">
                <div className="homeSearch">
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="homeContainer">
                <div className="homeVariable">
                    <ul>
                        <li>
                            <time>15:01</time>
                            <h2 className="homeDay">friday, january 8</h2>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="homeSections">
                <div className="homeSide">
                    <ul>
                        <li>
                            <div className="homeGoals">
                                <div className="homeNumber">
                                    4
                                </div>
                                <p>goals</p>
                            </div>
                        </li>
                        <li>
                            <div className="homeTasks">
                                <div className="homeNumber">
                                    12
                                </div>
                                <p>tasks</p>
                            </div>
                        </li>
                        <li>
                            <div className="homeEvents">
                                <div className="homeNumber">
                                    3
                                </div>
                                <p>events</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="homeCalendar">
                    <div className="homeWeek">
                        <ul>
                            <li>SUN</li>
                            <li>MON</li>
                            <li>TUE</li>
                            <li>WED</li>
                            <li>THU</li>
                            <li>FRI
                                <a href="#">1</a>
                            </li>
                            <li>SAT
                                <a href="#">2</a>
                            </li>
                        </ul>
                    </div>
                    <div className="homeWeekdays">
                        <ul>
                            
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li>8</li>
                            <li>9</li>
                            <li>10</li>
                            <li>11</li>
                            <li>12</li>
                            <li>13</li>
                            <li>14</li>
                            <li>15</li>
                            <li>16</li>
                            <li>17</li>
                            <li>18</li>
                            <li>19</li>
                            <li>20</li>
                            <li>21</li>
                            <li>22</li>
                            <li>23</li>
                            <li>24</li>
                            <li>25</li>
                            <li>26</li>
                            <li>27</li>
                            <li>28</li>
                            <li>29</li>
                            <li>30</li>
                            <li>31</li>
                        </ul>
                    </div>
                </div>
            </div> 
            <div className="homeSchedule">
                <h3>Schedule</h3>
                <div className="homeButtons">
                    <ul>
                        <li><button className="homeDaily">DAILY</button></li>
                        <li><button className="homeWeekly">WEEKLY</button></li>
                        <li><button className="homeMonthly">MONTHLY</button></li>
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