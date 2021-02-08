import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, Text, View, Alert} from 'react-native';


export default function Health ({navigation}) {
    const[color, handleColor] = useState('#FFA0A0');
    const[header, handleHeader] = useState('PERIOD IN');
    const[count, handleCount] = useState('5');
    const[smallText, handleSmallText] = useState('days');
    const[button, handleButton] = useState('LOG MY PERIOD');
    const[nav, handleNav] = useState('Period');

    function buttonPress(selection){
        if(selection == 'Period'){
            handleColor('#FFA0A0');
            handleHeader('PERIOD IN');
            handleCount('5');
            handleSmallText('Period');
            handleButton('LOG MY PERIOD');
        }
        else if(selection == 'Meal'){
            handleColor('#FFC997');
            handleHeader('MEALS PLANNED THIS WEEK');
            handleCount('21');
            handleSmallText('meals');
            handleButton('PLAN MY MEALS');
            handleNav('Meal');
        }
        else if(selection == 'Water'){
            handleColor('#9EB4DF');
            handleHeader('AVERAGE DAILY WATER INTAKE');
            handleCount('5');
            handleSmallText('cups');
            handleButton('TRACK CONSUMPTION');
            handleNav('ActivityTracker');
        }
    }

    return (
        <View style={styles.bigContainer}> 
            <View style={styles.smallContainer}>
                <View style={styles.headerContainer}>
                    <Image 
                    source={require('../assets/images/heart.png')}
                    style={{width:50,height:55,margin:30,}}
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
                    <TouchableOpacity style={styles.circleButton} onPress={()=>navigation.navigate(`${nav}`)}>
                        <Text style={styles.buttonText}>
                            {button}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonOptions} onPress={()=>buttonPress('Period')}>
                        <Text style={styles.optionText}>PERIOD TRACKER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOptions} onPress={()=>buttonPress('Meal')}>
                        <Text style={styles.optionText}>MEAL TRACKER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOptions} onPress={()=>buttonPress('Water')}>
                        <Text style={styles.optionText}>WATER TRACKER</Text>
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
        backgroundColor: '#E3EDFF',
    },
    smallContainer: {
        width:'100%',
        height:'95%',
        backgroundColor: 'white',
    },
    headerContainer: {
        width:'100%',
        height:'15%',
        backgroundColor: '#E3EDFF',
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
        // backgroundColor:'#FFA0A0',
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
        // marginLeft:115,
        alignSelf: 'center',
    },  
    buttonText: {
        color:'black',
        fontSize:14,
        fontWeight:'500',
        textAlign: 'center',
        fontFamily: 'Spartan-Regular'
    },
    buttonContainer: {
        width:'100%',
        height:'25%',
        alignContent:'space-around',
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#E3EDFF',
        paddingLeft:10,
        borderTopRightRadius:30,
        borderTopLeftRadius:30
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