// import React, {Component, useState} from 'react';
// import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
// import {CalendarList, Agenda } from 'react-native-calendars';

// class Calendar extends Component {

//     render() {return (
//         <View>
//             <Text>Hello World</Text>
//             <Agenda
//                 items={{
//                     '2021-01-09': [{name: 'item 1 - any js object', height: 100}]
//                 }}
//                 firstDay={1}
//             />
//         </View>
//     );}
// }
// export default Calendar;

import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';
import XDate from 'xdate';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

var xd = new XDate();

var newDay = yyyy + '-' + mm + '-' + dd;
export default class Calendar extends Component {
// export default class Calendar extends Component<{}, AgendaItemsMap> {

  constructor(props) {
    super(props);

    this.state = {
        items: {}
    };
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={newDay}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        pastScrollRange={1}
        futureScrollRange={1}
        hideKnob={false}
        renderKnob={this.renderKnob.bind(this)}
        monthFormat='MMMM'
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#43515c'},
        //    '2017-05-09': {textColor: '#43515c'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        theme={{
            calendarBackground: '#C0C0C0', 
            dayTextColor: 'white', 
            textSectionTitleColor: 'white', 
            backgroundColor: 'white',
            monthTextColor: 'white',
            textMonthFontFamily: 'Spartan-SemiBold',
            'stylesheet.agenda.main': {     // https://github.com/wix/react-native-calendars/blob/master/src/agenda/style.js
                header: {
                  overflow: 'hidden',
                  justifyContent: 'center',
                  position: 'absolute',
                  marginBottom: 8,
                  paddingTop: 1,
                  height: '100%',
                  width: '100%'
                },
                reservations: {
                  flex: 1,
                  marginTop: 104,
                  backgroundColor: 'white',
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                },
                weekday: {
                  width: 32,
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 10,
                  fontFamily: 'Spartan-Regular',
                  textTransform: 'uppercase',
                },
            },
            'stylesheet.agenda.list': {     // https://github.com/wix/react-native-calendars/blob/master/src/agenda/style.js
                dayNum: {
                  fontSize: 28,
                  fontWeight: '200',
                  fontFamily: 'Spartan-SemiBold',
                  color: '#7a92a5',
                },
                dayText: {
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Spartan-Regular',
                  color: '#7a92a5',
                  backgroundColor: 'rgba(0,0,0,0)',
                  marginTop: -5
                },
            },
        }}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        // hideExtraDays={false}
        style={{backgroundColor: '#C0C0C0'}}
      />
    );
  }

  // https://github.com/wix/react-native-calendars/blob/master/src/agenda/index.js
  renderKnob() {
    return(
        <Text style={{
            fontSize: 20, 
            alignSelf: 'center', 
            fontFamily: 'Spartan-SemiBold',
            letterSpacing: 2,
            color: 'white',
            textTransform: 'uppercase',
        }}>{xd.toString('MMMM yyyy')}</Text>
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems
      });
    }, 1000);
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        style={[styles.item, {height: item.height}]}
        onPress={() => Alert.alert(item.name)}
      >
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF8DD',
    flex: 1,
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  itemText:{
    color:'black',
    fontFamily: 'Spartan-SemiBold'
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  },
  knobContainer: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    height: 24,
    bottom: 0,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30
},
});