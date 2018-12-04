import React, { Component } from "react";

import styles from "./style";
import {Keyboard, Text, View, TextInput, Image, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';

import ProductsScreen from './products'

export default class ForgottenScreen extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
          <View style={styles.containerProductDetails}>
           <View>
                <Image
                  style={styles.productImageProductDetails}
                  label="Products Catalog Smile"
                  source={require('../../assets/icons/IndustrySolutions__Software_Tech_blue.png')}
                />
           </View>
           <View>
            <Text style={styles.productLabelText}>Product 1</Text>
           </View>
          </View>
          <View>
            <Text style={styles.productDescriptionText}>
            &nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, ea vis natum debet nobis. Est at populo labore principes, quo no choro legere.
            Sed novum mazim dolor ad, te ullum sonet maluisset mel. Pri eu sanctus utroque euripidis, id novum denique
            sit, congue cetero utamur qui eu. Cum agam eros maiorum id. Ut modus reque malis est, veri graeci ea usu.
            </Text>
          </View>
          <View style={styles.containerProductDetails}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Button
                  buttonStyle={styles.allProductsButton}
                  textStyle={{fontFamily: "cylburn", fontSize: 36 }}
                  onPress={() =>
                    navigate('ProductsScreen', { name: 'products' })
                  }
                  title="All Products"
                />
             </TouchableWithoutFeedback>
          </View>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

}
