import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, Text, View, Alert} from 'react-native';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import Event from '../assets/images/EVENT.png';
import { PieChart } from 'react-minimal-pie-chart';
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
  {
    title:'ONGOING',
    content: 'Lorem ipsum',
  },
  {
    title: 'COMPLETED',
    content: 'Lorem ipsum...',
  },
];

class AccordionView extends Component {
  state = {
    activeSections: [],
  };

  _renderSectionTitle = section => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  _renderHeader = section => {
    return (
      <View style={styles.header}>
        <Text style={styles.header}>{section.title}</Text>
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

// export default function HabitTracker ({navigation}) {

  render() {
    return (
    <View style={styles.bigContainer}>
      <View style={styles.smallContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.mainButtons}>
            <Text style={styles.buttonText}>D</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainButtons}>
            <Text style={styles.buttonText}>W</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainButtons}>
            <Text style={styles.buttonText}>M</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.headContainer}>
          <Text style={styles.headerText}>TODAY</Text>
            <View style={styles.pieContainer}>
              <View style={styles.smallCircle}></View>
              <Text style={styles.pieText}>
                <Text style={{fontSize:48,fontWeight:'600'}}>50%</Text>
                <Text>goal reached</Text>
              </Text>
            </View>
          </View>
          <View style={styles.habitContainer}>
            <Text style={styles.headhabitText}>
              <Text>CURRENT STREAK</Text>
              <Text>5 DAYS</Text>
            </Text>
            <View style={styles.habitButton}>
              <Accordion
              sections={SECTIONS}
              activeSections={this.state.activeSections}
              renderSectionTitle={this._renderSectionTitle}
              renderHeader={this._renderContent}
              onChange={this._updateSections}
              />
              <TouchableOpacity style={[styles.habitOptions,{backgroundColor:'#e8d7f6'}]}>
                <Text style={styles.habitText}>
                  <Text>ONGOING</Text>
                  <Text>4</Text>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.habitOptions,{backgroundColor:'#bfb1cb'}]}>
                <Text style={styles.habitText}>
                  <Text>COMPLETED</Text>
                  <Text>1</Text>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.habitOptions,{backgroundColor:'#9c8ca9'}]}>
                <Text style={styles.habitText}>
                  <Text>SKIPPED</Text>
                  <Text>1</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
    }
}

const styles = StyleSheet.create ({
  bigContainer: {
    width:'100%',
    height:'100%',
    fontFamily:'spartan',
    backgroundColor:'white',
  },
  smallContainer:{
    width:'100%',
    height:'90%',
    alignSelf:'center',
    display:'flex',
    flexDirection:'column',
  },
  buttonContainer:{
    alignSelf:'flex-end',
    width:'30%',
    height:'10%',
    justifyContent:'space-between',
    display:'flex',
    flexDirection:'row',
    margin:20,
  },
  mainButtons:{
    width:30,
    height:30,
    borderRadius:15,
    borderWidth:3,
    borderColor:'#b59bc9',
    justifyContent:'center',
  },
  buttonText:{
    color:'#383838',
    fontSize:14,
    fontFamily:'spartan',
    marginTop:1,
    fontWeight:'600',
    alignSelf:"center",
  },
  mainContainer:{
    display:'flex',
    flexDirection:'column',
    width:'100%',
    height:'80%',
    alignSelf:'center',
    justifyContent:"space-between",
    marginTop:20,
  },
  headerText:{
    fontSize:18,
    fontFamily:'spartan',
    color:'black',
    textAlign:'left',
    height:'20%',
    marginBottom:10,
  },
  headContainer:{
    width:'90%',
    height:'50%',
    alignSelf:'center',
    justifyContent:'space-around',
  },
  pieContainer:{
    borderTopWidth:5,
    borderTopColor:'#b59bc9',
    width:320,
    height:310,
    borderRadius:160,
    alignSelf:"center",
  },
  smallCircle:{
    backgroundColor:'#e8d7f6',
    width:30,
    height:30,
    borderRadius:15,
    marginLeft:150,
    marginTop:-15,
  },
  pieText:{
    display:'flex',
    flexDirection:'column',
    color:'#b59bc9',
    fontSize:18,
    fontFamily:'spartan',
    alignSelf:'flex-start',
    marginLeft:50,
    marginTop:100,
  },
  habitContainer:{
    width:'100%',
    height:'50%',
    display:'flex',
    flexDirection:'column',
    alignSelf:'center',
  },
  headhabitText:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignSelf:'center',
    width:'90%',
    height:'auto',
    padding:5,
    fontSize:14,
    fontFamily:'spartan',
  },
  habitButton:{
    display:'flex',
    flexDirection:'column',
    alignSelf:'center',
    width:'100%',
    height:'100%',
  },
  habitOptions:{
    width:'100%',
    height:'40%',
    padding:10,
    justifyContent:'center',
  },
  habitText:{
    display:'flex',
    flexDirection:'row',
    color:'#383838',
    alignSelf:'center',
    justifyContent:'space-between',
    fontSize:14,
    fontWeight:'600',
    fontFamily:'spartan',
    width:'90%',
  },
});