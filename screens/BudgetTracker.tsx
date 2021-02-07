import React, {useState} from 'react';
import { Image, StyleSheet, View, Button, TouchableOpacity, Text} from 'react-native';
import { PieChart } from 'react-minimal-pie-chart';
import XDate from 'xdate';

export default function BudgetTracker({navigation}){

    return(
        <View style = {styles.bigContainer}>
            <View style={styles.smallContainer}>
                <View style={styles.mainContainer}>
                    <View style={styles.incomeContainer}>
                        <Text style={styles.headText}>SOURCE OF INCOME</Text>
                        <View style={styles.incomeBox}>
                            <Text style={styles.topicText}>
                                <Text>1/7</Text>
                                <Text>WORK</Text>
                                <Text>$650</Text>
                            </Text>
                        </View>
                        <View style={styles.incomeBox}>
                            <Text style={styles.topicText}>
                                <Text>1/21</Text>
                                <Text>WORK</Text>
                                <Text>$650</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.middleContainer}>
                        <Text style={styles.monthText}>
                            <Text style={{fontWeight:'600',fontSize:14,letterSpacing:1,}}>JANUARY</Text>
                            <Text>MONTHLY BUDGET: $3500</Text>
                        </Text>
                        <View style={styles.textBudget}>
                            <Text style={styles.addText}>
                                <Text>INCOME</Text>
                                <Text>$2800</Text>
                            </Text>
                            <Text style={styles.addText}>
                                <Text>EXPENSES</Text>
                                <Text>$1330</Text>
                            </Text>
                        </View>
                            <View style={styles.remainLine}>
                                <Text style={styles.remainText}>
                                    <Text>REMAINING</Text>
                                    <Text style={{fontSize:14,fontWeight:'600'}}>$2162</Text>
                                </Text>
                            </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.mainButton} onPress={()=>navigation.navigate('BudgetPayments', {screen:'BudgetPayments'})}>
                                <Text style={styles.buttonText}>PAYMENTS</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.mainButton} onPress={()=>navigation.navigate('BudgetBudgets', {screen:'BudgetBudgets'})}>
                                <Text style={styles.buttonText}>BUDGETS</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.mainButton} onPress={()=>navigation.navigate('BudgetGoals', {screen:'BudgetGoals'})}>
                                <Text style={styles.buttonText}>GOALS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.headText}>WEEK'S SPENDING</Text>
                        <View style={styles.spendingContainer}>
                            <Text style={styles.weekDate}>1/3-1/9</Text>
                            <View style={styles.spendList}>
                                <View style={styles.spendDay}>
                                    <Text style={styles.dayText}>SUN</Text>
                                    <View style={styles.moneyBox}>
                                        <Text style={styles.spendAmount}>$600</Text>
                                    </View>
                                </View>
                                <View style={styles.spendDay}>
                                    <Text style={styles.dayText}>MON</Text>
                                    <View style={styles.moneyBox}>
                                        <Text style={styles.spendAmount}>$100</Text>
                                    </View>
                                </View>
                                <View style={styles.spendDay}>
                                    <Text style={styles.dayText}>TUE</Text>
                                    <View style={styles.moneyBox}>
                                        <Text style={styles.spendAmount}>$250</Text>
                                    </View>
                                </View>
                                <View style={styles.spendDay}>
                                    <Text style={styles.dayText}>WED</Text>
                                    <View style={styles.moneyBox}>
                                        <Text style={styles.spendAmount}>$80</Text>
                                    </View>
                                </View>
                                <View style={styles.spendDay}>
                                    <Text style={styles.dayText}>THU</Text>
                                    <View style={styles.moneyBox}>
                                        <Text style={styles.spendAmount}>$300</Text>
                                    </View>
                                </View>
                                <View style={styles.spendDay}>
                                    <Text style={styles.dayText}>FRI</Text>
                                    <View style={styles.moneyBox}>
                                        <Text style={styles.spendAmount}>$..</Text>
                                    </View>
                                </View>
                                <View style={styles.spendDay}>
                                    <Text style={styles.dayText}>SAT</Text>
                                    <View style={styles.moneyBox}>
                                        <Text style={styles.spendAmount}>$..</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    bigContainer:{
        backgroundColor: '#ffffff',
        width:'100%',
        height:'100%',
    },
    smallContainer: {
        width:'95%',
        height:'100%',
        alignSelf:'center',
        justifyContent:'space-around',
    },
    mainContainer: {
        backgroundColor:'#ccded6',
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignSelf:'center',
        justifyContent:'space-between',
    },
    incomeContainer: {
        width:'95%',
        height:'20%',
        display:'flex',
        flexDirection:'column',
        alignSelf:'center',
        justifyContent:'space-around',
    },
    headText: {
        color:'black',
        fontSize:12,
        fontFamily:'spartan',
        letterSpacing:0.1,
        textAlign:'center',
    },
    incomeBox: {
        width:'100%',
        height:'auto',
        borderBottomWidth:1,
        borderBottomColor:'gray',
    },
    topicText: {
        color:'black',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'center',
        width:'100%',
        height:'auto',
        fontFamily:'spartan',
        fontSize:10,
    },
    middleContainer: {
        backgroundColor:'#fffef5',
        width:'110%',
        height:'25%',
        display:'flex',
        flexDirection:'column',
        alignSelf:'center',
        padding:5,
        justifyContent:'space-between'
    },
    monthText: {
        color:'black',
        fontSize:11,
        fontFamily:'spartan',
        textAlign:'center',
        letterSpacing:1,
        display:'flex',
        flexDirection:'column',
        lineHeight:25,
    },
    textBudget: {
        display:'flex',
        flexDirection:'column',
        width:'80%',
        height:'20%',
        alignSelf:'center',
        justifyContent:"space-between",
    },
    addText: {
        alignSelf:'center',
        justifyContent:'space-between',
        width:'100%',
        color:'black',
        fontSize:10,
        fontFamily:'spartan',
        display:'flex',
        flexDirection:'row',
        letterSpacing:0.5,
    },
    remainLine: {
        borderTopColor:'black',
        borderTopWidth:1,
        width:'90%',
        height:'15%',
        alignSelf:'center',
        padding:5,
    },
    remainText: {
        color:'black',
        fontSize:12,
        letterSpacing:0.5,
        fontFamily:'spartan',
        display:'flex',
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'space-between',
        width:'100%',
    },
    buttonContainer: {
        width:'95%',
        height:'auto',
        display:'flex',
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'space-between',
    },
    mainButton: {
        backgroundColor:'#e5e5e5',
        width:'30%',
        height:'auto',
        padding:10,
        textAlign:'center',
        borderRadius:10,
    },
    buttonText: {
        color:'black',
        fontSize:10,
        fontFamily:'spartan',
    },
    bottomContainer:{
        width:'95%',
        height:'50%',
        display:'flex',
        flexDirection:'column',
        alignSelf:'center',
    },
    spendingContainer: {
        width:'100%',
        height:'90%',
        display:'flex',
        flexDirection:'column',
        alignSelf:'center',
        justifyContent:'space-between',
    },
    weekDate: {
        fontSize:14,
        textAlign:'right',
        letterSpacing:0.5,
        margin:5,
    },
    spendList: {
        display:'flex',
        flexDirection:'column',
        width:'100%',
        height:'90%',
        alignSelf:'center',
        justifyContent:'space-between'
    },
    spendDay: {
        display:'flex',
        flexDirection:'row',
        width:'100%',
        height:'auto',
        alignSelf:'center',
        justifyContent:'space-between',
        alignItems:'center',
    },
    dayText: {
        fontSize:11,
        fontFamily:'spartan',
        color:'black',
        width:'10%',
    },
    moneyBox: {
        width:'85%',
        height:'auto',
        padding:5,
        borderWidth:1,
        borderColor:'black',
        textAlign:'right',
    },
    spendAmount: {
        color:'black',
        fontSize:10,
        fontFamily:'spartan',
    }
});