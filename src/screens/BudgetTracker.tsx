import React, {useState} from 'react';
import { Image, StyleSheet, View, Button, TouchableOpacity, Text} from 'react-native';
import { PieChart } from 'react-minimal-pie-chart';

export default function BudgetTracker({navigation}){

    return(
        <View>
            <View style = {styles.bigContainer}>
                <View style={styles.samelineText}>
                    <Text style={{fontWeight: '700', fontSize:'18px', fontFamily: 'Spartan', letterSpacing: '0.2em'}}>JANUARY</Text>
                    <Text style ={{fontWeight: '500', fontSize:'18px', fontFamily: 'Spartan', letterSpacing: '0.2em'}}> 2021</Text>
                </View>
                <View style={styles.greyContainer}>
                    <Text style={{fontWeight: '500', fontSize:'14px', fontFamily: 'Spartan', letterSpacing: '0.05em', margin: '6%'}}>MONTHLY BUDGET</Text>
                    <Text style={{fontWeight: '500', fontSize:'36px', fontFamily: 'Spartan', letterSpacing: '0.05em', marginBottom: '6%', alignSelf: 'center'}}>$2,500.00</Text>
                    <View style={styles.greenContainer}>
                        <View style={styles.whiteContainer}></View>
                        <View style={{alignContent:'center', alignItems: 'center', alignSelf: 'center', justifyContent: 'center', marginTop: '30%'}}>
                            <PieChart style={{marginTop:'-50%', alignSelf: 'center'}}
                                data={[
                                    { title: 'One', value: 1, color: '#E8D7F6' },
                                    { title: 'Two', value: 2, color: '#FDE7D3' },
                                    { title: 'Three', value: 8, color: '#9CC3B0' },
                                    { title: 'Four', value: 4, color: '#C4C4C4'},
                                ]} lineWidth={35} viewBoxSize={[100,100]}
                            />
                        </View>
                        <Text style={{fontWeight: '500', fontSize:'14px', fontFamily: 'Spartan', letterSpacing: '0.05em', marginTop: '-10%', marginLeft: '6%'}}>REMAINING</Text>
                        <Text style={{fontWeight: '500', fontSize:'36px', fontFamily: 'Spartan', letterSpacing: '0.05em', marginBottom: '6%', alignSelf: 'center', marginTop: '3%'}}>$2225.33</Text>
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
        letterSpacing: '0.1em',
        // paddingBottom: '10%',
    },
    samelineText:{
        // flex: 1,
        flexDirection: 'row',
        alignSelf: 'center', 
    },
    bigContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        // overflow: 'scroll',
        paddingTop: '10%',
    },
    greyContainer:{
        borderRadius: 30,
        width: '100%',
        height: '100%',
        marginTop: '1%',
        // shadowColor: "#000",
        // shadowOpacity: 0.25,
        // shadowRadius: 8,
        elevation: 5,
        backgroundColor: '#E5E5E5'
    },
    greenContainer:{
        borderRadius: 30,
        width: '100%',
        height: 900,
        marginTop: '20%',
        elevation: 5,
        backgroundColor: '#CCDED6'
    },
    whiteContainer:{
        borderRadius: 8,
        width: '90%',
        height: '22%',
        marginTop: '-20%',
        alignSelf: 'center',
        elevation: 5,
        backgroundColor: 'white'
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
    optionsContainer:{
        textAlignVertical: 'center',
        marginVertical: '1%',
        marginHorizontal: '2%',
        backgroundColor: 'white',
        paddingVertical: '5%',
        borderRadius: 6
    },
    optionsText:{
        marginLeft: '4%',
        fontSize: '13px',
        fontWeight: '500',
        fontFamily: 'Spartan'
    }
});