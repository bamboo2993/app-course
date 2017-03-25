
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
} from 'react-native';

  
const CardList = (props) => {

    const { 
        viewStyle,
        imgStyle,
        boxStyle,
    } = styles;

    return (
        <ScrollView contentContainerStyle ={viewStyle}>

            <View style={boxStyle}>
                <Image style={imgStyle} source ={ require('../Asset/img_leagueoflegends.png')} />

                <Image style={imgStyle} source ={ require('../Asset/img_counterstrike.png')} />

                <Image style={imgStyle} source ={ require('../Asset/img_hearthstone.png')} /> 

                <Image style={imgStyle} source ={ require('../Asset/img_dota2.png')} />

                <Image style={imgStyle} source ={ require('../Asset/img_h1z1.png')} />

                <Image style={imgStyle} source ={ require('../Asset/img_destiny.png')} />           
            
            
            
            </View>


            

            
        </ScrollView>

    );
    
};


const styles = StyleSheet.create({
    viewStyle: {
        
        flexWrap: 'wrap',
        paddingTop: 5,
        paddingHorizontal: 5,




    },

    boxStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',


    },


    imgStyle: {
        height: 180,
        width: 180,

        marginBottom: 5,

        
        
    },

});


export default CardList;

