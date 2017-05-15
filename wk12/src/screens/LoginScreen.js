import React, { Component } from 'react';
import { View, ActivityIndicator, AsyncStorage, Image, Text, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { Facebook } from 'expo';

import Confirm from '../components/Confirm';

// Make a component
class LoginScreen extends Component {
  state = {
    email: null,
    password: null,
    error: ' ',
    loading: false,
    showModal: false,
    token: null,
    status: 'Not Login...',
  };

  facebookLogin = async () => {
    console.log('Testing token....');
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      console.log('Already having a token...');
      this.setState({ token });

      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      this.setState({ status: `Hello ${(await response.json()).name}` });
      console.log(response);

    } else {
      console.log('DO NOT having a token...');
      this.doFacebookLogin();
    }
  };

  doFacebookLogin = async () => {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync(
      '113143229250709',
      {
        permissions: ['public_profile'],
        behavior: 'web'
      });

    if (type === 'cancel') {
      console.log('Login Fail!!');
      return;
    }

    await AsyncStorage.setItem('fb_token', token);
    this.setState({ token });
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`);
    this.setState({ status: `Hello ${(await response.json()).name}` });
    console.log(response);
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Facebook user.
    try {
      await firebase.auth().signInWithCredential(credential);
      const { currentUser } = await firebase.auth();
      console.log(`currentUser = ${currentUser.uid}`);
      this.props.navigation.navigate('UserStack');
    } catch (err) {

    }
  };

  onSignIn = async () => {
    const { email, password } = this.state;
    this.setState({ error: ' ', loading: true });
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.props.navigation.navigate('UserStack');
    } catch (err) {
     this.setState({
       
        password: '',
        error: err.message,
        loading: false,
        showModal: false
      });
    }
  }

  onCreateUser = async () => {
    const { email, password } = this.state;
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      this.setState({ showModal: false });
      this.props.navigation.navigate('UserStack');
    } catch (err) {
      this.setState({
        email: '',
        password: '',
        error: err.message,
        loading: false,
        showModal: false
      });
    }
  }

  onCLoseModal = () => {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
      showModal: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size='large' style={{ marginTop: 30 }} />;
    }

    return (
      <Button
        title='Sign in'
        backgroundColor='#f1cc5e'
        onPress={this.onSignIn}
      />
    );
  }
  async componentDidMount() {
    await AsyncStorage.removeItem('fb_token');
  }
    
  render() {
    return (
      <View >
        <View style={styles.imageStyle} >
          <Image style={ {height: 200, width: 250 ,marginTop: 42,}} source={require('../assets/logo.png')} />
        </View>
        
        <View style={styles.formStyle}>
          <View style={styles.signinStyle}> 
              <FormLabel>Email</FormLabel>
              <FormInput
                placeholder='user@email.com'
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='email-address'
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
              <FormLabel>Password</FormLabel>
              <FormInput
                secureTextEntry
                autoCorrect={false}
                autoCapitalize='none'
                placeholder='password'
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
              <FormValidationMessage labelStyle= {{fontSize: 9}}>{this.state.error}</FormValidationMessage>
              

          </View>
          
          <View  style={{padding: 20,}}>
             {this.renderButton()}

          </View>
          
         
        </View>

        <View style={styles.formStyle} style={{paddingHorizontal:20}}>
          <Button
            title='Sign in with Facebook'
            backgroundColor='#39579A'
            onPress={this.facebookLogin}
          />
        </View>

        <TouchableOpacity 
            onPress ={() => this.props.navigation.navigate('SignupScreen')}
            style ={{ alignItems: 'center', padding: 20}} >

            <Text style={styles.textStyle}> New users?</Text>
        </TouchableOpacity>

        
      </View>
    );
  }
}

const styles = {
  formStyle: {
  justifyContent: 'center',
  },

  signinStyle:{

    height: 200,
    //width: Dimensions.get('window').width/4*3,

  },

  imageStyle:{
    height: 250,
    //backgroundColor: '#97CAE5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyle:{
    color:'#45aab3',
    fontSize: 12,
  }
};

export default LoginScreen;