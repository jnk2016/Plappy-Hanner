import useFloatingHeaderHeight from '@react-navigation/stack/lib/typescript/src/utils/useHeaderHeight';
import React, {useState} from 'react';
import { Image, StyleSheet, View, Button, TouchableOpacity, Text} from 'react-native';

export default function NewFeaturesList({navigation}){

    return(
        <View style={{backgroundColor: 'white'}}>
            <View style = {styles.bigContainer}>
                <View style={styles.smallContainer}>
                    <TouchableOpacity style={styles.selfcareOptionsContainer} onPress={()=>navigation.navigate('SelfCare')}>
                        <Text style={styles.optionsText}>SELFCARE</Text>
                        <Image source={require('../assets/images/Vector.png')}
                        style={{width: '95%', height: '150%',resizeMode: 'contain'}}/>
                 </TouchableOpacity>
                    <TouchableOpacity style={styles.healthOptionsContainer} onPress={()=>navigation.navigate('Health')}>
                        <Text style={styles.optionsText}>HEALTH</Text>
                        <Image source={require('../assets/images/heart.png')}
                        style={{width: '100%', height: '150%',resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.focusOptionsContainer} onPress={()=>navigation.navigate('Focus')}>
                        <Text style={styles.optionsText}>FOCUS</Text>
                        <Image source={require('../assets/images/bx_bx-calendar-star.png')}
                        style={{width: '100%', height: '150%',resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    headingContainer:{
        backgroundColor: '#ffffff',
        paddingTop: '2%',
        height:'100%',
        // paddingBottom: '10%',
    },
    bigContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        paddingBottom: '30px',
        paddingTop: '10%',
        height:'100%',
    },
    smallContainer:{
        borderRadius: 8,
        width: '100%',
        height: '100%',
        margin: '10px',
        padding: '5px',
        // shadowColor: "#000",
        // shadowOpacity: 0.25,
        // shadowRadius: 8,
        elevation: 5,
    },
    heading:{
        fontSize:'18px',
        fontFamily: 'Spartan',
        color: 'black',
        fontWeight: 'bold',
        flex: 1,
        marginLeft: 40,
        marginTop: 20,
    },
    selfcareOptionsContainer:{
        width:'95%',
        textAlignVertical: 'center',
        marginVertical: '3%',
        marginHorizontal: '2%',
        paddingVertical: '25%',
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor:'#f2e6fc',
    },
    healthOptionsContainer:{
        width:'95%',
        textAlignVertical: 'center',
        marginVertical: '3%',
        marginHorizontal: '2%',
        paddingVertical: '25%',
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor:'#e3edff',
    },
    focusOptionsContainer:{
        width:'95%',
        textAlignVertical: 'center',
        marginVertical: '3%',
        marginHorizontal: '2%',
        paddingVertical: '25%',
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor:'#c4c4c4',
    },
    optionsText:{
        marginLeft: '4%',
        fontSize: '20px',
        fontWeight: '500',
        fontFamily: 'Spartan',
    }
});