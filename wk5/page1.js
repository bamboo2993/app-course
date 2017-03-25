
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';




const page1 = () => {

    const { 
        container,
        logo
    } = styles;

    return (
        <View style ={container}>
            <StatusBar hidden={true} />
            <Image style ={logo} source ={ require('./src/Asset/logo_twitch.png')} />
        </View>

    );
    
};


const styles = StyleSheet.create({
    container: {

        backgroundColor: 'rgb(100, 65, 165)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
     
     
    },
    logo: {
        height: 100,
        width: 210,

    },


});


export default page1;


