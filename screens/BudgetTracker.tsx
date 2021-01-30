import React, {useState} from 'react';
import { Image, StyleSheet, View, Button, TouchableOpacity, Text} from 'react-native';
import { PieChart } from 'react-minimal-pie-chart';

export default function BudgetTracker({navigation}){

    return(
        <View style = {styles.bigContainer}>
            <View style={styles.smallContainer}>
            <Text style={styles.mainHead}>MY SPENDING</Text>
                <View style={styles.mainContainer}>
                    <View style={styles.leftContainer}>
                        <View style={styles.leftExpense}>
                            <View style={styles.leftLeft}>
                                <View style={styles.circleLeft}>
                                    <Text style={styles.circleNumber}>$150</Text>
                                </View>
                                <View style={styles.circleLeft}>
                                    <Text style={styles.circleNumber}>$850</Text>
                                </View>
                                <View style={styles.circleLeft}>
                                    <Text style={styles.circleNumber}>$250</Text>
                                </View>
                                <View style={styles.circleLeft}>
                                    <Text style={styles.circleNumber}>$250</Text>
                                </View>
                                <View style={styles.circleLeft}>
                                    <Text style={styles.circleNumber}>$50</Text>
                                </View>
                            </View>
                            <View style={styles.rightLeft}>
                                <Text style={styles.expenseText}>PERSONAL</Text>
                                <Text style={styles.expenseText}>BILLS</Text>
                                <Text style={styles.expenseText}>FOOD</Text>
                                <Text style={styles.expenseText}>FOODS</Text>
                                <Text style={styles.expenseText}>HOME</Text>
                            </View>
                        </View>
                    <View style={styles.headButton}>
                        <TouchableOpacity style={styles.addButton}>
                            <Text style={styles.addText}>ADD TRANSACTION</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                    <View style={styles.rightContainer}>
                        <View style={styles.rightButtons}>
                            <TouchableOpacity style={styles.redButton} onPress={()=>navigation.navigate('BudgetBudgets')}>
                                <View style={styles.titleLine}>
                                    <Text style={styles.buttonText}>BUDGETS</Text>
                                </View>
                                <Text style={styles.buttonNumber}>10</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.redButton} onPress={()=>navigation.navigate('BudgetPayments')}>
                                <View style={styles.titleLine}>
                                    <Text style={styles.buttonText}>PAYMENTS</Text>
                                </View>
                                <Text style={styles.buttonNumber}>10</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.redButton} onPress={()=>navigation.navigate('BudgetGoals')}>
                                <View style={styles.titleLine}>
                                    <Text style={styles.buttonText}>GOALS</Text>
                                </View>
                                <Text style={styles.buttonNumber}>10</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.borderContainer}>
                        <Text style={styles.bottomText}>
                            <Text>INCOME</Text>
                            <Text>$2800</Text>
                        </Text>
                        <Text style={styles.bottomText}>
                            <Text>EXPENSES</Text>
                            <Text>$1330</Text>
                        </Text>
                    </View>
                    <View style={styles.blackContainer}>
                        <Text style={styles.endText}>
                            <Text>REMAINING</Text>
                            <Text style={{fontSize:24,}}>$1470</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    bigContainer:{
        backgroundColor: '#ffffff',
        // overflow: 'scroll',
        paddingTop: '10%',
        width:'100%',
        height:'100%',
    },
    mainHead: {
        color:'black',
        fontSize:14,
        fontFamily:'spartan',
        letterSpacing:1,
        textAlign:'left',
        fontWeight:'600',
        margin:20,
    },
    smallContainer: {
        backgroundColor:'#f9eff0',
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
    },
    mainContainer: {
        display:'flex',
        flexDirection:'row',
        width:'100%',
        height:'70%',
    },
    leftContainer: {
        width:'60%',
        height:'100%',
        backgroundColor:'#c6d9d0',
    },
    leftExpense: {
        flexDirection:'row',
        display:'flex',
        width:'100%',
        height:'90%',
        alignItems:'center',
    },
    leftLeft: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
        width:'40%',
        height:'90%',
    },
    rightLeft: {
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'space-between',
        width:'60%',
        height:'80%',
        textAlign:'left',
    },
    circleLeft:{
        backgroundColor:'white',
        width:50,
        height:50,
        borderRadius:25,
        textAlign:'center',
    },
    circleNumber: {
        color:'#ed4d4d',
        fontSize:12,
        fontFamily:'spartan',
        letterSpacing:1,
        paddingTop:20,
    },
    expenseText: {
        color:'black',
        fontSize:14,
        letterSpacing:1,
        fontFamily:'spartan',
        textAlign:'left'
    },
    headButton: {
        width:'100%',
        marginRight:-80,
        alignSelf:'flex-end'
    },
    addButton: {
        backgroundColor:'#c4c4c4',
        padding:10,
        width:140,
        height:35,
        textAlign:'center',
        borderRadius:10,
    },
    addText: {
        color:'black',
        fontSize:10,
        fontFamily:'spartan',
    },
    rightContainer: {
        width:'40%',
        height:'100%',
    },
    rightButtons: {
        display:'flex',
        flexDirection:'column',
        width:'100%',
        height:'80%',
        alignSelf:'center',
        justifyContent:'space-between',
        marginLeft:30,
    },
    redButton: {
        backgroundColor:'#ff9797',
        width:100,
        height:100,
        textAlign:'center',
    },
    titleLine: {
        borderBottomColor:'black',
        borderBottomWidth:1,
        width:'120%',
        height:'auto',
        marginLeft:-10,
    },
    buttonText: {
        color:'black',
        fontSize:12,
        letterSpacing:2,
        fontFamily:'spartan',
        paddingTop:30,
        textAlign:'center',
    },
    buttonNumber: {
        color:'black',
        fontSize:24,
        marginTop:20,
    },
    bottomContainer: {
        display:'flex',
        flexDirection:'column',
        width:'100%',
        height:'20%',
    },
    borderContainer: {
        borderWidth:1,
        borderColor:'black',
        width:'100%',
        height:'70%',
    },
    bottomText: {
        marginTop:10,
        display:'flex',
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'space-between',
        width:'80%',
        height:'auto',
        padding:10,
        fontSize:14,
        color:'black',
        fontFamily:'spartan'
    },
    blackContainer: {
        width:'100%',
        height:'30%',
        backgroundColor:'#383838',
    },
    endText: {
        display:'flex',
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'space-between',
        width:'80%',
        height:'auto',
        padding:10,
        color:'white',
        fontWeight:'600',
        fontSize:18,
        alignContent:'center'
    }
});