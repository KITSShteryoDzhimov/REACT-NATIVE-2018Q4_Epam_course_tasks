import React, { Component } from "react";

import styles from "./style";
import {Keyboard, Text, View, TextInput, Image, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, SectionList} from 'react-native';
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
        <View>
          <View>
            <SectionList
              sections={[
                {title: 'Corporate', data: [
                [<Image
                  style={styles.productImageProductsScreen}
                  label="Industry product"
                  source={require('../../assets/icons/IndustrySolutions__Software_Tech_blue.png')}
                />,
                'Product 1'],
                [<Image
                  style={styles.productImageProductsScreen}
                  label="Retail product"
                  source={require('../../assets/icons/IndustrySolutions__Retail_blue.png')}
                />,
                'Product 2'],
                [<Image
                  style={styles.productImageProductsScreen}
                  label="Energy product"
                  source={require('../../assets/icons/IndustrySolutions__Energy_blue.png')}
                />,
                'Product 3'],
                [<Image
                  style={styles.productImageProductsScreen}
                  label="Search product"
                  source={require('../../assets/icons/EPAM_values_customer_focus_blue_Partner.png')}
                />,
                'Product 4']
                ]},
                {title: 'Entertainment', data: [
                [<Image
                  style={styles.productImageProductsScreen}
                  label="Products Catalog Smile"
                  source={require('../../assets/icons/DigitalEngagement_Mobility_blue.png')}
                />,
                'Product 5'],
                [<Image
                  style={styles.productImageProductsScreen}
                  label="Products Catalog Smile"
                  source={require('../../assets/icons/DigitalEngagement_Product_Design_blue.png')}
                />,
                'Product 6'],
                [<Image
                  style={styles.productImageProductsScreen}
                  label="Products Catalog Smile"
                  source={require('../../assets/icons/DigitalEngagement_Commerce_blue.png')}
                />,
                'Product 7'],
                [<Image
                  style={styles.productImageProductsScreen}
                  label="Products Catalog Smile"
                  source={require('../../assets/icons/Social_Blue__Instagram.png')}
                />,
                'Product 8']]},
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
}

