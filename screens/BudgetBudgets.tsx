import React, {useState} from 'react';
import { Image, StyleSheet, View, Button, TouchableOpacity, Text} from 'react-native';
import { PieChart } from 'react-minimal-pie-chart';

export default function BudgetBudgets ({navigation}){

    return(
        <View style={styles.bigContainer}>
            <View style={styles.mainContainer}>
                <View style={styles.headContainer}>
                    <Text style={styles.topText}>MONTHLY BUDGET</Text>
                    <View style={styles.budgetLine}>
                        <Text style={styles.budgetText}>$3500</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.mainButton} onPress={()=> console.log("button pressed")}>
                        <View style={styles.topContainer}>
                            <View style={[styles.leftContainer,{backgroundColor:'#41634a'}]}>
                                <Text style={styles.leftbuttonText}>
                                    <Text>SET:</Text>
                                    <Text>$300</Text>
                                </Text>
                            </View>
                            <View style={styles.rightContainer}>
                                <Text style={styles.rightbuttonText}>
                                    <Text>ACTUAL:</Text>
                                    <Text>$150</Text>
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.headText}>PERSONAL</Text>
                    </TouchableOpacity>
                <TouchableOpacity style={styles.mainButton} onPress={()=> console.log("button pressed")}>
                    <View style={styles.topContainer}>
                        <View style={[styles.leftContainer,{backgroundColor:'#70997b'}]}>
                            <Text style={styles.leftbuttonText}>
                                <Text>SET:</Text>
                                <Text>$450</Text>
                            </Text>
                        </View>
                        <View style={styles.rightContainer}>
                            <Text style={styles.rightbuttonText}>
                                <Text>ACTUAL:</Text>
                                <Text>$250</Text>
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.headText}>FOOD</Text>
                </TouchableOpacity>
                    <TouchableOpacity style={styles.mainButton} onPress={()=> console.log("button pressed")}>
                        <View style={styles.topContainer}>
                            <View style={[styles.leftContainer,{backgroundColor:'#9cc3b0'}]}>
                                <Text style={styles.leftbuttonText}>
                                    <Text>SET:</Text>
                                    <Text>$100</Text>
                                </Text>
                            </View>
                            <View style={styles.rightContainer}>
                                <Text style={styles.rightbuttonText}>
                                    <Text>ACTUAL:</Text>
                                    <Text>$30</Text>
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.headText}>ENTERTAINMENT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainButton} onPress={()=> console.log("button pressed")}>
                        <View style={styles.topContainer}>
                            <View style={[styles.leftContainer,{backgroundColor:'#9DADA5'}]}>
                                <Text style={styles.leftbuttonText}>
                                    <Text>SET:</Text>
                                    <Text>$80</Text>
                                </Text>
                            </View>
                            <View style={styles.rightContainer}>
                                <Text style={styles.rightbuttonText}>
                                    <Text>ACTUAL:</Text>
                                    <Text>$50</Text>
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.headText}>HOME</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bigContainer: {
        width:'100%',
        height:'100%',
        backgroundColor:'#f9efe0',
    },
    mainContainer: {
        display:'flex',
        flexDirection:'column',
        width:'95%',
        height:'100%',
        alignSelf:'center',
        justifyContent:'space-between',
    },
    headContainer: {
        marginTop:50,
        width:'90%',
        height:'10%',
        display:'flex',
        flexDirection:'column',
        alignSelf:'center',
        justifyContent:'space-around'
    },
    topText: {
        color:'black',
        fontSize:14,
        fontFamily:'spartan',
        letterSpacing:1,
        textAlign:'center',
        fontWeight:'600',
    },
    headText: {
        color:'black',
        fontSize:14,
        fontFamily:'spartan',
        letterSpacing:1,
        textAlign:'left',
        fontWeight:'600',
        marginTop:10,
        marginLeft:5,
    },
    budgetLine: {
        borderTopWidth:1,
        borderTopColor:'black',
        width:'100%',
        height:'auto',
    },
    budgetText: {
        color:'#cf6363',
        fontSize:30,
        fontFamily:'spartan',
        letterSpacing:1,
        padding:5,
        textAlign:'center',
    },
    buttonContainer: {
        width:'100%',
        height:'80%',
        display:'flex',
        flexDirection:'column',
        alignSelf:'center',
        justifyContent:'space-between',
    },
    mainButton: {
        width:'100%',
        height:'20%',
        display:'flex',
        flexDirection:'column',
        backgroundColor:'white',
    },
    topContainer: {
        display:'flex',
        flexDirection:'row',
        width:'100%',
        height:'70%',
        alignSelf:'center',
        justifyContent:'space-between',
        alignItems:'center',
    },
    leftContainer: {
        width:'70%',
        height:'100%',
        paddingTop:30,
    },
    rightContainer: {
        width:'30%',
        height:'100%',
        textAlign:'center',
        paddingTop:20,
    },
    leftbuttonText: {
        color:'white',
        fontSize:14,
        display:'flex',
        flexDirection:'row',
        fontFamily:'spartan',
        width:'90%',
        height:'auto',
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'space-between',
    },
    rightbuttonText: {
        textAlign:'center',
        color:'black',
        fontSize:14,
        display:'flex',
        flexDirection:'column',
        fontFamily:'spartan',
        letterSpacing:1,
        lineHeight:25,
    },
});