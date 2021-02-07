import React, {useState} from 'react';
import { Image, StyleSheet, View, Button, TouchableOpacity, Text} from 'react-native';
import { PieChart } from 'react-minimal-pie-chart';

export default function BudgetGoals ({navigation}){

    return(
        <View style={styles.bigContainer}>
            <View style={styles.smallContainer}>
                <View style={styles.headContainer}>
                    <Text style={styles.headText}>
                        <Text>GOAL</Text>
                        <Text>SAVED</Text>
                    </Text>
                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.goalContainer}>
                        <Text style={styles.goalText}>
                            <Text>NEW LAPTOP</Text>
                            <Text>$1000</Text>
                        </Text>
                        <View style={styles.pieChart}>
                            <PieChart style={{alignSelf: 'center'}}
                            data={[
                                { title: 'One', value: 3, color: '#ccded6' },
                                {title: 'Two', value: 1, color: '#727272' },
                            ]} lineWidth={100} viewBoxSize={[100,100]}
                            />
                        </View>
                        <View style={styles.savedLine}>
                            <Text style={styles.moneyText}>$750</Text>
                        </View>
                    </View>
                    <View style={styles.goalContainer}>
                        <Text style={styles.goalText}>
                            <Text>PUPPY FUND</Text>
                            <Text>$3000</Text>
                        </Text>
                        <View style={styles.pieChart}>
                            <PieChart style={{alignSelf: 'center'}}
                            data={[
                                { title: 'One', value: 1, color: '#ccded6' },
                                {title: 'Two', value: 1, color: '#727272' },
                            ]} lineWidth={100} viewBoxSize={[100,100]}
                            />
                        </View>
                        <View style={styles.savedLine}>
                            <Text style={styles.moneyText}>$1500</Text>
                        </View>
                    </View>
                    <View style={styles.goalContainer}>
                        <Text style={styles.goalText}>
                            <Text>NEW LENS</Text>
                            <Text>$500</Text>
                        </Text>
                        <View style={styles.pieChart}>
                            <PieChart style={{alignSelf: 'center'}}
                            data={[
                                { title: 'One', value: 4, color: '#ccded6' },
                                {title: 'Two', value: 1, color: '#727272' },
                            ]} lineWidth={100} viewBoxSize={[100,100]}
                            />
                        </View>
                        <View style={styles.savedLine}>
                            <Text style={styles.moneyText}>$100</Text>
                        </View>
                    </View>
                    <View style={styles.goalContainer}>
                        <Text style={styles.goalText}>
                            <Text>FUTURE FURNITURE</Text>
                            <Text>$1000</Text>
                        </Text>
                        <View style={styles.pieChart}>
                            <PieChart style={{alignSelf: 'center'}}
                            data={[
                                { title: 'One', value: 3, color: '#ccded6' },
                                {title: 'Two', value: 7, color: '#727272' },
                            ]} lineWidth={100} viewBoxSize={[100,100]}
                            />
                        </View>
                        <View style={styles.savedLine}>
                            <Text style={styles.moneyText}>$750</Text>
                        </View>
                    </View>
                    <View style={styles.goalContainer}>
                        <Text style={styles.goalText}>
                            <Text>GIFT FOR BF</Text>
                            <Text>$300</Text>
                        </Text>
                        <View style={styles.pieChart}>
                            <PieChart style={{alignSelf: 'center'}}
                            data={[
                                { title: 'One', value: 1, color: '#ccded6' },
                                {title: 'Two', value: 5, color: '#727272' },
                            ]} lineWidth={100} viewBoxSize={[100,100]}
                            />
                        </View>
                        <View style={styles.savedLine}>
                            <Text style={styles.moneyText}>$250</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bigContainer: {
        width:'100%',
        height:'100%',
        backgroundColor:'white',
    },
    smallContainer: {
        width:'100%',
        height:'100%',
        alignSelf:'center',
        justifyContent:'space-around',
        display:'flex',
        flexDirection:'column',
    },
    headContainer: {
        borderTopWidth:1,
        borderBottomWidth:1,
        borderTopColor:'black',
        borderBottomColor:'black',
        width:'100%',
        height:'5%',
        alignItems:'center',
    },
    headText: {
        alignSelf:'center',
        justifyContent:'space-between',
        color:'black',
        fontSize:14,
        fontFamily:'spartan',
        width:'90%',
        height:'auto',
        display:'flex',
        flexDirection:'row',
        fontWeight:'600',
        marginTop:10,
    },
    mainContainer: {
        display:'flex',
        flexDirection:'column',
        width:'95%',
        height:'90%',
        alignSelf:'center',
        justifyContent:"space-between",
    },
    goalContainer: {
        display:'flex',
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'space-between',
        width:'100%',
        height:'auto',
        padding:5,
        alignItems:'center',
    },
    goalText: {
        color:'black',
        fontSize:10,
        fontFamily:'spartan',
        letterSpacing:0.5,
        lineHeight:20,
        display:'flex',
        flexDirection:'column',
        width:'25%'
    },
    pieChart:{
        width:'30%',
        height:80,
    },
    savedLine: {
        borderBottomColor:'#cf6363',
        borderBottomWidth:3,
        width:'25%',
        textAlign:'center',
    },
    moneyText: {
        width:'auto',
        fontSize:12,
        fontFamily:'spartan',
        padding:5,
    }
});