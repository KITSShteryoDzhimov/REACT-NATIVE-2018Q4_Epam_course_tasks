import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator,createAppContainer} from 'react-navigation';

import LoginScreen from './src/login/login'
import ForgottenScreen from './src/login/forgotten'
import ProductsScreen from './src/login/products'
import ProductDetailsScreen from './src/login/productDetails'

const MainNavigator = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
  ForgottenScreen: { screen: ForgottenScreen },
  ProductsScreen: { screen: ProductsScreen },
  ProductDetailsScreen: { screen: ProductDetailsScreen },
});
const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
