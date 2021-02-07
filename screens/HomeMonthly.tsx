import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert, TouchableOpacity} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import XDate from 'xdate';
import LinearGradient from '../assets/features/LinearGradient';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default class HomeMonthly extends Component<{},any> {

    state = {
        curTime: null,
        date: null,
        dayOfWeek: null,
        currentMonth: null,
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
              curTime : new XDate().toString('HH:mm'),
              date: new XDate().toString('MMM d yyyy'),
              dayOfWeek: new XDate().toString('dddd'),
              currentMonth: new XDate().toString('MMMM'),
            })
          }, 1000)
    }

    render() {return(
        <View style={styles.bigContainer}>
             <View style={styles.headContainer}>
                <Text style={styles.headText}>{this.state.currentMonth}
                </Text>
            </View>
            <View style={styles.smallContainer}>
                <View style={styles.containerAlign}>
                <View style={styles.leftContainer}>
                    <Text style={styles.leftHead}>IMPORTANT DATES</Text>
                    <View style={styles.leftAlign}>
                    <View style={styles.leftLeft}>
                        <Text style={styles.leftText}>
                            <Text>FRI</Text>
                            <Text>8</Text>
                        </Text>
                        <Text style={styles.leftText}>
                            <Text>MON</Text>
                            <Text>10</Text>
                        </Text>
                        <Text style={styles.leftText}>
                            <Text>TUE</Text>
                            <Text>11</Text>
                        </Text>
                        <Text style={styles.leftText}>
                            <Text>THU</Text>
                            <Text>13</Text>
                        </Text>
                        <Text style={styles.leftText}>
                            <Text>SAT</Text>
                            <Text>16</Text>
                        </Text>
                        <Text style={styles.leftText}>
                            <Text>THU</Text>
                            <Text>20</Text>
                        </Text>
                        <Text style={styles.leftText}>
                            <Text>SUN</Text>
                            <Text>27</Text>
                        </Text>
                    </View>
                    <View style={styles.leftRight}>
                        <Text style={styles.rightText}>Lorem, ipsum</Text>
                        <Text style={styles.rightText}>Lorem, ipsum</Text>
                        <Text style={styles.rightText}>Lorem, ipsum</Text>
                        <Text style={styles.rightText}>Lorem, ipsum</Text>
                        <Text style={styles.rightText}>Lorem, ipsum</Text>
                        <Text style={styles.rightText}>Lorem, ipsum</Text>
                        <Text style={styles.rightText}>Lorem, ipsum</Text>
                    </View>
                    </View>
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.rightCloud}>
                    <View style={styles.rightTop}>
                        <Text style={styles.rightHead}>
                            <Text>DON'T</Text>
                            <Text>FORGET</Text>
                            </Text>
                            <View style={styles.rightAlign}>
                        <Text style={styles.rightText}>Lorem, ipsum.</Text>
                        <Text style={styles.rightText}>Lorem, ipsum.</Text>
                        <Text style={styles.rightText}>Lorem, ipsum.</Text>
                        <Text style={styles.rightText}>Lorem, ipsum.</Text>
                        <Text style={styles.rightText}>Lorem, ipsum.</Text>
                        </View>
                    </View>
                    <View style={styles.rightBottom}>
                        <Text style={styles.rightHead}>
                            <Text>UPCOMING</Text>
                            <Text>BIRTHDAYS</Text>
                            </Text>
                        <View style={styles.birthdayContainer}>
                            <View style={styles.birthdayBox}>
                                <Text style={styles.birthdayText}>
                                    <Text>BRIAN KIM</Text>
                                    <Text>15</Text>
                                </Text>
                            </View>
                            <View style={styles.birthdayBox}>
                                <Text style={styles.birthdayText}>
                                    <Text>BRIAN KIM</Text>
                                    <Text>15</Text>
                                </Text>
                            </View>
                            <View style={styles.birthdayBox}>
                                <Text style={styles.birthdayText}>
                                    <Text>BRIAN KIM</Text>
                                    <Text>15</Text>
                                </Text>
                            </View>
                            <View style={styles.birthdayBox}>
                                <Text style={styles.birthdayText}>
                                    <Text>BRIAN KIM</Text>
                                    <Text>15</Text>
                                </Text>
                            </View>
                            <View style={styles.birthdayBox}>
                                <Text style={styles.birthdayText}>
                                    <Text>BRIAN KIM</Text>
                                    <Text>15</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                    </View>
                </View>
                </View>
            </View>
        </View>

    );
}}

