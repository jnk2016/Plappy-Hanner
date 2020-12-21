import useFloatingHeaderHeight from '@react-navigation/stack/lib/typescript/src/utils/useHeaderHeight';
import React, {useState} from 'react';
import { Image, StyleSheet, View, Button, TouchableOpacity, Text} from 'react-native';

export default function NewSelfCare({navigation}){

    return(
        <View style={{backgroundColor: 'white'}}>
            <View style = {styles.bigContainer}>
                <View style={styles.iconContainer}>
                    <Image source={require('../assets/images/Vector.png')}
                    style={{marginTop: '35%',width: '100px', height: '100px',resizeMode: 'center', alignSelf: 'center'}}/>
                </View>
                <View style={styles.weekContainer}>
                    <Text style={styles.optionsheadingText}>CURRENT WEEK</Text>
                    <Text style={styles.daysText}>SUN</Text>
                    <Text style={styles.daysText}>MON</Text>
                    <Text style={styles.daysText}>TUE</Text>
                    <Text style={styles.daysText}>WED</Text>
                    <Text style={styles.daysText}>THU</Text>
                    <Text style={styles.daysText}>FRI</Text>
                    <Text style={styles.daysText}>SAT</Text>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    bigContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        height:'100%',
    },
    // smallContainer:{
    //     borderRadius: 20,
    //     width: '100%',
    //     height: '100%',
    //     backgroundColor: 'white',
    // },

    iconContainer:{
        width:'100%',
        height:'70%',
        // paddingVertical:'5%',
        alignContent: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius:20,
        flexDirection: 'row',
        backgroundColor:'#f2e6fc',
        alignItems: 'center',
    },

    weekContainer: {
        backgroundColor:'#e5e5e5b',
        width:'100%',
        height:'100%',
    },
    
    optionsheadingText: {
        fontSize: 14,
        color:'black',
    },

    daysText: {
        fontSize: 12,
        color:'lightgray',
    }
});