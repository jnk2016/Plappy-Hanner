import React, {useState} from 'react';
import { Image, StyleSheet, View, Button, TouchableOpacity, Text} from 'react-native';
import { PieChart } from 'react-minimal-pie-chart';

export default function BudgetBudgets ({navigation}){

    return(
        // <View style={styles.bigContainer}>
            <View style={styles.mainContainer}>
                <TouchableOpacity style={[styles.mainButton,{backgroundColor:'#41634a'}]} onPress={()=> console.log("button pressed")}>
                    <Text style={styles.headText}>PERSONAL</Text>
                    <View style={styles.bottomContainer}>
                        <View style={styles.leftContainer}>
                            <Text style={styles.leftbuttonText}>
                                <Text>SET:</Text>
                                <Text>$300</Text>
                            </Text>
                        </View>
                        <View style={styles.middleContainer}>
                        <PieChart style={{alignSelf: 'center'}}
                        data={[
                            { title: 'One', value: 1, color: '#dda7a7' },
                            { title: 'Two', value: 1, color: '#F9EFE0' },
                        ]} lineWidth={35} viewBoxSize={[100,100]}
                        />
                        </View>
                        <View style={styles.rightContainer}>
                            <Text style={styles.rightbuttonText}>
                                <Text>ACTUAL:</Text>
                                <Text>$150</Text>
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.mainButton,{backgroundColor:'#5a7e64'}]} onPress={()=> console.log("button pressed")}>
                    <Text style={styles.headText}>BILLS</Text>
                    <View style={styles.bottomContainer}>
                        <View style={styles.leftContainer}>
                            <Text style={styles.leftbuttonText}>
                                <Text>SET:</Text>
                                <Text>$1000</Text>
                            </Text>
                        </View>
                        <View style={styles.middleContainer}>
                        <PieChart style={{alignSelf: 'center'}}
                        data={[
                            { title: 'One', value: 3, color: '#dda7a7' },
                            { title: 'Two', value: 1, color: '#F9EFE0' },
                        ]} lineWidth={35} viewBoxSize={[100,100]}
                        />
                        </View>
                        <View style={styles.rightContainer}>
                            <Text style={styles.rightbuttonText}>
                                <Text>ACTUAL:</Text>
                                <Text>$850</Text>
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.mainButton,{backgroundColor:'#70997b'}]} onPress={()=> console.log("button pressed")}>
                    <Text style={styles.headText}>FOOD</Text>
                    <View style={styles.bottomContainer}>
                        <View style={styles.leftContainer}>
                            <Text style={styles.leftbuttonText}>
                                <Text>SET:</Text>
                                <Text>$450</Text>
                            </Text>
                        </View>
                        <View style={styles.middleContainer}>
                        <PieChart style={{alignSelf: 'center'}}
                        data={[
                            { title: 'One', value: 6, color: '#dda7a7' },
                            { title: 'Two', value: 4, color: '#F9EFE0' },
                        ]} lineWidth={35} viewBoxSize={[100,100]}
                        />
                        </View>
                        <View style={styles.rightContainer}>
                            <Text style={styles.rightbuttonText}>
                                <Text>ACTUAL:</Text>
                                <Text>$250</Text>
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.mainButton,{backgroundColor:'#9cc3b0'}]} onPress={()=> console.log("button pressed")}>
                    <Text style={styles.headText}>ENTERTAINMENT</Text>
                    <View style={styles.bottomContainer}>
                        <View style={styles.leftContainer}>
                            <Text style={styles.leftbuttonText}>
                                <Text>SET:</Text>
                                <Text>$100</Text>
                            </Text>
                        </View>
                        <View style={styles.middleContainer}>
                        <PieChart style={{alignSelf: 'center'}}
                        data={[
                            { title: 'One', value: 3, color: '#dda7a7' },
                            { title: 'Two', value: 7, color: '#F9EFE0' },
                        ]} lineWidth={35} viewBoxSize={[100,100]}
                        />
                        </View>
                        <View style={styles.rightContainer}>
                            <Text style={styles.rightbuttonText}>
                                <Text>ACTUAL:</Text>
                                <Text>$30</Text>
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.mainButton,{backgroundColor:'#9DADA5'}]} onPress={()=> console.log("button pressed")}>
                    <Text style={styles.headText}>HOME</Text>
                    <View style={styles.bottomContainer}>
                        <View style={styles.leftContainer}>
                            <Text style={styles.leftbuttonText}>
                                <Text>SET:</Text>
                                <Text>$80</Text>
                            </Text>
                        </View>
                        <View style={styles.middleContainer}>
                        <PieChart style={{alignSelf: 'center'}}
                        data={[
                            { title: 'One', value: 7, color: '#dda7a7' },
                            { title: 'Two', value: 3, color: '#F9EFE0' },
                        ]} lineWidth={35} viewBoxSize={[100,100]}
                        />
                        </View>
                        <View style={styles.rightContainer}>
                            <Text style={styles.rightbuttonText}>
                                <Text>ACTUAL:</Text>
                                <Text>$50</Text>
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        // </View>
    );
}

const styles = StyleSheet.create({
    // bigContainer: {
    //     width:'100%',
    //     height:'100%',
    //     alignSelf:'center',
    // },
    mainContainer: {
        display:'flex',
        flexDirection:'column',
        width:'100%',
        height:'100%',
    },
    mainButton: {
        width:'100%',
        height:'20%',
        alignContent:'center',
        display:'flex',
        flexDirection:'column',
    },
    headText: {
        color:'white',
        fontSize:18,
        fontFamily:'spartan',
        letterSpacing:2,
        textAlign:'center',
        height:'10%',
        fontWeight:'600',
        marginTop:10,
    },
    bottomContainer: {
        display:'flex',
        flexDirection:'row',
        width:'90%',
        height:'80%',
        alignSelf:'center',
        justifyContent:'space-between',
    },
    leftContainer: {
        width:'20%',
        height:'100%',
    },
    rightContainer: {
        width:'25%',
        height:'100%',
    },
    middleContainer: {
        width:'55%',
        height:'80%',
        marginTop:10,
        marginRight:-10,
    },
    leftbuttonText: {
        textAlign:'center',
        color:'white',
        fontSize:14,
        display:'flex',
        flexDirection:'column',
        fontFamily:'spartan',
    },
    rightbuttonText: {
        textAlign:'center',
        color:'white',
        fontSize:14,
        display:'flex',
        flexDirection:'column',
        fontFamily:'spartan',
    }
});