import React, { Component } from "react";

import styles from "./Login.Styles";
import {Keyboard, Text, View, TextInput, Image, TouchableWithoutFeedback, TouchableHighlight, ActivityIndicator, Modal, Alert} from 'react-native';
import { Button } from 'react-native-elements';
import { Font } from 'expo';

export default class LoginScreen extends Component {
 state = {
    currentIndex: 0,
    fontsLoaded: false,
    username: '',
    password: '',
    isLoggingIn: false,
    message: '',
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

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
      } catch(error) {
          this.setState({ message: error.message });
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

                <View style={styles.containerView}>
                    <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal will be closed.');
                    }}>
                        <View style={styles.modalContainer}>
                            <Text style={fontSize=30}>Welcome, {this.state.username}!</Text>
                            <Text style={fontSize=30}>There is network issue in the moment!</Text> 
                            <Text style={fontSize=30}>Please try again later.</Text>
                        </View>                               
                        <View style={styles.modalButtonContainer}>
                            <TouchableHighlight>
                                <Button
                                    disabled={this.state.isLoggingIn||!this.state.username||!this.state.password}
                                    buttonStyle={styles.modalButtonText}
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}
                                    title="Close"
                                />
                            </TouchableHighlight>
                        </View>
                    </Modal>

                    <TouchableHighlight
                        onPress={() => {
                            this.setModalVisible(true);
                        }}>
                        <Text
                            style={{fontSize: 14, color: 'red', padding: 5}}>
                            {this.state.message}. Press to see reason.
                        </Text>
                    </TouchableHighlight>
                </View>                                         
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


