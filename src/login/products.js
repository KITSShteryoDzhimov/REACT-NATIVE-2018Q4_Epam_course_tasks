import React, { Component } from "react";

import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, SectionList} from 'react-native';
import { Button } from 'react-native-elements';

import ProductsScreen from './products'

export default class ForgottenScreen extends Component {
  static navigationOptions = {
    title: 'Products',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <SectionList
              sections={[
                {title: 'Corporate', data: ['Product 1','Product 2', 'Product 3','Product 4']},
                {title: 'Entertainment', data: ['Product 5','Product 6', 'Product 7','Product 8']},
              ]}
              renderItem={({item}) =>
                  <Text style={styles.item}
                  onPress={() =>
                    navigate('ProductDetailsScreen', { name: 'product details' })
                  }>{item}</Text>}
              renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
              keyExtractor={(item, index) => index}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

}
