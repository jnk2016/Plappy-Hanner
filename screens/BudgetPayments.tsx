import React, {useState} from 'react';
import { Image, StyleSheet, View, Button, TouchableOpacity, Text} from 'react-native';
import { PieChart } from 'react-minimal-pie-chart';

export default function BudgetPayments ({navigation}){

    return(
        <View style={styles.bigContainer}>
            <View style={styles.mainContainer}>
                <View style={styles.leftContainer}>
                    <TouchableOpacity style={styles.leftBox} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                    <TouchableOpacity style={styles.leftBox} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                    <TouchableOpacity style={styles.leftBox} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                    <TouchableOpacity style={styles.leftBox} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                    <TouchableOpacity style={styles.leftBox} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                    <TouchableOpacity style={styles.leftBox} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                    <TouchableOpacity style={styles.leftBox} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                    <TouchableOpacity style={styles.leftBox} onPress={()=> console.log("button pressed")}></TouchableOpacity>
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.rightHead}>
                        <Text style={styles.headText}>JANUARY</Text>
                    </View>
                    <View style={styles.rightContent}>
                        <Text style={styles.rightText}>
                            <Text>5/RENT</Text>
                            <Text style={{textAlign:'right'}}>600.00</Text>
                        </Text>
                        <Text style={styles.rightText}>
                            <Text>6/ER BILL</Text>
                            <Text style={{textAlign:'right'}}>100.00</Text>
                        </Text>
                        <Text style={styles.rightText}>
                            <Text>6/INTERNET</Text>
                            <Text style={{textAlign:'right'}}>70.00</Text>
                        </Text>
                        <Text style={styles.rightText}>
                            <Text>10/CELL</Text>
                            <Text style={{textAlign:'right'}}>25.00</Text>
                        </Text>
                        <Text style={styles.rightText}>
                            <Text>20/UTILITIES</Text>
                            <Text style={{textAlign:'right'}}>100.00</Text>
                        </Text>
                        <Text style={styles.rightText}>
                            <Text>21/CC#1</Text>
                            <Text style={{textAlign:'right'}}>50.00</Text>
                        </Text>
                        <Text style={styles.rightText}>
                            <Text>22/CC#2</Text>
                            <Text style={{textAlign:'right'}}>30.00</Text>
                        </Text>
                        <Text style={styles.rightText}>
                            <Text>30/CC#3</Text>
                            <Text style={{textAlign:'right'}}>40.00</Text>
                        </Text>
                    </View>
                    <View style={styles.rightBottom}>
                        <View style={styles.bottomTop}>
                            <Text style={styles.bottomtopText}>
                                <Text># OF PAYMENTS:</Text>
                                <Text style={{fontSize:18}}>8</Text>
                            </Text>
                            <Text style={styles.bottomtopText}>
                                <Text># PAID:</Text>
                                <Text style={{fontSize:18}}>3</Text>
                            </Text>
                        </View>
                        <View style={styles.bottomBottom}>
                            <Text style={styles.bottombottomText}>
                                <Text>TOTAL:</Text>
                                <Text style={{fontSize:24}}>1015.00</Text>
                            </Text>
                        </View>
                        <Text style={styles.footerText}>CARDHOLDER: DANPHUONG HOANG</Text>
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
        backgroundColor:'#727272',
        alignItems:'center',
    },
    mainContainer: {
        width:'90%',
        display:'flex',
        flexDirection:'row',
        height:'100%',
        justifyContent:'space-between'
    },
    leftContainer: {
        width:'15%',
        height:'40%',
        justifyContent:'space-between',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:65,
    },
    leftBox: {
        width:12,
        height:12,
        backgroundColor:'#c4c4c4',
        margin:1,
    },
    rightContainer: {
        width:'80%',
        height:'100%',
        alignContent:'center',
        display:'flex',
        flexDirection:'column',
        backgroundColor:'white',
    },
    rightHead:{
        textAlign:'center',
        width:'90%',
        alignSelf:'center',
        height:'5%',
        borderBottomColor:'black',
        borderBottomWidth:1,
        marginTop:20,
    },
    headText: {
        fontSize:18,
        fontFamily:'spartan',
        color:'black',
        letterSpacing:1,
    },
    rightContent: {
        display:'flex',
        flexDirection:'column',
        width:'95%',
        height:'65%',
        marginTop:10,
        paddingBottom:150,
    },
    rightText: {
        flexDirection:'row',
        display:'flex',
        color:'black',
        alignSelf:'center',
        justifyContent:'space-between',
        width:'90%',
        height:'100%',
        fontSize:12,
        letterSpacing:2,
        fontFamily:'spartan',
        textAlign:'left',
    },
    rightBottom: {
        display:'flex',
        flexDirection:'column',
        width:'90%',
        height:'30%',
        alignSelf:'center',
    },
    bottomTop: {
        borderTopWidth:1,
        borderTopColor:'black',
        width:'100%',
        height:'40%',
        display:'flex',
        flexDirection:'column',
    },
    bottomtopText: {
        display:'flex',
        flexDirection:'row',
        height:'50%',
        width:'95%',
        color:'black',
        fontFamily:'spartan',
        fontSize:14,
        letterSpacing:1,
        justifyContent:'space-between',
        alignSelf:'center',
        marginTop:10,
    },
    bottomBottom: {
        width:'100%',
        height:'30%',
        borderTopWidth:1,
        borderTopColor:'black',
        display:'flex',
        flexDirection:'column',
    },
    bottombottomText: {
        display:'flex',
        flexDirection:'row',
        width:'100%',
        height:'50%',
        color:'black',
        fontSize:18,
        fontFamily:'spartan',
        justifyContent:'space-between',
        alignItems:'center',
        alignSelf:'center',
        marginTop:10,
    },
    footerText: {
        color:'black',
        fontSize:10,
        fontFamily:'spartan',
        alignSelf:'flex-end',
        textAlign:'center'
    }
});