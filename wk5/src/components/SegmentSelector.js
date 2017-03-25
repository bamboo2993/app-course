
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

  
const SegmentSelector = (props) => {

    const { 
        textStyle,
        viewStyle,
        boxStyle,
        barStyle,
        selectedStyle

    } = styles;

    return (
        <View style ={viewStyle}>
            <View style ={boxStyle}>
                <Text style ={[textStyle, selectedStyle]}> {props.selectorText1} </Text>
                <View style ={barStyle}></View>
            </View>
            <View style ={boxStyle}>
                <Text style ={textStyle}> {props.selectorText2} </Text>
            </View>
            
            
            
        </View>

    );
    
};


const styles = StyleSheet.create({
    viewStyle: {

        flexDirection: 'row',
        height: 44,

    },

    boxStyle: {
        flex: 1,
        justifyContent: 'center',

    },


    textStyle : {
        
        textAlign: 'center',
        fontSize: 13,
        color: 'rgb(187, 187, 187)',

        
    },

    selectedStyle: {
        color: 'rgb(100, 65, 165)',

    },


    barStyle: {
        backgroundColor: 'rgb(100, 65, 165)',
        height: 5,
        top: 10,
    }

});


export default SegmentSelector;

