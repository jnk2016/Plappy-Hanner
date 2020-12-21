import useFloatingHeaderHeight from '@react-navigation/stack/lib/typescript/src/utils/useHeaderHeight';
import React, {useState} from 'react';
import { Image, StyleSheet, View, Button, TouchableOpacity, Text} from 'react-native';

export default function NewSelfCare({navigation}){

    return(
        <View style={{backgroundColor: 'white'}}>
            <View style = {styles.bigContainer}>
                <View style={styles.smallContainer}>
                    <View style={styles.habitContainer}>
                        <Text style={styles.optionText}>HABIT TRACKER</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.selfcareOptionsContainer} onPress={()=>console.log("button pressed")}>
                                <Text style={styles.optionsText}>START TRACKING</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
    optionsText:{
        marginLeft: '4%',
        fontSize: '20px',
        fontWeight: '500',
        fontFamily: 'Spartan',
    },
    
});