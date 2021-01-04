import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
// import '../assets/css/selfcare.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import Event from '../assets/images/Event.png';
import List from '../assets/images/jam_task-list.png';
import Paint from '../assets/images/bx_bx-paint.png';
import Mic from '../assets/images/ic_outline-keyboard-voice.png';
import Picture from '../assets/images/jam_picture.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderBackground } from '@react-navigation/stack';


export default function BrainDump ({navigation}) {
  return (
    <View>
      <View style={styles.bigContainer}>
        <TextInput style={styles.searchBar}
        underlineColorAndroid='transparent'
        placeholder='Search'
        placeholderTextColor='#c5c5c5'
        autoCapitalize='none'
        allowFontScaling={true}/>
        <View style={styles.buttonContainer}>
          <View style={styles.grayContainer}>
            <TouchableOpacity style={styles.iconContainer} onPress={()=>console.log("button pressed")}>
              <Image
              source={{uri:List}}
              style={{width:50, height:50}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.grayContainer}>
            <TouchableOpacity style={styles.iconContainer} onPress={()=>console.log("button pressed")}>
              <Image
              source={{uri:Paint}}
              style={{width:50, height:50}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.grayContainer}>
            <TouchableOpacity style={styles.iconContainer} onPress={()=>console.log("button pressed")}>
              <Image
              source={{uri:Mic}}
              style={{width:50, height:50}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.grayContainer}>
            <TouchableOpacity style={styles.iconContainer} onPress={()=>console.log("button pressed")}>
              <Image
              source={{uri:Picture}}
              style={{width:50, height:50}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.grayContainer}>
            <TouchableOpacity style={styles.iconContainer} onPress={()=>console.log("button pressed")}>
              <Image
              source={{uri:Event}}
              style={{width:50, height:50}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        <View style={styles.spiritContainer}>
          <Text style={styles.brainHeader}>SPIRITUAL</Text>
          <Text style={styles.brainDesc}>Lorem ipsum dolor sit amet.</Text>
        </View>
        <View style={styles.dreamsContainer}>
          <Text style={styles.brainHeader}>DREAMS</Text>
          <Text style={styles.brainDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores repudiandae sunt exercitationem voluptate. Fugit quae enim nobis nemo est.</Text>
        </View>
      </View>
        <View style={styles.rightContainer}>
          <View style={styles.lifeContainer}>
            <Text style={styles.brainHeader}>LIFESTYLE</Text>
            <Text style={styles.brainDesc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias nobis quia tenetur?</Text>
          </View>
          <View style={styles.romanceContainer}>
            <Text style={styles.brainHeader}>ROMANCE</Text>
            <Image
            source={{uri:Heart}}
            style={{height:55,width:50,marginLeft:30}}
            />
          </View>
          <View style={styles.workContainer}>
            <Text style={styles.brainHeader}>WORK</Text>
            <Text style={styles.brainDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quasi accusamus magnam. Rerum, quae nostrum.</Text>
          </View>
       </View> 
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  bigContainer: {
    backgroundColor: 'white',
    alignContent:'center',
    width:'100%',
    height:'100%',
    paddingBottom:30,
  },
  searchBar: {
    width:'75%',
    padding:8,
    backgroundColor:'rgba(196,196,196,0.33)',
    borderRadius:20,
    height:'auto',
    marginLeft:50,
    marginTop:20,
  },
  grayContainer: {
    margin:5,
  },
  buttonContainer: {
    width:'95%',
    flexDirection:'row',
    display:'flex',
    marginTop:10,
    marginLeft:40,
    alignContent:'center',
  },
  iconContainer: {
    backgroundColor:'#c5c5c5',
    borderRadius:50,
    width:50,
    height:50,
  },
  mainContainer: {
    backgroundColor:'#f8f8f8',
    borderColor:'#9CC3B0',
    borderWidth:1,
    width:'95%',
    height:'auto',
    display:'flex',
    flexDirection:'row',
    borderRadius:5,
    paddingTop:20,
    paddingLeft:10,
    paddingRight:10,
    marginTop:10,
    marginLeft:10,
  },
  leftContainer: {
    padding:5,
    width:'50%'
  },
  spiritContainer: {
    borderRadius:10,
    borderColor:'#9CC3B0',
    borderWidth:1,
    backgroundColor:'white',
    width:'100%',
    height:'auto',
    padding:20,
    margin:5,
  },
  dreamsContainer: {
    borderRadius:10,
    borderColor:'#9CC3B0',
    borderWidth:1,
    backgroundColor:'white',
    width:'100%',
    height:'auto',
    padding:20,
    margin:5,
  },
  rightContainer: {
    padding:5,
    width:'50%'
  },
  lifeContainer: {
    borderRadius:10,
    borderColor:'#9CC3B0',
    borderWidth:1,
    backgroundColor:'white',
    width:'100%',
    height:'auto',
    padding:20,
    margin:5,
  },
  romanceContainer: {
    borderRadius:10,
    borderColor:'#9CC3B0',
    borderWidth:1,
    backgroundColor:'white',
    width:'100%',
    height:'auto',
    padding:20,
    margin:5,
  },
  workContainer: {
    borderRadius:10,
    borderColor:'#9CC3B0',
    borderWidth:1,
    backgroundColor:'white',
    width:'100%',
    height:'auto',
    padding:20,
    margin:5,
  },
  brainHeader: {
    fontFamily:'spartan',
    fontSize:14,
    letterSpacing:1,
    textAlign:'center',
    fontWeight:600,
  },
  brainDesc: {
    fontSize:12,
    fontFamily:'spartan',
    textAlign:'left',
    lineHeight:20,
  }
});