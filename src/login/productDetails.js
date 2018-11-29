import React, { Component } from "react";

import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';

import ProductsScreen from './products'

export default class ForgottenScreen extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.productLabelText}>Product 1 </Text>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Button
                  buttonStyle={styles.loginButton}
                  onPress={() =>
                    navigate('ProductsScreen', { name: 'products' })
                  }
                  title="All Products"
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
