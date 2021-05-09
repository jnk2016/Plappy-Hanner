import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Flatlist, TouchableOpacity, Text, View, Alert} from 'react-native';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import Event from '../assets/images/EVENT.png';
import { PieChart } from 'react-minimal-pie-chart';
import Collapsible from 'react-native-collapsible';
// import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/Colors';

const SECTIONS = [
  {
    title:'ONGOING',
    content: 'MOISTURIZE',
    
  },
  {
    title: 'COMPLETED',
    content: 'Lorem',
  },
  {
    title: 'SKIPPED',
    content: 'Lorem',
  },
];

class HabitTracker extends React.Component<{}, any>{
  constructor(props) {
    super(props)
    this.state = {
      activeSection:'day',
    };
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
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  renderSection(){
    if(this.state.activeSection == 'day'){
      return(
        <View style={styles.mainContainer}>
          <View style={styles.headContainer}>
            <View style={styles.pieContainer}>
              <PieChart
              data={[
                { title: 'One', value: 5, color: '#e0d2e2' },
                {title: 'Two', value: 5, color: 'white' },
              ]} lineWidth={10} viewBoxSize={[100,100]}
              />
              <Text style={styles.pieText}>
                <Text>5</Text>
                <Text style={{fontSize:36}}>/10</Text>
              </Text>
                
              
            </View>
            <Text style={styles.pieCap}>HABITS COMPLETED</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.habitContainer}>
              <View style={styles.topRow}>
                <Text style={styles.habitHead}>MAKE BED</Text>
                <TouchableOpacity style={styles.skipButton}>
                  <Text style={styles.skipText}>X</Text>
                </TouchableOpacity>
              </View>
                <Text style={styles.numberText}>1/2 completed</Text>
                <View style={styles.graphOut}>
                  <View style={styles.graphIn}></View>
                </View>
              <View style={styles.bottomButton}>
                <TouchableOpacity style={styles.laterButton}>
                  <Text style={styles.buttonText}>DO LATER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.doneButton}>
                  <Text style={styles.buttonText}>DONE</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.habitContainer}>
              <View style={styles.topRow}>
                <Text style={styles.habitHead}>CLEAN ROOM</Text>
                <TouchableOpacity style={styles.skipButton}>
                  <Text style={styles.skipText}>X</Text>
                </TouchableOpacity>
              </View>
                <Text style={styles.numberText}>0/1 completed</Text>
                <View style={styles.graphOut}>
                </View>
              <View style={styles.bottomButton}>
                <TouchableOpacity style={styles.laterButton}>
                  <Text style={styles.buttonText}>DO LATER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.doneButton}>
                  <Text style={styles.buttonText}>DONE</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.habitContainer, {height:'30%'}]}>
              <View style={styles.topRow}>
                <Text style={styles.habitHead}>VITAMINS</Text>
                <TouchableOpacity style={styles.skipButton}>
                  <Text style={styles.skipText}>X</Text>
                </TouchableOpacity>
              </View>
                <Text style={styles.numberText}>completed!</Text>
                <View style={[styles.graphOut,{backgroundColor:'#e0d2e2'}]}>
                </View>
            </View>
          </View>
        </View>
      )
    }
    else if(this.state.activeSection == 'week'){
      return(
        <View style={styles.mainContainer}>
          <View style={styles.headContainer}>
            <View style={styles.pieContainer}>
              <PieChart
              data={[
                { title: 'One', value: 8, color: '#e0d2e2' },
                {title: 'Two', value: 2, color: 'white' },
              ]} lineWidth={10} viewBoxSize={[100,100]}
              />
              <Text style={styles.pieText}>80%</Text>
                
            </View>
            <Text style={styles.pieCap}>HABITS COMPLETED</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.habitweekContainer}>
                <Text style={styles.habitHead}>MAKE BED</Text>
                <Text style={styles.numberText}>4/7 days completed</Text>
                <View style={styles.graphOut}>
                  <View style={styles.graphIn}></View>
                </View>
                <View style={styles.habitweekDay}>
                  <Text style={styles.habitweekText}>
                    <Text>S</Text>
                    <Text>M</Text>
                    <Text>T</Text>
                    <Text>W</Text>
                    <Text>R</Text>
                    <Text>F</Text>
                    <Text>S</Text>
                  </Text>
                  <View style={styles.habitcircleWeek}>
                    <View style={[styles.habitCircle,{backgroundColor:'#b59bc9'}]}></View>
                    <View style={styles.habitCircle}></View>
                    <View style={[styles.habitCircle,{backgroundColor:'#b59bc9'}]}></View>
                    <View style={styles.habitCircle}></View>
                    <View style={[styles.habitCircle,{backgroundColor:'#b59bc9'}]}></View>
                    <View style={styles.habitCircle}></View>
                    <View style={styles.habitCircle}></View>
                  </View>
                </View>
              <TouchableOpacity style={styles.editButton}>
                <Text style={styles.buttonText}>EDIT</Text>
              </TouchableOpacity>
            </View>
            </View>
        </View>
      )
    }
    else{
      return(
        <View style={[styles.mainContainer, {backgroundColor:'#f1dff4'}]}>
          <View style={[styles.headContainer,{height:'20%'}]}>
            <Text style={styles.currentMonth}>JANUARY</Text>
          </View>
          <View style={styles.habitmonthContainer}>
            <TouchableOpacity style={styles.piemonthCircle}>
                    <PieChart style={{alignSelf: 'center'}}
                    data={[
                        { title: 'One', value: 3, color: '#e8d7f6' },
                        {title: 'Two', value: 1, color: 'white' },
                        { title: 'Three', value: 2, color: '#e8d7f6' },
                        { title: 'Four', value: 24, color: 'white' },
                    ]} lineWidth={20} viewBoxSize={[100,100]}
                    />
                    <Text style={[styles.piemonthText,{marginTop:-80}]}>MAKE BED</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.piemonthCircle}>
                    
                    <PieChart style={{alignSelf: 'center'}}
                    data={[
                        { title: 'One', value: 3, color: '#e8d7f6' },
                        {title: 'Two', value: 27, color: 'white' },
                    ]} lineWidth={20} viewBoxSize={[100,100]}
                    />
                        <Text style={styles.piemonthText}>MOISTURIZE</Text>
                    
                </TouchableOpacity>
          </View>
        </View>
      )
    }
  }

