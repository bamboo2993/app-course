
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import SearchBar from './src/components/SearchBar.js';
import Games from './src/components/GameList.js'
import FooterTabs from './src/components/FooterTabs.js'

const page3 = () => {

    const { 
        container,
    } = styles;

    return (
        <View style ={container}>
            <StatusBar barStyle ='light-content' />

            <SearchBar />

            <Games />

            <FooterTabs />
        </View>

    );
    
};


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});


export default page3;


