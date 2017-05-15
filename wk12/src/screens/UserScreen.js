import React, { Component } from 'react';
import { View, ScrollView,  StatusBar, } from 'react-native';
import * as firebase from 'firebase';
import { Tile, List, ListItem, Button } from 'react-native-elements';

// Make a component
class UserScreen extends Component {
  state = {
    email: null,
    username: null,
    birthday: null,
    gender: null,

    city: null,
    phone: null,

  };

  componentDidMount() {
    this.setUserInfo();
  }

  setUserInfo = async () => {
    const { currentUser } = firebase.auth();
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    try {
      let snapshot = await dbUserid.once('value');
      let username = snapshot.val().username;
      let email = snapshot.val().email;
      let city = snapshot.val().city;
      let phone = snapshot.val().phone;
      let gender = snapshot.val().gender;
      let birthday = snapshot.val().birthday;

      this.setState({ username, email,birthday, city, phone, gender });
    } catch (err) { }

  }

  onSignOut = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate('LoginScreen');
  }

  render() {
    const { email, birthday, phone, username, city, gender } = this.state;
    return (
      <ScrollView>
        <StatusBar barStyle ='light-content' />

        <List>
          <ListItem
            title="Username"
            rightTitle={username}
            hideChevron
          />

           <ListItem
            title="Email"
            rightTitle={email}
            hideChevron
          />




        </List>


        <List>
          <ListItem
            title="Gender"
            rightTitle={gender}
            hideChevron
          />
          <ListItem
            title="Birthday"
            rightTitle={birthday}
            hideChevron
          />          
        </List>

        <List>
         <ListItem
            title="Phone"
            rightTitle={phone}
            hideChevron
          />
          <ListItem
            title="City"
            rightTitle={city}
            hideChevron
          />
        </List>
        <Button
          style={{ flex: 1, marginTop: 10 }}
          title='Sign out'
          backgroundColor='#f1cc5e'
          onPress={this.onSignOut}
        />
      </ScrollView>
    );
  }
}

export default UserScreen;