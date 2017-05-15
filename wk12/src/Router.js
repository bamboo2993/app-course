import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import UserScreen from './screens/UserScreen';
import SettingScreen from './screens/SettingScreen';

export const UserStack = StackNavigator({
    UserScreen: {
        screen: UserScreen,
        navigationOptions: {
            header: ({ navigate }) => ({
                style:{backgroundColor: '#f1cc5e'} ,
                titleStyle: {color: 'white',},
                title: 'USER-INFO',
                right: (
                    <Icon
                        name='settings'
                        iconStyle={{ marginRight: 10, color: 'white',}}
                        onPress={() => navigate('SettingScreen')}
                    />
                ),
                left: null,
            })
        }
    },
    SettingScreen: {
        screen: SettingScreen,
        navigationOptions: {
            header: ({ navigate }) => ({
                style:{backgroundColor: '#f1cc5e'} ,
                titleStyle: {color: 'white',},
                title: 'SETTING',
                left: (
                    <Icon
                        name='navigate-before'
                        iconStyle={{ marginLeft: 10 }}
                        onPress={() => navigate('UserScreen')}
                    />
                ),
            })
        }
    }
});




export const LoginStack = StackNavigator({
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            gesturesEnabled: false,
        }
        
    },
     SignupScreen: {
        screen: SignupScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: ({ navigate }) => ({
                title: 'Sign up',
                left: (
                    <Icon
                        name='navigate-before'
                        iconStyle={{ marginLeft: 10 }}
                        onPress={() => navigate('LoginScreen')}
                    />
                ),
            })
        }

    },
    UserStack: {
        screen: UserStack,
         navigationOptions: {
            gesturesEnabled: false,
        }

    },
},
    {
        headerMode: 'none',
        
    }

    
);
