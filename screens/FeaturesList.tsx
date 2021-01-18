import useFloatingHeaderHeight from '@react-navigation/stack/lib/typescript/src/utils/useHeaderHeight';
import React, {useState} from 'react';
import { Image, StyleSheet, View, Button, TouchableOpacity, Text} from 'react-native';

export default function NewFeaturesList({navigation}){

    return(
        <View style={{backgroundColor: 'white'}}>
            <View style = {styles.bigContainer}>
                <View style={styles.smallContainer}>
                    <View style={styles.selfcareContainer}>
                        <TouchableOpacity style={[styles.optionsContainer,{backgroundColor:'#f1dff4'}]} onPress={()=>navigation.navigate('SelfCare', {screen: 'HabitTracker'})}>
                            <Text style={styles.optionsText}>HABIT TRACKER</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.optionsContainer,{backgroundColor:'#fffbdb'}]} onPress={()=>navigation.navigate('SelfCare', {screen: 'Mood'})}>
                            <Text style={styles.optionsText}>MOOD TRACKER</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.optionsContainer,{backgroundColor:'#f8f8f8'}]} onPress={()=>navigation.navigate('SelfCare', {screen: 'BrainDump'})}>
                            <Text style={styles.optionsText}>BRAIN DUMP</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.healthContainer}>
                        <TouchableOpacity style={[styles.optionsContainer,{backgroundColor:'#e9afaf'}]} onPress={()=>navigation.navigate('Health', {screen: 'Period'})}>
                            <Text style={styles.optionsText}>PERIOD TRACKER</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.optionsContainer,{backgroundColor:'#ffecdb'}]} onPress={()=>navigation.navigate('Health', {screen: 'Meal'})}>
                            <Text style={styles.optionsText}>MEAL PLANNER</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.optionsContainer,{backgroundColor:'#d7e0f1'}]} onPress={()=>navigation.navigate('Health', {screen: 'ActivityTracker'})}>
                            <Text style={styles.optionsText}>WATER TRACKER</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.focusContainer}>
                        <TouchableOpacity style={[styles.optionsContainer,{backgroundColor:'#c4c4c4'}]} onPress={()=>navigation.navigate('Focus', {screen: 'Goal'})}>
                            <Text style={styles.optionsText}>GOAL PLANNER</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.optionsContainer,{backgroundColor:'#ffc6c6'}]} onPress={()=>navigation.navigate('Focus', {screen: 'Tasks'})}>
                            <Text style={styles.optionsText}>TASK MANAGER</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.optionsContainer,{backgroundColor:'#dcf0e7'}]} onPress={()=>navigation.navigate('Focus', {screen: 'BudgetTracker'})}>
                            <Text style={styles.optionsText}>BUDGET TRACKER</Text>
                        </TouchableOpacity>
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
        paddingBottom: 300,
        paddingTop: '3%',
        height:'100%',
    },
    smallContainer:{
        borderRadius: 8,
        width: '100%',
        height: '100%',
        display:'flex',
        flexDirection:'column',
        marginTop:80,
        justifyContent:'space-around',
        alignSelf:'center',
        marginLeft:10,
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
    selfcareContainer: {
        flexDirection:'row',
        width:'100%',
        height:'auto',
        padding:5,
    },
    healthContainer: {
        flexDirection:'row',
        width:'100%',
        height:'auto',
        padding:5,
    },
    focusContainer: {
        flexDirection:'row',
        width:'100%',
        height:'auto',
        padding:5,
    },
    optionsContainer: {
        width:100,
        height:100,
        padding:1,
        margin:10,
    },
    optionsText: {
        fontWeight:'300',
        fontFamily:'spartan',
        textAlign:'center',
        paddingTop:30,
        letterSpacing:1,
    }
});