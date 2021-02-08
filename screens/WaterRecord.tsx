import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert, TouchableOpacity} from 'react-native';
// import '../assets/css/selfcare.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import { PieChart } from 'react-minimal-pie-chart';
import LinearGradient from '../assets/features/LinearGradient';
import XDate from 'xdate';


const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default class Home extends Component<{},any> {

    state = {
        curTime: null,
        date: null,
        dayOfWeek: null,
        currentMonth: null,
        dayDate: null,
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
              curTime : new XDate().toString('HH:mm'),
              date: new XDate().toString('MMM d yyyy'),
              dayOfWeek: new XDate().toString('dddd'),
              currentMonth: new XDate().toString('MMMM'),
              dayDate: new XDate().toString('dddd d'),
            })
          }, 1000)
    }

    render() {return(
      <View style={styles.bigContainer}>
          <View style={styles.dateBox}>
              <Text style={styles.dateText}>{this.state.dayDate}</Text>
          </View>
          <View style={styles.mainContainer}>
              <View style={styles.textHead}>
                <Text style={styles.topText}>TOTAL:1200ml</Text>
                <Text style={styles.headText}>TODAY</Text>
              </View>
              <View style={styles.tableContainer}>
                  <View style={styles.tableContent}>
                      <View style={styles.tableHead}>
                    <Text style={styles.tableheadText}>
                        <Text>TIME</Text>
                        <Text>WATER INTAKE</Text>
                    </Text>
                      </View>
                      <View style={styles.tableBox}>
                          <View style={styles.timeBox}>
                              <Text style={styles.timeText}>10:00</Text>
                          </View>
                          <View style={styles.waterBox}>
                              <Text style={styles.waterText}>200ml</Text>
                          </View>
                      </View>
                      <View style={styles.tableBox}>
                          <View style={styles.timeBox}>
                              <Text style={styles.timeText}>11:30</Text>
                          </View>
                          <View style={styles.waterBox}>
                              <Text style={styles.waterText}>200ml</Text>
                          </View>
                      </View>
                      <View style={styles.tableBox}>
                          <View style={styles.timeBox}>
                              <Text style={styles.timeText}>12:15</Text>
                          </View>
                          <View style={styles.waterBox}>
                              <Text style={styles.waterText}>150ml</Text>
                          </View>
                      </View>
                      <View style={styles.tableBox}>
                          <View style={styles.timeBox}>
                              <Text style={styles.timeText}>13:00</Text>
                          </View>
                          <View style={styles.waterBox}>
                              <Text style={styles.waterText}>225ml</Text>
                          </View>
                      </View>
                      <View style={styles.tableBox}>
                          <View style={styles.timeBox}>
                              <Text style={styles.timeText}>13:45</Text>
                          </View>
                          <View style={styles.waterBox}>
                              <Text style={styles.waterText}>225ml</Text>
                          </View>
                      </View>
                      <View style={styles.tableBox}>
                          <View style={styles.timeBox}>
                              <Text style={styles.timeText}>14:30</Text>
                          </View>
                          <View style={styles.waterBox}>
                              <Text style={styles.waterText}>250ml</Text>
                          </View>
                      </View>
                  </View>
              </View>
              <TouchableOpacity style={styles.mainButton}>
                  <Text style={styles.mainText}>RECORD WATER</Text>
              </TouchableOpacity>
          </View>
      </View>
  );
}}

const styles = StyleSheet.create ({
    bigContainer:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        justifyContent:'center'
    },
    dateBox:{
        borderBottomColor:'black',
        borderBottomWidth:2,
        width:'85%',
        height:'5%',
        textAlign:'center',
        alignSelf:"center",
    },
    dateText:{
        color:'black',
        textTransform:'uppercase',
        fontSize:14,
        fontFamily:"spartan",
        letterSpacing:1,
        fontWeight:'600'
    },
    mainContainer: {
        backgroundColor:'#8c96ab',
        width:'100%',
        height:'90%',
        paddingTop:30,
    },
    textHead:{
        display:'flex',
        flexDirection:'column',
        width:'90%',
        height:'10%',
        alignSelf:'center',
        justifyContent:'space-around',
    },
    topText:{
        textAlign:'right',
        color:'white',
        fontSize:14,
        letterSpacing:1,
        fontFamily:'spartan',
        textDecorationLine:'underline',
    },
    headText:{
        color:'white',
        fontSize:18,
        fontFamily:'spartan',
        letterSpacing:1,
        textAlign:'left',
        fontWeight:'600',
    },
    tableContainer:{
        width:'90%',
        height:'70%',
        display:'flex',
        flexDirection:'column',
        alignSelf:"center",
        justifyContent:'space-around',
        alignItems:'center',
    },
    tableheadText:{
        color:'white',
        fontSize:14,
        letterSpacing:0.5,
        fontFamily:'spartan',
        display:'flex',
        flexDirection:'row',
        width:'70%',
        height:'auto',
        alignSelf:'center',
        justifyContent:"space-between",
    },
    tableContent:{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        height:'80%',
        alignSelf:'center',
    },
    tableHead:{
        height:'5%',
        width:'100%',
    },
    tableBox:{
        borderTopWidth:1,
        borderBottomWidth:1,
        borderTopColor:'white',
        borderBottomColor:'white',
        width:'100%',
        height:'15%',
        display:'flex',
        flexDirection:'row',
        alignContent:'center',
    },
    timeBox:{
        borderRightColor:'white',
        borderRightWidth:1,
        alignContent:'center',
        width:'35%',
        height:'100%',
        justifyContent:'center',
        textAlign:'center',
    },
    timeText:{
        color:'white',
        fontFamily:"spartan",
        fontSize:12,
        letterSpacing:0.5,
    },
    waterBox:{
        width:'55%',
        height:'100%',
        alignContent:'center',
        textAlign:"center",
        justifyContent:'center',
    },
    waterText:{
        color:'white',
        fontSize:14,
        fontWeight:'600',
        letterSpacing:0.5,
        alignSelf:'center',
    },
    mainButton:{
        backgroundColor:'#e5e5e5',
        width:140,
        height:35,
        padding:10,
        textAlign:'center',
        alignSelf:"center",
        borderRadius:10,
    },
    mainText:{
        color:'black',
        fontSize:12,
        fontFamily:'spartan',
    },
})