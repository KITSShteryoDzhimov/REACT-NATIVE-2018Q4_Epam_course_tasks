import React, { Component } from "react";

import styles from "./Products.Styles";
import { Text, View, TouchableOpacity} from 'react-native';
import { Card, Button } from 'react-native-elements';
import AnimatedCard from "../CardSwipe/AnimatedCard";

const DATA = [
  { id: 1, text: 'Product 1', uri: 'https://i.pinimg.com/236x/07/59/5a/07595a38a530589a6cdbb54a805564d6.jpg' },
  { id: 2, text: 'Product 2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Product 3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Product 4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Product 5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Product 6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Product 7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Product 8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];


export default class Products extends Component {
  static navigationOptions = ({navigation}) =>({
    title: 'Products',
  });

    renderCard(item) {
      //const { navigate } = this.props.navigation;

      return (
        
        <Card
          key={item.id}
          title={item.text}
          image={{ uri: item.uri }}
        >
        
          <TouchableOpacity>
            <Button
              buttonStyle={styles.button}
              textStyle={{fontFamily: "cylburn", fontSize: 36 }}                      
              // onPress={() =>
                //navigate('LoginScreen', {  productDescription: "Lorem Ipsum ...", productName: item.text, productImage: item.uri})
              // }
              title="Product Details"
            />
          </TouchableOpacity>  
          <Text style={{ margin: 15 }}>
            Note: Swipe the Card left or right to see next product
          </Text>                  
        </Card>
       
      );
    }
  
    renderNoMoreCards() {
      return (
        <Card title="All Done!">
          <Text style={{ marginBottom: 10 }}>
            There's no more content here!
            Go back to start over.
          </Text>
        </Card>
      );
    }

  render() {   
    
    return (

        <View>
          <AnimatedCard button
            data={DATA}
            renderCard={this.renderCard}
            renderNoMoreCards={this.renderNoMoreCards}
          />
        </View>
      
    );
  }
}

