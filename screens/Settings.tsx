import React, {useState} from 'react';
import { Image, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import { Text} from '../components/Themed';
import StarRating from '../screens/StarRating';
import AxiosLatestStatement from '../Axios Functions/AxiosLatestStatement';
import AxiosLatestPayment from '../Axios Functions/AxiosLatestPayment';
import AxiosMileage from '../Axios Functions/AxiosMileage';

export default function UserProfileScreen({navigation}){

    return(
        <View style={{height: '100%'}}>
            <View style = {styles.bigContainer}>
                <View style={styles.smallContainer}>
                    <Image source={require('../assets/images/Ellipseavatar.png')}
                    style={{width: '18%',height:'18%', resizeMode: 'contain', alignSelf: 'center', marginTop: '-18%'}}/>
                    <Text style={{fontWeight: '400', fontSize:'18px', alignSelf: 'center', marginTop: '-8%', marginBottom: '10%', fontFamily: 'Spartan'}}>Danphuong Hoang</Text>
                    <TouchableOpacity style={styles.optionsContainer} onPress={()=>console.log("button pressed")}>
                        <Text style={styles.optionsText}>account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionsContainer} onPress={()=>console.log("button pressed")}>
                        <Text style={styles.optionsText}>feature preferences</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionsContainer} onPress={()=>console.log("button pressed")}>
                        <Text style={styles.optionsText}>notifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionsContainer} onPress={()=>console.log("button pressed")}>
                        <Text style={styles.optionsText}>help</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionsContainer} onPress={()=>console.log("button pressed")}>
                        <Text style={styles.optionsText}>display</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionsContainer} onPress={()=>console.log("button pressed")}>
                        <Text style={styles.optionsText}>about</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    headingContainer:{
        backgroundColor: '#ffffff',
        paddingTop: '2%'
        // paddingBottom: '10%',
    },
    bigContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        overflow: 'scroll',
        paddingBottom: '30px',
        paddingTop: '10%',
        height: '100%'
    },
    smallContainer:{
        borderRadius: 8,
        width: '90%',
        height: '100%',
        margin: '10px',
        padding: '5px',
        // shadowColor: "#000",
        // shadowOpacity: 0.25,
        // shadowRadius: 8,
        elevation: 5,
        backgroundColor: '#DCF0E7'
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
    optionsContainer:{
        textAlignVertical: 'center',
        marginVertical: '1%',
        marginHorizontal: '2%',
        backgroundColor: 'white',
        paddingVertical: '5%',
        borderRadius: 6
    },
    optionsText:{
        marginLeft: '4%',
        fontSize: '13px',
        fontWeight: '500',
        fontFamily: 'Spartan'
    }
});