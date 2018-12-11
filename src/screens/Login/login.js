import React, { Component } from "react";

import styles from "./Login.Styles";
import {Keyboard, Text, View, TextInput, Image, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ActivityIndicator} from 'react-native';
import { Button } from 'react-native-elements';
import { Font } from 'expo';

export default class LoginScreen extends Component {
 state = {
    currentIndex: 0,
    fontsLoaded: false,
    username: '',
    password: '',
    isLoggingIn: false,
    message: ''
  };
  async componentWillMount()   {
        await Font.loadAsync({
          'cylburn': require('../../assets/fonts/Cylburn.ttf'),
       });

      this.setState({ fontsLoaded: true });
  };

  _userLogin = async (username,password) => {

      this.setState({ isLoggingIn: true, message: '' });

      var params = {
          username: this.state.username,
          password: this.state.password,
          grant_type: 'password'
      };

      try {
          const result = await fetch("http://ecsc00a02fb3.epam.com/index.php/rest/V1/integration/customer/token", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({username, password})	//formBody
                });
          if(result.status == 200) {
             this.setState({ isLoggingIn: false })
             return true;
           }
           const error = await result.json();
           throw new Error(error.message);
      } catch(err) {
          this.setState({ message: err.message });
          this.setState({ isLoggingIn: false })
      }
  }

  clearUsername = () => {
      this._username.setNativeProps({ text: '' });
      this.setState({ message: '' });
  }

  clearPassword = () => {
      this._password.setNativeProps({ text: '' });
      this.setState({ message: '' });
  }
  render() {
    const { navigate } = this.props.navigation;
    return this.state.fontsLoaded ?
    (
       <View style={styles.containerView}>
         <View style={ styles.header } />
         <Image
           style={styles.welcomeImage}
           label="Products Catalog Smile"
           source={{uri: 'https://i.pinimg.com/originals/af/d8/cc/afd8cc206a772cde7e79eaaaa4596948.png'}}
         />
         <View style={styles.appNameContainer}>
             <Text style={styles.appWelcomeText}>Friday's shop</Text>
         </View>
          <View style={styles.loginContainer}>
            <TextInput
					ref={component => this._username = component}
					placeholder='Username'
					onChangeText={(username) => this.setState({username})}
					autoFocus={true}
					onFocus={this.clearUsername}
                    placeholderColor="#76cdd8"
                    style={styles.loginFormTextInput} />
            <TextInput
                    ref={component => this._password = component}
					placeholder='Password'
					onChangeText={(password) => this.setState({password})}
					onFocus={this.clearPassword}
					onSubmitEditing={this._userLogin}
                    placeholderColor="#76cdd8"
                    style={styles.loginFormTextInput}
                    secureTextEntry={true}/>
				{!!this.state.message && (
					<Text
						style={{fontSize: 14, color: 'red', padding: 5}}>
						{this.state.message}
					</Text>
				)}
				{this.state.isLoggingIn && <ActivityIndicator />}
             <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                 <Button
				   disabled={this.state.isLoggingIn||!this.state.username||!this.state.password}
                   buttonStyle={styles.loginButton}
                   textStyle={{fontFamily: "cylburn", fontSize: 36 }}
                   onPress={() => {
                        this._userLogin(this.state.username,this.state.password).then(result => {
                            if(result) {
                                navigate('ProductsScreen', { name: 'products' });
                            }
                        })
                   }}
                   title="Login"
                 />
              </TouchableWithoutFeedback>
          </View>
          <View style={ styles.footer } />
       </View>
    ) : null;
  }
}


