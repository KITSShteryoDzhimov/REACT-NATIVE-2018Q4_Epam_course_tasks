import React, { Component } from "react";

import styles from "./Login.Styles";
import {Keyboard, Text, View, TextInput, Image, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';
import { Font } from 'expo';

export default class LoginScreen extends Component {
 state = {
    currentIndex: 0,
    fontsLoaded: false,
  };
  async componentWillMount()   {
        await Font.loadAsync({
          'cylburn': require('../../assets/fonts/Cylburn.ttf'),
       });

      this.setState({ fontsLoaded: true });
  };
  render() {
    const { navigate } = this.props.navigation;
    return this.state.fontsLoaded ?
    (
       <View style={styles.containerView}>
         <View style={ styles.header } />
         <Image
           style={styles.welcomeImage}
           label="Products Catalog Smile"
           source={{uri: 'https://i.pinimg.com/originals/af/d8/cc/afd8cc206a772cde7e79eaaaa4596948.png'}}
         />
         <View style={styles.appNameContainer}>
             <Text style={styles.appWelcomeText}>Friday's shop</Text>
         </View>
          <View style={styles.loginContainer}>
             <TextInput placeholder="Email" placeholderColor="#76cdd8" style={styles.loginFormTextInput} />
             <TextInput placeholder="Password" placeholderColor="#76cdd8" style={styles.loginFormTextInput} secureTextEntry={true}/>
             <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                 <Button
                   buttonStyle={styles.loginButton}
                   textStyle={{fontFamily: "cylburn", fontSize: 36 }}
                   onPress={() =>
                     navigate('ProductsScreen', { user: 'mtest1@epam.com' })
                   }
                   title="Login"
                 />
              </TouchableWithoutFeedback>
          </View>
          <View style={ styles.footer } />
       </View>
    ) : null;
  }
}


