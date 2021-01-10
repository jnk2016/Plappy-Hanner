import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert, TouchableOpacity} from 'react-native';


export default function SelfCare ({navigation}) {
    const[color, handleColor] = useState('#DFB7FF');
    const[header, handleHeader] = useState('AVERAGE PER DAY');
    const[count, handleCount] = useState('5');
    const[smallText, handleSmallText] = useState('habits');
    const[button, handleButton] = useState('START TRACKING');
    const[nav, handleNav] = useState('');

    function buttonPress(selection){
        if(selection == 'Habit'){
            handleColor('#DFB7FF');
            handleHeader('AVERAGE PER DAY');
            handleCount('5');
            handleSmallText('habits');
            handleButton('START TRACKING');
        }
        else if(selection == 'Mood'){
            handleColor('#F4EAC7');
            handleHeader('CURRENT STREAK');
            handleCount('4');
            handleSmallText('days');
            handleButton('START TRACKING');
        }
        else if(selection == 'Brain'){
            handleColor('#E3EDFF');
            handleHeader('CREATED THIS WEEK');
            handleCount('10');
            handleSmallText('dumps');
            handleButton('START DUMPING');
        }
    }

    return (
        <View style={styles.bigContainer}> 
            <View style={styles.smallContainer}>
                <View style={styles.headerContainer}>
                    <Image 
                    source={require('../assets/images/Vector.png')}
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
                    <TouchableOpacity style={styles.buttonOptions} onPress={()=>buttonPress('Habit')}>
                        <Text style={styles.optionText}>HABIT TRACKER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOptions} onPress={()=>buttonPress('Mood')}>
                        <Text style={styles.optionText}>MOOD TRACKER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOptions} onPress={()=>buttonPress('Brain')}>
                        <Text style={styles.optionText}>BRAIN DUMP</Text>
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
        backgroundColor: '#F2E6FC',
    },
    smallContainer: {
        width:'100%',
        height:'95%',
        backgroundColor: 'white',
    },
    headerContainer: {
        width:'100%',
        height:'15%',
        backgroundColor: '#F2E6FC',
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
        fontFamily: 'Spartan-Regular'
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
        // backgroundColor:'#dfb7ff',
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
        marginTop:10,
        width:'40%',
        height:'auto',
        borderRadius:30,
        alignSelf: 'center',
        // marginLeft:115,
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
        backgroundColor:'#F2E6FC',
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