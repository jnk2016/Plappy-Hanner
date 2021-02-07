import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert, TouchableOpacity} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import XDate from 'xdate';
import LinearGradient from '../assets/features/LinearGradient';

export default function HomeWeekly ({navigation}){

    return (
        <View style={styles.bigContainer}>
            <View style={styles.headContainer}>
                <Text style={styles.headText}>
                    <Text>WEEK OF:</Text>
                    <Text style={{fontWeight:'600'}}>1/3-1/9</Text>
                </Text>
            </View>
            <View style={styles.smallContainer}>
                <View style={styles.focusContainer}>
                    <Text style={styles.mainText}>WEEK'S FOCUS:</Text>
                    <TouchableOpacity style={styles.focusBox}>
                        <View style={{borderBottomWidth:2,borderBottomColor:'white',width:'90%',height:'85%',alignSelf:'center'}}></View>
                    </TouchableOpacity>
                </View>
                <View style={styles.topContainer}>
                    <Text style={styles.mainText}>MY TOP THREE</Text>
                    <View style={styles.threeContainer}>
                        <TouchableOpacity style={styles.topthreeButton}>
                            <Text style={styles.topthreeText}>Lorem ipsum dolor sit amet.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.topthreeButton}>
                            <Text style={styles.topthreeText}>Lorem ipsum dolor sit amet.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.topthreeButton}>
                            <Text style={styles.topthreeText}>Lorem ipsum dolor sit amet.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.upcomingBox}>
                    <View style={styles.headUpcoming}>
                        <Text style={styles.mainText}>UPCOMING DEADLINES</Text>
                    </View>
                    <View style={styles.eventBox}>
                        <View style={styles.eventContainer}>
                            <View style={styles.eventCircle}>
                                <Text style={styles.circleText}>10</Text>
                            </View>
                            <Text style={styles.eventText}>Lorem ipsum dolor sit amet.</Text>
                        </View>
                        <View style={styles.eventContainer}>
                            <View style={styles.eventCircle}>
                                <Text style={styles.circleText}>15</Text>
                            </View>
                            <Text style={styles.eventText}>Lorem ipsum dolor sit amet.</Text>
                        </View>
                        <View style={styles.eventContainer}>
                            <View style={styles.eventCircle}>
                                <Text style={styles.circleText}>20</Text>
                            </View>
                            <Text style={styles.eventText}>Lorem ipsum dolor sit amet.</Text>
                        </View>
                        <View style={styles.eventContainer}>
                            <View style={styles.eventCircle}>
                                <Text style={styles.circleText}>27</Text>
                            </View>
                            <Text style={styles.eventText}>Lorem ipsum dolor sit amet.</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    bigContainer: {
        width:'100%',
        height:'100%',
        backgroundColor:'white',
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
    },
    headText: {
        color:'black',
        fontSize:14,
        display:'flex',
        flexDirection:'row',
        width:'100%',
        height:'auto',
        fontFamily:'spartan',
        alignSelf:'center',
        justifyContent:'space-between',
    },
    smallContainer: {
        width:'100%',
        height:'100%',
        backgroundColor:'#a0b2d4',
        display:'flex',
        flexDirection:'column',
    },
    focusContainer: {
        width:'90%',
        height:'20%',
        display:'flex',
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'space-between',
        alignItems:'center',
    },
    mainText: {
        color:'white',
        fontWeight:'600',
        fontFamily:'spartan',
        fontSize:14,
        lineHeight:20,
    },
    focusBox: {
        borderWidth:2,
        borderColor:'white',
        width:'80%',
        height:'50%',
    },
    topContainer: {
        width:'80%',
        height:'25%',
        alignSelf:'center',
        display:'flex',
        flexDirection:'column',
        textAlign:'center',
    },
    threeContainer: {
        display:'flex',
        flexDirection:'column',
        alignSelf:'center',
        justifyContent:'space-between',
        width:'100%',
        height:'60%',
    },
    topthreeButton: {
        width:'100%',
        height:'25%',
        backgroundColor:'#fffbdb',
        textAlign:'center',
        padding:10,
    },
    topthreeText: {
        color:'black',
        fontSize:10,
        fontFamily:'spartan',
        textTransform:'uppercase',
    },
    upcomingBox: {
        borderWidth:2,
        borderColor:'white',
        alignSelf:'center',
        width:'80%',
        height:'45%',
    },
    headUpcoming: {
        borderBottomWidth:2,
        borderBottomColor:'white',
        width:'100%',
        height:'10%',
        textAlign:'center',
        padding:10,
    },
    eventBox: {
        display:'flex',
        flexDirection:'column',
        width:'90%',
        height:'70%',
        alignSelf:'center',
        justifyContent:'space-between',
        marginTop:30,
    },
    eventContainer: {
        display:'flex',
        flexDirection:'row',
        alignSelf:"center",
        justifyContent:'space-between',
        width:'90%',
        height:'15%',
        alignItems:'center',
    },
    eventCircle: {
        width:40,
        height:40,
        backgroundColor:'#fffbdb',
        borderRadius:20,
        textAlign:'center',
    },
    circleText: {
        color:'black',
        fontSize:10,
        fontFamily:'spartan',
        marginTop:15,
        alignSelf:'center',
    },
    eventText: {
        color:'black',
        fontSize:10,
        fontFamily:'spartan',
        textTransform:'uppercase'
    }
});