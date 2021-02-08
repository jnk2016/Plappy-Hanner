import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import Pie from 'react-native-pie'

export default () => {
  return (
  <Pie style={{alignSelf: 'center', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}
    radius={90}
    innerRadius={60}
    sections={[
      {
        percentage: 10,
        color: 'red',
      },
      {
        percentage: 20,
        color: 'blue',
      },
      {
        percentage: 30,
        color: 'green',
      },
      {
        percentage: 40,
        color: 'yellow',
      },
    ]}
    strokeCap={'butt'}
    // backgroundColor={'white'}
  />
  );
}