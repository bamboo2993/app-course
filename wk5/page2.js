
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import Header from './src/components/Header.js';
import SegmentSelector from './src/components/SegmentSelector.js'
import Cards from './src/components/CardList.js'
import FooterTabs from './src/components/FooterTabs.js'

const page2 = () => {

    const { 
        container,
    } = styles;

    return (
        <View style ={container}>
            <StatusBar barStyle ='light-content' />

            <Header headerText= {'Hearthstone'} />
            <SegmentSelector selectorText1= {'LIVE'} selectorText2= {'RECENT'} />
            <Cards />
            <FooterTabs />
        </View>

    );
    
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
     
    },

});


export default page2;


