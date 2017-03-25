
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

  
const FooterTabs = (props) => {

    const { 
        textStyle,
        viewStyle,
        boxStyle,
        iconStyle,
        selectedStyle,
        lineStyle,

    } = styles;

    return (

        <View style ={viewStyle}>
            <View style ={lineStyle}></View>

            <View style ={{flexDirection: 'row'}}>
                <View style ={boxStyle}>
                    <Image style={iconStyle} source ={ require('../Asset/btn_games_selected.png')} />
                    <Text style ={[textStyle, selectedStyle]}> Games </Text>
                
                </View>
                <View style ={boxStyle}>
                    <Image style={iconStyle} source ={ require('../Asset/btn_channels.png')} />
                    <Text style ={textStyle}> Channels </Text>

                </View>

                <View style ={boxStyle}>
                    <Image style={iconStyle} source ={ require('../Asset/btn_following.png')} />
                    <Text style ={textStyle}> Following </Text>
                </View>

                <View style ={boxStyle}>
                    <Image style={iconStyle} source ={ require('../Asset/btn_me.png')} />
                    <Text style ={textStyle}> Me </Text>
                </View>
            
            
            </View>
            
            
            
            
        </View>

    );
    
};


const styles = StyleSheet.create({
    viewStyle: {
        height: 49,

    },

    lineStyle: {
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        height: 0.5,


    },


    boxStyle: {
        alignItems: 'center',
        flex: 1,

    },
   



    iconStyle: {
        height: 49,
        width: 49,
    },

    textStyle : {
        fontSize: 10,
        color: 'rgb(187, 187, 187)',

        position: 'absolute',
        bottom: 1,
        
    },

    selectedStyle: {

        color: 'rgb(100, 65, 165)',
    }
});


export default FooterTabs;

