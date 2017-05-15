import React, { Component } from 'react';
import * as firebase from 'firebase';
import { LoginStack } from './Router';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyBV_gZfKbI-X1qRyVrF7-nMn-1-QKK5thE",
    authDomain: "fireauthapp-c118d.firebaseapp.com",
    databaseURL: "https://fireauthapp-c118d.firebaseio.com",
    projectId: "fireauthapp-c118d",
    storageBucket: "fireauthapp-c118d.appspot.com",
    messagingSenderId: "974479588970"
    });
  }

  render() {
    return (
      <LoginStack />
    );
  }
}


export default App;
