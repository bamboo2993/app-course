import React, { Component } from 'react';
import { View, Picker, ActivityIndicator, StatusBar, } from 'react-native';
import * as firebase from 'firebase';

import { FormLabel, FormInput, Button, CheckBox } from 'react-native-elements';

// Make a component
class SettingScreen extends Component {
  state = {
    username: null,
    email: null,

    birthday: null,
    gender: null,

    phone: null,
    city: null,
    saving: false
  };

  async componentWillMount() {
    const { currentUser } = firebase.auth();
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    try {
      let snapshot = await dbUserid.once('value');
      let username = snapshot.val().username;
      let email = snapshot.val().email;

      let gender = snapshot.val().gender;
      let birthday = snapshot.val().birthday;

      let city = snapshot.val().city;
      let phone = snapshot.val().phone;

      this.setState({ username, email,birthday, city, phone, gender });
    } catch (err) { }
  }

  onSaveInfo = async () => {
    this.setState({ saving: true });
    const { currentUser } = firebase.auth();
    const { username, email,birthday, city, phone, gender} = this.state;
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    await dbUserid.set({ username, email,birthday, city, phone, gender });
    this.setState({ saving: false });
  }

  renderButton() {
    if (this.state.saving) {
      return <ActivityIndicator size='large' />;
    }

    return (
      <Button
        style={{ marginTop: 10 }}
        title='Save Setting'
        backgroundColor='#f1cc5e'
        onPress={this.onSaveInfo}
      />
    );
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.formStyle}>

        <StatusBar barStyle ='light-content' />
        <FormLabel>Phone</FormLabel>
        <FormInput
          autoCorrect={false}
          placeholder='555-555-5555'
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })}
        />

        <FormLabel>City</FormLabel>
        <FormInput
          autoCorrect={false}
          placeholder='Taipei city'
          value={this.state.city}
          onChangeText={city => this.setState({ city })}
        />

        {this.renderButton()}
      </View>
    );
  }
}

const styles = {
  formStyle: {
    marginTop: 50
  }
};

export default SettingScreen;
