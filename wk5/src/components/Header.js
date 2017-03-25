
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

  
const Header = (props) => {

    const { 
        textStyle,
        viewStyle,
        buttonStyle,

    } = styles;

    return (
        <View style ={viewStyle}>
            
            <Image style={buttonStyle} source ={ require('../Asset/btn_back.png')} />
            <Text style ={textStyle}> {props.headerText} </Text>
            <Image style={buttonStyle} source ={ require('../Asset/btn_like.png')} />
        </View>

    );
    
};


const styles = StyleSheet.create({
    viewStyle: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(100, 65, 165)',
        height: 64,
        paddingTop: 25,
        paddingLeft: 8.5,
        paddingRight: 8.5,

    },

    textStyle : {
        paddingTop: 5.5,

        fontSize: 18,
        color: 'white',

        
    },

    buttonStyle: {
       
        height: 33,
        width: 33,




    }


});


export default Header;

