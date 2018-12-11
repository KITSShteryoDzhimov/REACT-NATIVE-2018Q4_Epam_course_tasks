import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator,createAppContainer} from 'react-navigation';

import LoginScreen from './src/screens/Login/login'
import ProductsScreen from './src/screens/Products/products'
import ProductDetailsScreen from './src/screens/ProductDetails/productDetails'

const MainNavigator = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
  ProductsScreen: { screen: ProductsScreen },
  ProductDetailsScreen: { screen: ProductDetailsScreen },
});
const App = createAppContainer(MainNavigator);

export default App;
