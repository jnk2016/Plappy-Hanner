import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import Protect from '../assets/images/bi_shield.png';
import Heart from '../assets/images/ion_heart-sharp.png';
import Polygon from '../assets/images/Polygon 4.png';
import None from '../assets/images/ion_heart-dislike-outline.png';
import High from '../assets/images/emojione-monotone_beating-heart.png';
import Circle from '../assets/images/bx_bx-loader-circleperiod.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import LinearGradient from '../assets/features/LinearGradient';

export default function SymptomDischarge ({navigation}) {

  return (
    <View style={styles.bigContainer}>
        <Text style={styles.headText}>DISCHARGE</Text>
        <View style={styles.smallContainer}>
            <View style={styles.leftContainer}>
                <View style={styles.leftcontainerHead}>
                    <Text style={styles.mainText}>COLOR</Text>
                </View>
                <View style={styles.leftList}>
                    <TouchableOpacity style={styles.leftOption}>
                        <View style={styles.leftbuttonContent}>
                            <View style={[styles.buttonCircle,{backgroundColor:'#e5e5e5'}]}></View>
                            <Text style={styles.leftbuttonText}>CLEAR</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.leftOption}>
                        <View style={styles.leftbuttonContent}>
                            <View style={[styles.buttonCircle,{backgroundColor:'white'}]}></View>
                            <Text style={styles.leftbuttonText}>WHITE</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.leftOption}>
                        <View style={styles.leftbuttonContent}>
                            <View style={[styles.buttonCircle,{backgroundColor:'#C4C4C4'}]}></View>
                            <Text style={styles.leftbuttonText}>GRAY</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.leftOption}>
                        <View style={styles.leftbuttonContent}>
                            <View style={[styles.buttonCircle,{backgroundColor:'#FFFBDB'}]}></View>
                            <Text style={styles.leftbuttonText}>YELLOW</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.leftOption}>
                        <View style={styles.leftbuttonContent}>
                            <View style={[styles.buttonCircle,{backgroundColor:'#CCDED6'}]}></View>
                            <Text style={styles.leftbuttonText}>GREEN</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.leftOption}>
                        <View style={styles.leftbuttonContent}>
                            <View style={[styles.buttonCircle,{backgroundColor:'#FFE5EF'}]}></View>
                            <Text style={styles.leftbuttonText}>PINK</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.leftOption}>
                        <View style={styles.leftbuttonContent}>
                            <View style={[styles.buttonCircle,{backgroundColor:'#FF9797'}]}></View>
                            <Text style={styles.leftbuttonText}>RED</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.rightcontainerHead}>
                    <Text style={styles.mainText}>STAGE</Text>
                </View>
                <View style={styles.rightList}>
                    <TouchableOpacity style={styles.rightOption}>
                        <View style={styles.rightbuttonContent}>
                            <View style={styles.rightCircle}>
                                <Image
                                source={Circle}
                                style={{width:25,height:25,tintColor:'#e5e5e5',}}
                                />
                            </View>
                            <Text style={styles.rightbuttonText}>STRETCHY</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rightOption}>
                        <View style={styles.rightbuttonContent}>
                            <View style={styles.rightCircle}>
                                <Image
                                source={Circle}
                                style={{width:25,height:25,tintColor:'#727272',}}
                                />
                            </View>
                            <Text style={styles.rightbuttonText}>CREAMY</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rightOption}>
                        <View style={styles.rightbuttonContent}>
                            <View style={styles.rightCircle}>
                                <View style={[styles.rightContainer,{width:10,height:10,borderRadius:5,backgroundColor:'#727272',paddingTop:5,alignSelf:'center',}]}></View>
                                <View style={[styles.rightContainer,{width:10,height:10,borderRadius:5,backgroundColor:'#727272',paddingTop:5,alignSelf:'center',}]}></View>
                            </View>
                            <Text style={styles.rightbuttonText}>STICKY</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rightOption}>
                        <View style={styles.rightbuttonContent}>
                            <View style={styles.rightCircle}>
                                <View style={[styles.rightInner,{borderWidth:1,borderColor:'black',width:20,
                            height:20,borderRadius:10,alignSelf:'center',marginLeft:3,}]}></View>
                            </View>
                            <Text style={styles.rightbuttonText}>DRY</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <TouchableOpacity style={styles.mainButton}>
        <Text style={styles.mainbuttonText}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create ({
    bigContainer: {
        width:'100%',
        height:'100%',
        backgroundColor:'#dda7a7',
    },
    smallContainer: {
        marginTop:50,
        width:'95%',
        height:'60%',
        alignSelf:'center',
        justifyContent:'space-between',
        display:'flex',
        flexDirection:'row',
    },
    headText: {
        color:'white',
        fontSize:18,
        letterSpacing:1,
        fontFamily:'spartan',
        textAlign:'center',
        alignSelf:"center",
        fontWeight:'600',
        marginTop:50,
    },
    leftContainer: {
        width:'45%',
        height:'100%',
        borderWidth:2,
        borderColor:'white',
    },
    leftcontainerHead: {
        width:85,
        height:35,
        backgroundColor:'#dda7a7',
        textAlign:'center',
        padding:10,
        alignSelf:'flex-start',
        marginTop:-20,
    },
    mainText: {
        color:'white',
        fontSize:14,
        fontFamily:'spartan',
        letterSpacing:1,
    },
    leftList: {
        display:'flex',
        flexDirection:'column',
        width:'90%',
        height:'90%',
        alignSelf:'center',
        justifyContent:'space-between',
    },
    leftOption: {
        width:'100%',
        height:'auto',
        alignSelf:'center',
    },
    leftbuttonContent: {
        display:'flex',
        flexDirection:'row',
        width:'100%',
        height:'auto',
        alignSelf:'center',
        justifyContent:"space-between",
        alignItems:'center'
    },
    buttonCircle: {
        width:30,
        height:30,
        borderRadius:15,
    },
    leftbuttonText: {
        width:'70%',
        color:'black',
        fontSize:12,
        fontFamily:'spartan',
        letterSpacing:1,
        textAlign:'left',
    },
    rightContainer: {
        borderWidth:2,
        borderColor:'white',
        width:'40%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
    },
    rightcontainerHead: {
        width:85,
        height:35,
        backgroundColor:'#dda7a7',
        textAlign:'center',
        padding:10,
        alignSelf:'flex-end',
        marginTop:-20,
    },
    rightList: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignSelf:'center',
        width:'90%',
        height:'80%',
    },
    rightOption: {
        width:'100%',
        height:'auto',
        alignSelf:'center',
    },
    rightbuttonContent: {
        width:'100%',
        height:'auto',
        alignSelf:'center',
        justifyContent:'space-between',
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    rightCircle: {
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:'white',
        padding:2.5,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    rightbuttonText: {
        width:'70%',
        color:'black',
        fontSize:12,
        fontFamily:'spartan',
        letterSpacing:1,
        textAlign:'left',
    },
    mainButton: {
        width:70,
        height:40,
        padding:15,
        backgroundColor:'#e5e5e5',
        borderRadius:10,
        alignSelf:"center",
        textAlign:'center',
        bottom:0,
        marginTop:20,
      },
      mainbuttonText: {
        color:'black',
        fontSize:12,
        fontFamily:'spartan',
        letterSpacing:1,
      }
});