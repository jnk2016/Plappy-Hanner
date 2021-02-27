import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/ion_heart-sharp.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';
import Protect from '../assets/images/bi_shield.png';
import Polygon from '../assets/images/Polygon 4.png';
import Heavy from '../assets/images/Vectorperiod.png';
import Sign from '../assets/images/Vectorperiod-1.png';
import Circle from '../assets/images/bx_bx-loader-circleperiod.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import LinearGradient from '../assets/features/LinearGradient';
import { PieChart } from 'react-minimal-pie-chart';

export default function Period ({navigation}) {

  return (
    <View style={styles.bigContainer}>
       <View style={styles.smallContainer}>
         <View style={styles.statContainer}>
           <View style={styles.mainLine}></View>
           <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.cyclelengthContainer}>
              <PieChart style={{alignSelf: 'center'}}
                data={[
                  { title: 'One', value: 1, color: '#727272' },
                  {title: 'Two', value: 1, color: '#dda7a7' },
                ]} lineWidth={100} viewBoxSize={[100,100]}
                />
                <Text style={styles.headstatText}>MY STATS</Text>
              <Text style={styles.cycleText}>
                <Text>AVERAGE CYCLE:</Text>
                <Text style={{fontSize:16, fontWeight:'600'}}>28 DAYS</Text>
              </Text>
            </TouchableOpacity>
            <View style={styles.periodlengthContainer}>
              <View style={styles.periodlengthLeft}>
                <TouchableOpacity style={styles.mainButton} onPress={()=>navigation.navigate('PeriodCalendar', {screen:'PeriodCalendar'})}>
                  <Text style={styles.buttonText}>VIEW CALENDAR</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.periodlengthMiddle}>
                <TouchableOpacity style={styles.periodlengthButton}>
                </TouchableOpacity> 
              </View>
              <View style={styles.periodlengthRight}>
                <View style={styles.periodlengthOutline}>
                  <Text style={styles.periodlengthbuttonText}>5 DAYS</Text>
                </View>
                <Text style={styles.periodlengthText}>AVERAGE PERIOD:</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.cycledayContainer}>
              <Text style={styles.cycledayText}>
                <Text>CYCLE DAY</Text>
                <Text>24</Text>
              </Text>
            </TouchableOpacity>
            <View style={styles.perioddayContainer}>
              <View style={styles.perioddayLeft}>
                <View style={styles.perioddayOutline}>

                  <Text style={styles.perioddaybuttonText}>4 DAYS</Text>
                </View>
                <Text style={styles.periodtodayText}>DAYS TO PERIOD</Text>
              </View>
              <View style={styles.periodlengthMiddle}>
                <TouchableOpacity style={styles.perioddayButton}>
                </TouchableOpacity>
              </View>
              <View style={styles.perioddayRight}>
                <TouchableOpacity style={styles.mainButton} onPress={()=>navigation.navigate('PeriodShare', {screen:'PeriodShare'})}>
                  <Text style={styles.buttonText}>LOG PERIOD</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        <View style={styles.addbuttonContainer}>
          <View style={styles.buttonContainer}>
            <View style={styles.symptomContainer}>
              <TouchableOpacity style={styles.symptomButton} onPress={()=>navigation.navigate('SymptomIntimacy', {screen:'SymptomIntimacy'})}>
                <Image
                source={Heart}
                style={{width:20,height:20,tintColor:'#727272',alignSelf:'center'}}
                />
              </TouchableOpacity>
              <Text style={styles.symptomText}>INTIMACY</Text>
            </View>
            <View style={styles.symptomContainer}>
              <TouchableOpacity style={styles.symptomButton} onPress={()=>navigation.navigate('SymptomFlow', {screen:'SymptomFlow'})}>
                <Image
                source={Heavy}
                style={{width:20,height:25,alignSelf:'center'}}
                />
              </TouchableOpacity>
              <Text style={styles.symptomText}>FLOW</Text>
            </View>
            <View style={styles.symptomContainer}>
              <TouchableOpacity style={styles.symptomButton} onPress={()=>navigation.navigate('SymptomDischarge', {screen:'SymptomDischarge'})}>
                <Image
                source={Circle}
                style={{width:30,height:30,alignSelf:'center'}}
                />
              </TouchableOpacity>
              <Text style={styles.symptomText}>DISCHARGE</Text>
            </View>
            <View style={styles.symptomContainer}>
              <TouchableOpacity style={styles.symptomButton}onPress={()=>navigation.navigate('SymptomBody', {screen:'SymptomBody'})}>
                <Image
                source={Sign}
                style={{width:22,height:35,alignSelf:'center'}}
                />
              </TouchableOpacity>
              <Text style={styles.symptomText}>BODY</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mainButton} onPress={()=>navigation.navigate('PeriodNote', {screen:'PeriodNote'})}>
            <Text style={styles.buttonText}>ADD SYMPTOMS</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create ({
  bigContainer: {
    backgroundColor:'#dda7a7',
    alignContent:'center',
    width:'100%',
    height:'100%',
  },
  smallContainer:{
    display:'flex',
    flexDirection:'column',
    width:'95%',
    height:'95%',
    alignSelf:'center'
  },
  statContainer:{
    width:'100%',
    height:'95%',
    alignSelf:'center',
    justifyContent:'space-between',
    position:'relative',
  },
  headstatText:{
    color:'white',
    fontSize:18,
    fontWeight:'600',
    fontFamily:"spartan",
    textAlign:'center',
    marginTop:-100,
  },
  mainLine:{
    borderLeftWidth:5,
    borderLeftColor:'#727272',
    alignSelf:'center',
    zIndex:-1,
    position:'absolute',
    width:'100%',
    height:'100%',
    marginRight:-351,
  },
  mainContainer:{
    display:'flex',
    flexDirection:'column',
    alignSelf:'center',
    justifyContent:'space-between',
    width:'100%',
    height:'80%',
  },
  cyclelengthContainer:{
    width:150,
    height:150,
    alignSelf:'center',
    textAlign:'center',
  },
  cycleText:{
    display:'flex',
    flexDirection:'column',
    color:'white',
    fontFamily:'spartan',
    fontSize:10,
    marginTop:20,
  },
  periodlengthContainer:{
    display:'flex',
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'space-between',
    width:'100%',
    height:'10%',
  },
  periodlengthLeft:{
    width:'40%',
    height:'100%',
  },
  mainButton:{
    backgroundColor:'#e5e5e5',
    width:130,
    height:35,
    borderRadius:10,
    alignSelf:'center',
    textAlign:'center',
    padding:10,
  },
  buttonText:{
    color:'black',
    fontSize:10,
    fontFamily:'spartan',
  },
  periodlengthMiddle:{
    width:'20%',
    height:'100%',
    alignSelf:'center',
  },
  periodlengthButton:{
    borderWidth:3,
    borderColor:'#727272',
    width:30,
    height:30,
    borderRadius:15,
    alignSelf:'center',
    backgroundColor:'#dda7a7'
  },
  periodlengthRight:{
    width:'40%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
  },
  periodlengthOutline:{
    borderBottomWidth:3,
    borderBottomColor:'#727272',
    width:'100%',
    height:'auto',
    textAlign:'center',
  },
  periodlengthbuttonText:{
    color:'#727272',
    fontSize:16,
    fontWeight:'600',
    fontFamily:'spartan',
  },
  periodlengthText:{
    fontSize:12,
    fontFamily:'spartan',
    color:'#727272',
    textAlign:'center',
    marginTop:5,
  },
  cycledayContainer:{
    width:200,
    height:200,
    borderRadius:100,
    backgroundColor:'white',
    alignSelf:'center',
    textAlign:'center'
  },
  cycledayText:{
    color:'#727272',
    fontSize:24,
    fontFamily:"spartan",
    display:'flex',
    flexDirection:'column',
    fontWeight:'600',
    marginTop:70,
  },
  perioddayContainer:{
    display:'flex',
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'space-between',
    width:'100%',
    height:'10%',
    marginTop:20,
  },
  perioddayLeft:{
    width:'40%',
    height:'100%',
  },
  perioddayMiddle:{
    width:'20%',
    height:'100%',
    alignSelf:'center',
  },
  perioddayButton:{
    borderWidth:3,
    borderColor:'white',
    width:30,
    height:30,
    borderRadius:15,
    alignSelf:'center',
    backgroundColor:'#dda7a7'
  },
  perioddayRight:{
    width:'40%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
  },
  perioddayOutline:{
    borderBottomWidth:3,
    borderBottomColor:'white',
    width:'100%',
    height:'auto',
    textAlign:'center',
  },
  perioddaybuttonText:{
    color:'white',
    fontSize:16,
    fontWeight:'600',
    fontFamily:'spartan',
    textAlign:'center',
  },
  periodtodayText:{
    fontSize:12,
    fontFamily:'spartan',
    color:'white',
    textAlign:'center',
    padding:5,
  },
  addbuttonContainer:{
    backgroundColor:'white',
    width:'100%',
    height:'25%',
    alignSelf:'center',
    justifyContent:'space-around',
    marginTop:20,
    borderRadius:10,
  },
  buttonContainer:{
    display:'flex',
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'space-between',
    width:'100%',
    height:'50%',
  },
  symptomContainer:{
    width:'20%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    alignSelf:'center',
    justifyContent:'space-between',
  },
  symptomButton:{
    width:45,
    height:45,
    borderRadius:22,
    borderColor:'#727272',
    borderWidth:2,
    justifyContent:'center',
    alignSelf:'center'
  },
  symptomText:{
    color:'#727272',
    fontSize:10,
    fontFamily:'spartan',
    alignSelf:'center',
  },
});