// export default function HabitTracker ({navigation}) {

  render() {
    return (
    <View style={styles.bigContainer}>
      <View style={styles.smallContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.mainButtons} onPress={()=>{this.setState({activeSection:'day'})}}>
            <Text style={styles.mainText}>DAILY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainButtons} onPress={()=>{this.setState({activeSection:'week'})}}>
            <Text style={styles.mainText}>WEEKLY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainButtons} onPress={()=>{this.setState({activeSection:'month'})}}>
            <Text style={styles.mainText}>MONTHLY</Text>
          </TouchableOpacity>
        </View>
        </View>
        {this.renderSection()}
        {/* <View style={styles.mainContainer}>
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
        </View> */}
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
    overflow:'scroll',
    display:'flex',
    flexDirection:'column',
  },
  smallContainer:{
    backgroundColor:'#f1dff4',
    width:'100%',
    height:'5%',
    padding:10,
    display:'flex',
    flexDirection:'column',
  },
  mainContainer:{
    alignSelf:'center',
    width:'100%',
    height:'80%',
    display:'flex',
    flexDirection:'column',
  },
  buttonContainer:{
    width:'90%',
    height:'100%',
    justifyContent:'space-between',
    alignSelf:'center',
    display:'flex',
    flexDirection:'row',
  },
  mainButtons:{
    width:90,
    height:'auto',
    padding:10,
    textAlign:'center',
  },
  headContainer:{
    display:'flex',
    backgroundColor:'#f1dff4',
    flexDirection:'column',
    alignSelf:'center',
    width:'100%',
    height:'50%',
    paddingTop:20,
  },
  pieContainer:{
    alignSelf:'center',
    width:200,
    height:200,
    borderRadius:100,
    alignItems:'center',
    textAlign:'center',
    display:'flex',
    flexDirection:'column',
    
  },
  pieText:{
    fontSize:48,
    color:'#383838',
    fontFamily:'spartan',
    fontWeight:'600',
    marginTop:-120,
  },
  pieCap:{
    fontSize:14,
    color:'#383838',
    fontFamily:'spartan',
    alignSelf:'center',
    paddingTop:20,
  },
  bottomContainer:{
    width:'100%',
    height:'60%',
    display:'flex',
    flexDirection:'column',
    backgroundColor:'white',
    justifyContent:'space-between',
    marginTop:30,
  },
  habitContainer:{
    backgroundColor:'#e5e5e5',
    width:'90%',
    height:'40%',
    padding:10,
    alignSelf:'center',
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'column',
    marginBottom:20,
  },
  topRow:{
    width:'100%',
    height:'auto',
    padding:5,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignSelf:'center',
  },
  habitHead:{
    fontSize:14,
    color:'black',
    fontFamily:'spartan',
    textAlign:'left',
  },
  skipButton:{
    width:'auto',
  },
  skipText:{
    color:'#c4c4c4',
    fontSize:18,
  },
  numberText:{
    fontSize:12,
    color:'black',
    textAlign:'right',
  },
  graphOut:{
    width:'100%',
    height:20,
    backgroundColor:'white',
    borderRadius:10,
  },
  graphIn:{
    width:'50%',
    height:20,
    alignSelf:'flex-start',
    backgroundColor:'#e0d2e2',
    borderRadius:10,
  },
  bottomButton:{
    display:'flex',
    flexDirection:'row',
    width:'50%',
    height:'auto',
    alignSelf:'flex-end',
    justifyContent:'space-between',
  },
  laterButton:{
    backgroundColor:'white',
    width:90,
    height:30,
    borderRadius:10,
    padding:10,
    textAlign:'center',
  },
  doneButton:{
    backgroundColor:'#f1dff4',
    width:60,
    height:30,
    borderRadius:10,
    padding:10,
    textAlign:'center',
  },
  buttonText:{
    fontSize:10,
    color:'black',
    fontFamily:'spartan',
  },
  mainText:{
    fontSize:12,
    color:'black',
    fontFamily:'spartan',
  },
  habitweekContainer:{
    backgroundColor:'#e5e5e5',
    width:'90%',
    height:'55%',
    padding:10,
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignSelf:'center',
  },
  habitweekDay:{
    display:'flex',
    flexDirection:'column',
    width:'85%',
    height:'40%',
    padding:10,
    alignSelf:'center',
    justifyContent:'space-between',
  },
  habitweekText:{
    fontSize:12,
    color:'black',
    fontFamily:'spartan',
    width:'95%',
    alignSelf:'center',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  habitcircleWeek:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'auto',
    justifyContent:'space-between',
  },
  habitCircle:{
    borderWidth:1,
    borderColor:'white',
    width:20,
    height:20,
    borderRadius:10,
  },
  editButton:{
    width:50,
    height:30,
    backgroundColor:'white',
    padding:10,
    borderRadius:10,
    textAlign:'center',
    alignSelf:'flex-end',
  },
  currentMonth:{
    fontSize:20,
    color:'black',
    fontFamily:'spartan',
    alignSelf:'center',
  },
  piemonthCircle: {
    width:120,
    height:120,
    borderRadius:60,
    borderWidth:1,
    borderColor:'gray',
    alignItems:'center',
    textAlign:'center',
    alignSelf:'center',
},
habitmonthContainer:{
  width:'100%',
  height:'60%',
  display:'flex',
  flexDirection:'column',
  alignSelf:'center',
  justifyContent:'space-between',
},
piemonthText:{
  fontSize:14,
  color:'black',
  alignSelf:'center',
  fontFamily:'spartan',
  marginTop:-60,
}
});

export default HabitTracker