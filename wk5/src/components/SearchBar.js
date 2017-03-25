
import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
} from 'react-native';


class SearchBar extends Component{

    constructor( props ) {
        super( props );
        this.state = { searchText: '' };

    }


    render() {
        return (
            <View style ={styles.viewStyle}>

                <View style ={styles.searchAreaStyle}>
                    <Image style={styles.searchIconStyle}  source ={ require('../Asset/icon_search.png')} />

                    <TextInput
                        style ={ styles.textStyle} 
                        onChangeText ={ (searchText) => this.setState(searchText)} 
                        placeholder= {'Search'} 
                        placeholderTextColor = {'rgb(185, 163, 227)'}
                    />

                    
                </View>
                
                
                <Image style={styles.imgStyle} source ={ require('../Asset/btn_cast.png')} />
            </View>

        );
    }

    
    
    
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


    searchAreaStyle: {
        height: 30,
        width:320,
        backgroundColor: 'rgb(49, 31, 83)',

        borderRadius: 5,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    

    },
    searchIconStyle: {
        height: 18,
        width: 18,

    },


    textStyle : {
        width: 280,
        
        fontSize: 15,
        color: 'rgb(185, 163, 227)',
    },

    imgStyle: {
       
        height: 33,
        width: 33,




    }


});


export default SearchBar;