const styles = StyleSheet.create ({
    bigContainer: {
        width:"100%",
        height:'100%',
        backgroundColor:"white",
    },
    headContainer: {
        borderTopWidth:2,
        borderBottomWidth:2,
        borderTopColor:'black',
        borderBottomColor:'black',
        width:'90%',
        height:'auto',
        padding:5,
        alignSelf:'center',
        marginTop:20,
        textAlign:'center',
    },
    headText: {
        fontSize:14,
        color:'black',
        fontFamily:'spartan',
        textTransform:'uppercase',
    },
    smallContainer: {
        backgroundColor:'#a0b2d4',
        width:'100%',
        height:'100%',
        alignItems:'center',
        padding:10,
    },
    containerAlign: {
        width:'95%',
        height:'95%',
        alignSelf:'center',
        justifyContent:'space-around',
        display:'flex',
        flexDirection:'row',
    },
    leftContainer: {
        borderWidth:2,
        borderColor:'white',
        width:'60%',
        height:'95%',
        padding:5,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    leftAlign: {
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center'
    },
    rightCloud: {
        width:'100%',
        height:'95%',
        display:'flex',
        flexDirection:'column',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'space-between',
    },
    leftHead: {
        color:'white',
        fontSize:14,
        fontWeight:'600',
        fontFamily:"spartan",
    },
    leftLeft: {
        display:'flex',
        flexDirection:'column',
        width:'30%',
        height:'80%',
        alignSelf:'center',
        justifyContent:'space-between',
        textAlign:'center',
        borderRightWidth:2,
        borderRightColor:'#fffbdb',
    },
    leftText: {
        color:'white',
        display:'flex',
        flexDirection:'column',
        fontSize:14,
        lineHeight:20,
    },
    leftRight: {
        width:'70%',
        height:'75%',
        display:'flex',
        flexDirection:'column',
        alignSelf:'center',
        justifyContent:"space-between",
        textAlign:'left',
    },
    rightText: {
        textTransform:'uppercase',
        color:'black',
        fontSize:10,
        fontFamily:'spartan',
        marginLeft:5,
    },
    rightContainer: {
        width:'40%',
        height:'95%',
        alignItems:'center',
    },
    rightTop: {
        backgroundColor:'#fffbdb',
        width:'100%',
        height:'40%',
        alignContent:'center',
        textAlign:'center',
        paddingTop:20,
    },
    rightHead: {
        fontWeight:'600',
        fontSize:14,
        fontFamily:'spartan',
        color:'black',
        display:'flex',
        flexDirection:'column',
        lineHeight:20,
    },
    rightAlign: {
        marginTop:20,
        display:'flex',
        flexDirection:'column',
        width:'100%',
        height:"60%",
        alignSelf:'center',
        justifyContent:'space-between'
    },
    rightBottom: {
        width:'95%',
        height:'30%',
        alignSelf:'center',
        textAlign:'center',
    },
    birthdayContainer: {
        display:'flex',
        flexDirection:'column',
        width:'100%',
        height:'95%',
        alignSelf:"center",
        justifyContent:'space-between',
    },
    birthdayBox: {
        backgroundColor:'#fffbdb',
        width:"100%",
        height:'15%',
        padding:5,
    },
    birthdayText: {
        color:'black',
        width:'95%',
        height:'auto',
        justifyContent:'space-between',
        alignSelf:'center',
        display:'flex',
        flexDirection:'row',
        fontSize:12,
    },
});