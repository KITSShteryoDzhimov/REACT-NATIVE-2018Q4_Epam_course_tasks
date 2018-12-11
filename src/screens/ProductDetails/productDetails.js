import React, { Component } from "react";

import styles from './ProductDetails.Styles';
import {Keyboard, Text, View, Image, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';

import ProductsScreen from '../Products/products'

export default class ProductDetailsScreen extends Component {
  static navigationOptions = ({navigation,screenProps}) =>({
    title: navigation.getParam('productName','Product')
  });
  render() {
    const { navigate } = this.props.navigation;
    const productName = this.props.navigation.state.params.productName;
    const productDescription = this.props.navigation.state.params.productDescription;
     return (
        <KeyboardAvoidingView style={styles.page} behavior="padding">
           <View style={ styles.header } />
           <View style={ styles.body }>
             <View style={ styles.caption }>
                 <View style={ styles.captionImageContainer }>
                        <Image
                          style={styles.captionImage}
                          label="Products Catalog Smile"
                          source={require('../../assets/images/icons8-product-80.png')}
                        />
                   </View>
                   <View style={ styles.captionTextContainer }>
                    <Text style={styles.captionText}>{productName}</Text>
                   </View>
              </View>
              <View style={ styles.descriptionContainer }>
                <Text style={ styles.description } numberOfLines={ 6 } ellipsizeMode='tail'>{'\t'}
                  {productDescription}
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Button
                      buttonStyle={styles.buttonText}
                      textStyle={{fontFamily: "cylburn", fontSize: 36 }}
                      onPress={() =>
                        navigate('ProductsScreen', { name: 'products' })
                      }
                      title="All Products"
                    />
                 </TouchableWithoutFeedback>
              </View>
           </View>
           <View style={ styles.footer } />
        </KeyboardAvoidingView>
    );
  }

}
