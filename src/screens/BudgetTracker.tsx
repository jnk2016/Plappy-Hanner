import React, {useState} from 'react';
import { Image, StyleSheet, View, Button, TouchableOpacity, Text, ScrollView} from 'react-native';
import Pie  from 'react-native-pie';

export default function BudgetTracker({navigation}){

    return(
        <ScrollView>
            <View style = {styles.bigContainer}>
                <View style={styles.greenContainer}>
                    <View style={styles.yellowContainer}>
                        <Text style={{fontSize:14, fontFamily: 'Spartan-SemiBold', letterSpacing: 2, textAlign: 'center',marginBottom: '1%', marginTop: '2%'}}>CURRENT BALANCE</Text>
                        <Text style={{fontSize:30, fontFamily: 'Spartan-SemiBold', letterSpacing: 2, textAlign: 'center'}}>$2,500.00</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: '2%'}}>
                            <View style={styles.smallWhiteContainer}>
                                <Text style={styles.incExpText}>income</Text>
                                <Text style={styles.valueText}> 3225.33 </Text>
                            </View>
                            <View style={styles.smallWhiteContainer}>
                                <Text style={styles.incExpText}>expenses</Text>
                                <Text style={styles.valueText}>-1000.00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{marginVertical: '3%',alignSelf: 'center', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                        <Pie style={{}}
                            radius={90}
                            innerRadius={60}
                            sections={[
                            {
                                percentage: 10,
                                color: '#E8D7F6',
                            },
                            {
                                percentage: 20,
                                color: '#FDE7D3',
                            },
                            {
                                percentage: 30,
                                color: '#9CC3B0',
                            },
                            {
                                percentage: 40,
                                color: '#C4C4C4',
                            },
                            ]}
                            strokeCap={'butt'}
                        />
                        <View style={{marginTop: -150, marginBottom: 30, backgroundColor: 'white', borderRadius: 100, height: 120, width: 120, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontFamily: 'Spartan-SemiBold', fontSize: 26}}>40%</Text>
                            <Text style={{fontFamily: 'Spartan-Regular', fontSize:14, color: '#383838'}}>$1000</Text>
                        </View>
                        </View>
                        <View style={styles.monthlyContainer}>
                            <Text style={{fontSize:14, fontFamily: 'Spartan-Regular', letterSpacing: 2, textAlign:'center'}}>MONTHLY BUDGET</Text>
                            <Text style={{fontSize:20, fontFamily: 'Spartan-SemiBold', letterSpacing: 2, alignSelf: 'center', textAlign: 'center'}}>$2225.33</Text>
                        </View>
                        <View style={styles.bigWhiteContainer}>
                            <Text style={{fontSize:14, fontFamily: 'Spartan-Regular', letterSpacing: 2, textAlign:'center', marginVertical: '2%'}}>MONTHLY FIXED EXPENSES</Text>
                            <View style={styles.pinkContainer}>
                                <Text style={styles.expensesText}>rent + utilities</Text>
                                <Text style={styles.expensesText}>credit card payments</Text>
                                <Text style={styles.expensesText}>subscriptions</Text>
                                <Text style={styles.expensesText}>insurance</Text>
                            </View>
                        </View>
                </View>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    expensesText:{
        width: '80%',
        borderBottomWidth: 2,
        alignSelf: 'center',
        fontFamily: 'Spartan-Regular',
        marginVertical: '2%',
        fontSize: 15
    },
    pinkContainer:{
        backgroundColor: '#EEBCCE',
        // marginTop: '2%',
        width: '80%',
        alignSelf: 'center',
        paddingVertical: '2%'
    },
    bigWhiteContainer:{
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: '2%',
        width: '100%',
        // height: '100%'
        paddingBottom: '3%'
    },
    monthlyContainer:{
        backgroundColor: '#F9F7F7',
        paddingVertical: '3%',
        paddingHorizontal: '4%',
        borderRadius: 100,
        justifyContent: 'center',
        alignContent: 'center',
    },
    smallWhiteContainer:{
        backgroundColor: 'white',
        padding: '4%',
        borderRadius: 10,
        justifyContent: 'center',
        alignContent: 'center',
    },
    incExpText:{
        fontFamily: 'Spartan-SemiBold',
        fontSize: 18,
        textAlign: 'center',
        alignSelf: 'center'
    },
    valueText:{
        fontFamily: 'Spartan-Regular',
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'center'
    },
    headingContainer:{
        backgroundColor: '#ffffff',
        paddingTop: '2%',
        letterSpacing:2,
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
        paddingTop: '3%',
        height: '100%'
    },
    greyContainer:{
        borderRadius: 30,
        width: '100%',
        // height: '100%',
        marginTop: '1%',
        // shadowColor: "#000",
        // shadowOpacity: 0.25,
        // shadowRadius: 8,
        elevation: 5,
        backgroundColor: '#E5E5E5'
    },
    greenContainer:{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: '100%',
        // height: 900,
        marginTop: '20%',
        elevation: 5,
        backgroundColor: '#CCDED6',
        justifyContent: 'center',
        alignItems: 'center'
    },
    yellowContainer:{
        borderRadius: 8,
        width: '90%',
        // height: '22%',
        marginTop: '-20%',
        alignSelf: 'center',
        elevation: 5,
        backgroundColor: '#FFF7EF'
    },
    heading:{
        fontSize:18,
        fontFamily: 'Spartan-Regular',
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
        fontSize: 13,
        fontWeight: '500',
        fontFamily: 'Spartan-Regular'
    }
});