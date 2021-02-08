import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
// import '../assets/css/selfcare.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import Journal from '../assets/images/journal.png';
import Cart from '../assets/images/cart.png';
import Hat from '../assets/images/chefhat.png';
import { RotationGestureHandler, TouchableOpacity } from 'react-native-gesture-handler';
import { PieChart } from 'react-minimal-pie-chart';


export default function MealPlanner ({navigation}) {
  return (
      <View style={styles.bigContainer}>
        <View style={styles.headContainer}>
          <Text style={styles.headText}>FRIDAY JAN 8</Text>
          <View style={styles.headBox}>
            <View style={styles.leftHead}>

              <View style={styles.headTop}>
              <View style={styles.headNumber}>
                <Text style={styles.numberText}>
                  <Text>28g</Text>
                  <Text>28g</Text>
                  <Text>108g</Text>
                </Text>
              </View>
              </View>
              <View style={styles.headBottom}>

              <View style={styles.headDesc}>

                <Text style={styles.descText}>
                  <Text>PROTEINS</Text>
                  <Text>FATS</Text>
                  <Text>CARBS</Text>
                </Text>
              </View>
              </View>
            </View>
            <View style={styles.rightHead}>

            <View style={styles.circleHead}>
              <Text style={styles.circleText}>
                <Text style={{fontSize:18, fontWeight:'600'}}>1362</Text>
                <Text>CALORIES</Text>
              </Text>
            </View>
            </View>
          </View>
        </View>
          <View style={styles.mainContainer}>
            <View style={styles.leftContainer}>
              <Text style={styles.leftText}>
                <Text>BREAKFAST</Text>
                <Text>LUNCH</Text>
                <Text>DINNER</Text>
                <Text>SNACKS</Text>
              </Text>
            </View>
            <View style={styles.rightContainer}>
              <View style={styles.rightText}>
                <View style={styles.rightGroup}>
                  <Text style={styles.rightContent}>
                    <Text>Ham & Cheese Hot Pocket</Text>
                    <Text>Low-fat yogurt</Text>
                    <Text>Granola Bar</Text>
                  </Text>
                </View>
                <View style={styles.rightGroup}>
                  <Text style={styles.rightContent}>
                    <Text>Ham & Cheese Hot Pocket</Text>
                    <Text>Low-fat yogurt</Text>
                    <Text>Granola Bar</Text>
                  </Text>
                </View>
                <View style={styles.rightGroup}>
                  <Text style={styles.rightContent}>
                    <Text>Ham & Cheese Hot Pocket</Text>
                    <Text>Low-fat yogurt</Text>
                    <Text>Granola Bar</Text>
                  </Text>
                </View>
                <View style={styles.rightGroup}>
                  <Text style={styles.rightContent}>
                    <Text>Granola Bar</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
      </View>
  );
}

const styles = StyleSheet.create ({
  bigContainer: {
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    alignContent:'center',
  },
  headContainer: {
    display:'flex',
    flexDirection:'column',
    width:'90%',
    height:'30%',
    alignSelf:'center',
    justifyContent:'center',
  },
  headText: {
    textAlign:'left',
    color:'black',
    letterSpacing:1,
    fontFamily:'spartan',
    fontSize:18,
  },
  headBox: {
    width:'100%',
    height:'30%',
    borderWidth:1,
    borderColor:'black',
    display:'flex',
    flexDirection:'row',
  },
  leftHead: {
    display:'flex',
    flexDirection:'column',
    width:'70%',
    height:'100%',
    marginTop:10,
  },
  rightHead: {
    width:'30%',
    height:'100%',
  },
  headTop: {
    width:'100%',
    height:'50%',
    display:'flex',
    flexDirection:'row',
  },
  headBottom: {
    width:'100%',
    height:'50%',
    display:'flex',
    flexDirection:'row',
  },
  headNumber: {
    width:'90%',
    height:'50%',
  },
  numberText: {
    display:'flex',
    flexDirection:'row',
    width:'90%',
    height:'100%',
    justifyContent:'space-between',
    alignSelf:'center',
    fontSize:14,
    fontFamily:'spartan'
  },
  headDesc: {
    width:'90%',
    height:'50%',
  },
  descText: {
    display:'flex',
    flexDirection:'row',
    width:'90%',
    height:'100%',
    justifyContent:'space-between',
    alignSelf:'center',
    borderTopColor:'black',
    borderTopWidth:1,
    letterSpacing:1,
    fontSize:10,
  },
  circleHead: {
    backgroundColor:'#ffe0c2',
    width:100,
    height:100,
    borderRadius:50,
    marginTop:-30,
  },
  circleText: {
    fontSize:12,
    color:'black',
    fontFamily:'spartan',
    letterSpacing:1,
    display:'flex',
    flexDirection:'column',
    textAlign:'center',
    paddingTop:20,
    lineHeight:30,
  },
  mainContainer: {
    width:'90%',
    height:'70%',
    flexDirection:'row',
    display:'flex',
    alignSelf:'center',
    justifyContent:'space-around',
    alignItems:'center',
  },
  leftContainer:{
    width:'40%',
    height:'100%',
    alignSelf:'center',
    borderRightWidth:1,
    borderRightColor:'black',
  },
  rightContainer:{
    display:'flex',
    flexDirection:'column',
    width:'50%',
    height:'100%',
    alignSelf:'center',
  },
  leftText: {
    alignSelf:'center',
    justifyContent:'space-between',
    width:'100%',
    height:'80%',
    color:'black',
    fontSize:14,
    fontFamily:'spartan',
    fontWeight:'600',
    textAlign:'center',
    display:'flex',
    flexDirection:'column',
    letterSpacing:1,
  },
  rightText: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    width:'100%',
    height:'95%',
  },
  rightGroup: {
    height:'20%',
    width:'100%',
    alignSelf:'flex-start',
  },
  rightContent: {
    color:'black',
    height:'100%',
    textAlign:'left',
    fontSize:12,
    letterSpacing:1,
    fontFamily:'spartan',
    justifyContent:'space-between',
    flexDirection:'column',
  }
})