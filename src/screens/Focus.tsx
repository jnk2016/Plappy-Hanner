import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, Text, View, Alert} from 'react-native';
import AxiosLogin from '../Axios Functions/AxiosLogin';
import Modal from 'modal-react-native-web';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';


export default function SelfCare ({navigation}) {
    const[color, handleColor] = useState('#EEB4C9');
    const[header, handleHeader] = useState('CURRENT GOALS');
    const[count, handleCount] = useState('4');
    const[smallText, handleSmallText] = useState('in progress');
    const[button, handleButton] = useState('PLAN MY GOALS');
    const[nav, handleNav] = useState('');

    function buttonPress(selection){
        if(selection == 'Goal'){
            handleColor('#EEB4C9');
            handleHeader('CURRENT GOALS');
            handleCount('4');
            handleSmallText('in progress');
            handleButton('PLAN MY GOALS');
        }
        else if(selection == 'Task'){
            handleColor('#FF6F6F');
            handleHeader('TASK PROGRESS');
            handleCount('20');
            handleSmallText('completed');
            handleButton('MANAGE MY TASKS');
        }
        else if(selection == 'Budget'){
            handleColor('#7EBD9F');
            handleHeader('MONTHLY BUDGET');
            handleCount('1500');
            handleSmallText('dollars');
            handleButton('MANAGE MY BUDGET');
        }
    }

    return (
        <View style={styles.bigContainer}> 
            <View style={styles.smallContainer}>
                <View style={styles.headerContainer}>
                    <Image 
                    source={require('../assets/images/bx_bx-calendar-star.png')}
                    style={{width:50,height:50,margin:30,}}
                    />
                </View>
                <View style={styles.calendarContainer}>
                    <Text style={styles.weekHeader}>
                        CURRENT WEEK
                    </Text>
                    <View style={styles.weekDays}>
                        <Text style={styles.weekDay}>
                            SUN
                        </Text>
                        <Text style={styles.weekDay}>
                            MON
                        </Text>
                        <Text style={styles.weekDay}>
                            TUE
                        </Text>
                        <Text style={styles.weekDay}>
                            WED
                        </Text>
                        <Text style={styles.weekDay}>
                            THU
                        </Text>
                        <Text style={styles.weekDay}>
                            FRI
                        </Text>
                        <Text style={styles.weekDay}>
                            SAT
                        </Text>
                    </View>
                    <View style={styles.weekNumbers}>
                        <Text style={styles.weekNumber}>
                        3
                        </Text>
                        <Text style={styles.weekNumber}>
                        4
                        </Text>
                        <Text style={styles.weekNumber}>
                        5
                        </Text>
                        <Text style={styles.weekNumber}>
                        6
                        </Text>
                        <Text style={styles.weekNumber}>
                        7
                        </Text>
                        <Text style={styles.weekNumber}>
                        8
                        </Text>
                        <Text style={styles.weekNumber}>
                        9
                        </Text>
                    </View>
                </View>
                <View style={styles.bigCircle}>
                    <Text style={styles.circleHeader}>{header}</Text>
                    <View style={{...styles.circleContainer, backgroundColor: `${color}`}}>
                        <Text style={styles.circlebigText}>
                            {count}
                        </Text>
                        <Text style={styles.circlesmallText}>
                            {smallText}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.circleButton} onPress={()=>console.log("button pressed")}>
                        <Text style={styles.buttonText}>
                            {button}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonOptions} onPress={()=>buttonPress('Goal')}>
                        <Text style={styles.optionText}>GOAL TRACKER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOptions} onPress={()=>buttonPress('Task')}>
                        <Text style={styles.optionText}>TASK MANAGER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOptions} onPress={()=>buttonPress('Budget')}>
                        <Text style={styles.optionText}>BUDGET TRACKER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    
    );
}

const styles = StyleSheet.create ({
    bigContainer: {
        width:'100%',
        height:'100%',
        backgroundColor: '#C4C4C4',
    },
    smallContainer: {
        width:'100%',
        height:'95%',
        backgroundColor: 'white',
    },
    headerContainer: {
        width:'100%',
        height:'15%',
        backgroundColor: '#C4C4C4',
        alignItems:'center',
        padding:10,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        paddingBottom:20,
    },
    calendarContainer: {
        backgroundColor:'#e5e5e5',
        width:'90%',
        // height:'10%',
        borderRadius:20,
        alignContent:'center',
        textAlign:'center',
        marginLeft:20,
        // paddingBottom:20,
    },
    weekHeader: {
        color:'black',
        fontSize:12,
        fontFamily:'Spartan-Regular',
        textAlign:'left',
        marginTop:10,
        marginLeft:10,
        letterSpacing:1,
    },
    weekDays: {
        display:'flex',
        flexDirection:'row',
        textAlign:'center',
        alignContent:'center',
        marginLeft:30,
        marginRight:15,
        padding:5,
    },
    weekDay: {
        margin:5,
        color:'rgba(56,56,56,0.6)',
        fontSize:11,
        fontFamily:'Spartan-Regular',
    },
    weekNumbers: {
        display:'flex',
        flexDirection:'row',
        textAlign:'center',
        alignContent:'center',
        marginLeft:45,
        paddingBottom:20,
    },
    weekNumber: {
        marginRight:28,
        textAlign:'center',
        color:'black',
        fontFamily:'Spartan-Regular',
        fontSize:12,
    },
    bigCircle: {
        width:'100%',
        height:'50%',
    },
    circleHeader: {
        color:'#383838',
        fontSize:18,
        letterSpacing:1,
        textAlign:'center',
        marginTop:10,
    },
    circleContainer: {
        justifyContent:'center',
        alignSelf: 'center',
        textAlign:'center',
        margin:5,
        // marginLeft:90,
        width:200,
        height:200,
        borderRadius:125,
        padding:10,
        // backgroundColor:'#EEB4C9',
    },
    circlebigText: {
        color:'white',
        fontSize:54,
        // paddingTop:50,
        fontFamily:'Spartan-Regular',
        textAlign:'center',
        fontWeight:'600',
    },
    circlesmallText: {
        color:'white',
        fontSize:24,
        textAlign:'center',
        letterSpacing:1,
        fontWeight:'600',
    },
    circleButton: {
        backgroundColor:'#DCF0E7',
        textAlign:'center',
        padding:10,
        width:'40%',
        height:'auto',
        borderRadius:30,
        // marginLeft:110,
        alignSelf: 'center',
        marginTop:10,
    },  
    buttonText: {
        color:'black',
        fontSize:14,
        fontWeight:'500',
        textAlign: 'center'
    },
    buttonContainer: {
        width:'100%',
        height:'25%',
        alignContent:'space-around',
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#C4C4C4',
        paddingLeft:10,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
    },
    buttonOptions: {
        backgroundColor:'white',
        width:'30%',
        height:'80%',
        borderRadius:30,
        margin:5,
        marginTop:20,
    },
    optionText: {
        color:'black',
        fontSize:18,
        letterSpacing:1,
        textAlign:'center',
        fontWeight:'600',
        paddingTop:50,
    }
});