import React, { Component } from "react";

import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';

export default class ForgottenScreen extends Component {
  static navigationOptions = {
    title: 'Reset pasword',
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.userLabelText}>Email: </Text>
            <TextInput placeholder="me@abv.bg" placeholderColor="#76cdd8" style={styles.loginFormTextInput} />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Button
                  buttonStyle={styles.loginButton}
                  onPress={() => this.onLoginPress()}
                  title="Reset password"
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

  onLoginPress() {
    Alert.alert("Email was sent for resetting your password!");
  }
}
