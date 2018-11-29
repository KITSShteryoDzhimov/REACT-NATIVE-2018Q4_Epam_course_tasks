import React, { Component } from "react";

import styles from "./style";
import {Keyboard, Text, View, TextInput, Image, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';
import { Font } from 'expo';

import ForgottenScreen from './forgotten'
import EulaScreen from './products'


export default class LoginScreen extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Friday's shop</Text>
            <TextInput placeholder="me@abv.bg" placeholderColor="#76cdd8" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#76cdd8" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Button
                  buttonStyle={styles.loginButton}
                  onPress={() =>
                    navigate('ProductsScreen', { name: 'products' })
                  }
                  title="Login"
                />
             </TouchableWithoutFeedback>
             <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Button
                  buttonStyle={styles.forgotButton}
                  title="Forgotten Password"
                  onPress={() =>
                    navigate('ForgottenScreen', { name: 'Forget me not!' })
                  }
                  color="#3897f1"
                />
             </TouchableWithoutFeedback>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

}

