import React, { Component } from "react";

import styles from "./Products.Styles";
import {Keyboard, Text, View, TextInput, Image, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, SectionList} from 'react-native';
import { Button } from 'react-native-elements';

export default class Products extends Component {
  static navigationOptions = ({navigation,screenProps}) =>({
    title: 'Products',
  });
  render() {
    const { navigate } = this.props.navigation;
    const loggedUser = this.props.navigation.state.params.user;
    return (
      <KeyboardAvoidingView style={styles.listView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View>
            <Text>You've been logged as user: {JSON.stringify(loggedUser)}</Text>
            <Text>Please select your product:</Text>
            <SectionList
              sections={[
                {title: 'Corporate', data: [
                [<Image
                  style={styles.productImageProductsScreen}
                  label="Industry product"
                  source={require('../../assets/images/icons8-product-80.png')}
                />,
                'Product 1'],
                [<Image
                  style={styles.productImageProductsScreen}
                  label="Retail product"
                  source={require('../../assets/images/icons8-product-80.png')}
                />,
                'Product 2'],
                [<Image
                  style={styles.productImageProductsScreen}
                  label="Energy product"
                  source={require('../../assets/images/icons8-product-80.png')}
                />,
                'Product 3'],
                [<Image
                  style={styles.productImageProductsScreen}
                  label="Search product"
                  source={require('../../assets/images/icons8-product-80.png')}
                />,
                'Product 4']
                ]},
                {title: 'Entertainment', data: [
                [<Image
                  style={styles.productImageProductsScreen}
                  label="Products Catalog Smile"
                  source={require('../../assets/images/icons8-product-80.png')}
                />,
                'Product 5'],
                [<Image
                  style={styles.productImageProductsScreen}
                  label="Products Catalog Smile"
                  source={require('../../assets/images/icons8-product-80.png')}
                />,
                'Product 6'],
                [<Image
                  style={styles.productImageProductsScreen}
                  label="Products Catalog Smile"
                  source={require('../../assets/images/icons8-product-80.png')}
                />,
                'Product 7'],
                [<Image
                  style={styles.productImageProductsScreen}
                  label="Products Catalog Smile"
                  source={require('../../assets/images/icons8-product-80.png')}
                />,
                'Product 8']]},
              ]}
              renderItem={({item, index, section}) =>
                  <Text style={styles.item} key={index}
                  onPress={() =>
                    navigate('ProductDetailsScreen', { pageName: 'Product Details',  productName: 'Product 1' })
                  }>{item}</Text>}
              renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
              keyExtractor={(item, index) => item + index}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

