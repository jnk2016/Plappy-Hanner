import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Goal ({navigation}) {

  return (
    <View>
        <View style={styles.bigContainer}>
            <TextInput style={styles.searchBar}
            underlineColorAndroid='transparent'
            placeholder='Search'
            placeholderTextColor='#c5c5c5'
            autoCapitalize='none'
            allowFontScaling={true}/>
            <View style={styles.smallContainer}>
                <TouchableOpacity style={styles.allContainer} onPress={()=> console.log("button pressed")}>
                    <Text style={styles.containerText}>ALL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.reviewContainer} onPress={()=> console.log("button pressed")}>
                    <Text style={styles.containerText}>REVIEW</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.progressContainer} onPress={()=> console.log("button pressed")}>
                    <Text style={styles.containerText}>IN PROGRESS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.openContainer} onPress={()=> console.log("button pressed")}>
                    <Text style={styles.containerText}>OPEN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.developContainer} onPress={()=> console.log("button pressed")}>
                    <Text style={styles.containerText}>IN DEVELOPMENT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.completeContainer} onPress={()=> console.log("button pressed")}>
                    <Text style={styles.containerText}>COMPLETE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addContainer} onPress={()=> console.log("button pressed")}>
                <Text style={styles.containerText}>ADD</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
  }

  const styles = StyleSheet.create ({
    bigContainer: {
        alignItems: 'center',
        paddingBottom:30,
        backgroundColor:'white',
    },
    searchBar: {
        width:'85%',
        padding:8,
        backgroundColor:'rgba(196,196,196,0.33)',
        borderRadius:20,
        height:'auto',
        marginLeft:10,
        marginTop:20,
      },
    smallContainer: {
        height:650,
        width:'100%',
        marginLeft: 20,
        marginTop:30,
    },
    containerText: {
        color:'black',
        fontSize: 18,
        fontFamily:'Spartan-SemiBold',
        textAlign:'center',
        letterSpacing:1,
        alignSelf: 'center'
    },
    allContainer: {
        flex:1,
        backgroundColor:'#c5c5c5',
        height:'30%',
        padding:20,
        width:'95%',
        borderRadius: 20,
        justifyContent: 'center',
    },
    reviewContainer: {
        flex:2,
        backgroundColor: '#fa9d9d',
        height:'30%',
        padding:45,
        width:'95%',
        borderRadius: 20,
        justifyContent: 'center',
    },
    progressContainer: {
        flex:2,
        backgroundColor: '#ffc6c6',
        height:'30%',
        padding:42,
        width:'95%',
        borderRadius: 20,
        justifyContent: 'center',
    },
    openContainer: {
        flex:2,
        backgroundColor: '#ffdede',
        height:'30%',
        padding:40,
        width:'95%',
        borderRadius: 20,
        justifyContent: 'center',
    },
    developContainer: {
        flex:2,
        backgroundColor: '#ffeeee',
        height:'30%',
        padding:40,
        width:'95%',
        borderRadius: 20,
        justifyContent: 'center',
    },
    completeContainer: {
        flex:2,
        backgroundColor: '#fff7ef',
        height:'30%',
        padding:40,
        width:'95%',
        borderRadius: 20,
        justifyContent: 'center',
    },
    addContainer: {
        flex:3,
        height:'10%',
        width:'30%',
        borderRadius: 50,
        borderWidth: 1,
        borderColor:'black',
        padding:10,
        borderStyle: 'solid',
        marginLeft:120,
        justifyContent: 'center',
        paddingVertical: '5%'
    }
});
