
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
        <ScrollView style ={viewStyle}>
            <View style= {boxStyle}>
                <Image style={imgStyle} source ={ require('../Asset/img_firebat.png')} />

            </View>

            <View style= {boxStyle}>
                <Image style={imgStyle} source ={ require('../Asset/img_forsen.png')} />

            </View>

            <View style= {boxStyle}>
                <Image style={[imgStyle, {height: 144}]} source ={ require('../Asset/img_kolento.png')} />
            </View>
            

            
        </ScrollView>

    );
    
};


const styles = StyleSheet.create({
    viewStyle: {
        flexWrap: 'wrap',

    },

    boxStyle: {
        alignItems: 'center',

    },


    imgStyle: {
        height: 200,
        width: 365,
        marginTop: 5,
        
    },

});


export default CardList;

