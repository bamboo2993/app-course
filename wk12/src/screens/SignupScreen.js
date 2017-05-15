import React, { Component } from 'react';
import { View, ActivityIndicator, AsyncStorage, Image, Text, Picker, } from 'react-native';
import * as firebase from 'firebase';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { Facebook } from 'expo';

import Confirm from '../components/Confirm';

// Make a component
class SignupScreen extends Component {
  state = {
    email: null,
    username: null,
    password: null,
    passwordComfirm: null,
    birthday: null,
    gender: 'male',

    error: ' ',
    loading: false,
    showModal: false,
    token: null,
    status: 'Not Login...',

    saving: false
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


resetPassword = () => {

     this.setState({
      password: '',
      passwordComfirm:'',
      error: 'Password incorrect',
      loading: false,
      showModal: false
    });


  }


onCheckSignup = async () => {
    const { email,username, password,passwordComfirm, birthday, gender  } = this.state;
    
    if(password != null && 
    email!= null &&
    username != null &&
    passwordComfirm!=  null && 
    birthday!= null &&
    password != '' && 
    email!= '' &&
    username != '' &&
    passwordComfirm!=  '' && 
    birthday!= '')  this.setState({ showModal: true });

    else  {
         this.setState({
            password: '',
            passwordComfirm:'',
            error: 'data incomplete',
            loading: false,
            showModal: false
    });
    }
}




  
  onCreateUser = async () => {
    const { email,username, password,passwordComfirm, birthday, gender  } = this.state;

    let dbAllUserid = firebase.database().ref(`/Allusers` );
      console.log('creating');

      console.log('username '+`${username}`);


     // attempt to get the child in the collection by uid.
     dbAllUserid.on('value', async (snapshot) =>{
        console.log('checking user');
        var z =snapshot;
        console.log(z);
        var y = snapshot.hasChild(`${username}`);
        console.log(y);
        // if data exists
        if (snapshot.hasChild(`${username}`)) {
            console.log('user exist');
            this.setState({
                password: '',
                passwordComfirm:'',
                error: 'username already exist',
                loading: false,
                showModal: false
            });
        } else {
          console.log('user does not exist');
            // data does not exist
            if(password!= passwordComfirm) {{this.resetPassword()}}
            else if(password== passwordComfirm) {
                try {
                    console.log('add');
                    await firebase.auth().createUserWithEmailAndPassword(email, password);
                    this.onSaveInfo();
                    this.setState({ showModal: false });
                    this.props.navigation.navigate('UserStack');
                } catch (err) {
                    this.setState({
                        password: '',
                        passwordComfirm:'',
                        error: err.message,
                        loading: false,
                        showModal: false
                    });
                }
            }


        }
    });



  }


  onCLoseModal = () => {
    this.setState({
      password: '',
      passwordComfirm:'',
      error: '',
      loading: false,
      showModal: false
    });
  }


 onSaveInfo = async () => {
    this.setState({ saving: true });
    const { currentUser } = firebase.auth();
    const { email, username, birthday, gender } = this.state;
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    let dbAllUserid = firebase.database().ref(`/Allusers/${username}`);
    let uid =` ${currentUser.uid}`;
    await dbAllUserid.set({ uid});
    await dbUserid.set({ email, username, birthday, gender });
    this.setState({ saving: false });
    console.log('savesave');
}



  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size='large' style={{ marginTop: 30 }} />;
    }

    return (
      <Button
        title='Sign up'
        backgroundColor='#f1cc5e'
        onPress={this.onCheckSignup}
      />
    );
  }



  async componentDidMount() {
    await AsyncStorage.removeItem('fb_token');
  }
    
  render() {
    return (
      <View>
        <View style={styles.imageStyle} >
          <Image style={ {height: 130, width: 120 }} source={require('../assets/logo.png')} />
        </View>
            
        <View style={styles.infoStyle}>
            <FormInput
                placeholder='請輸入電子郵件'
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='email-address'
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
            />
            <FormInput
                placeholder='請輸入用戶名'
                keyboardType='email-address'
                autoCorrect={false}
                autoCapitalize='none'
                value={this.state.username}
                onChangeText={username => this.setState({ username })}
            />
            <FormInput
                secureTextEntry
                autoCorrect={false}
                autoCapitalize='none'
                placeholder='請輸入密碼'
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
            />
            <FormInput
                secureTextEntry
                autoCorrect={false}
                autoCapitalize='none'
                placeholder='請確認密碼'
                value={this.state.passwordComfirm}
                onChangeText={ passwordComfirm => this.setState({ passwordComfirm })}
            />


            <FormInput
                autoCorrect={false}
                autoCapitalize='none'
                placeholder='請輸入生日 (YYYY/MM/DD)'
                value={this.state.birthday}
                onChangeText={birthday => this.setState({ birthday })}
            />
            
            <FormLabel>Gender</FormLabel>

            <View style={styles.pickerStyle}>
                    <Picker 
                        selectedValue={this.state.gender}
                        onValueChange={gender => this.setState({ gender })}
                    >
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                    </Picker>
            </View>
            <FormValidationMessage labelStyle= {{fontSize: 9}}>{this.state.error}</FormValidationMessage>

        </View>
        


        <View style={{padding: 20,}}>
            {this.renderButton()}

        </View>
          

        <View style={styles.formStyle} style={{paddingHorizontal:20}}>
            <Button
                title='Sign in with Facebook'
                backgroundColor='#39579A'
                onPress={this.facebookLogin}
            />
        </View>

        

        <Confirm
          title='Are you sure to create a new user?'
          visible={this.state.showModal}
          onAccept={this.onCreateUser}
          onDecline={this.onCLoseModal}
        />
      </View>
    );
  }
}

const styles = {
  formStyle: {
  justifyContent: 'center',

  },

  infoStyle:{

    height: 380,
    //width: Dimensions.get('window').width/4*3,

  },

  imageStyle:{
    marginTop:24,
    height: 80,
    //backgroundColor: '#97CAE5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerStyle:{
    justifyContent:'center',
    height:100,
   // backgroundColor: '#97CAE5',
  },
  textStyle:{
    color:'#45aab3',
    fontSize: 12,
  }
};

export default SignupScreen;