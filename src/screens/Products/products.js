import React, { Component } from "react";

import styles from "./Products.Styles";
import {Keyboard, Text, View, Image, TouchableWithoutFeedback, FlatList, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';

export default class Products extends Component {
  static navigationOptions = ({navigation,screenProps}) =>({
    title: 'Products',
  });
  constructor(props) {
    super(props)
    this.state = {
      products: [
        {
          key: '1',
          icon: '../../assets/images/icons8-product-80.png',
          description: 'Description 1. Lorem ipsum dolor sit amet, ea vis natum debet nobis. Est at populo labore principes, quo no choro legere. Sed novum mazim dolor ad, te ullum sonet maluisset mel. Pri eu sanctus utroque euripidis, id novum denique  sit, congue cetero utamur qui eu. Cum agam eros maiorum id. Ut modus reque malis est, veri graeci ea usu. Lorem ipsum dolor sit amet, ea vis natum debet nobis. Est at populo labore principes, quo no choro legere. Sed novum mazim dolor ad, te ullum sonet maluisset mel. Pri eu sanctus utroque euripidis, id novum denique sit, congue cetero utamur qui eu. Cum agam eros maiorum id. Ut modus reque malis est, veri graeci ea usu.',
          title: 'Product 1',
        },
        {
          key: '2',
          icon: '../../assets/images/icons8-product-80.png',
          description: 'Description 2. Lorem ipsum dolor sit amet, ea vis natum debet nobis. Est at populo labore principes, quo no choro legere. Sed novum mazim dolor ad, te ullum sonet maluisset mel. Pri eu sanctus utroque euripidis, id novum denique  sit, congue cetero utamur qui eu. Cum agam eros maiorum id. Ut modus reque malis est, veri graeci ea usu. Lorem ipsum dolor sit amet, ea vis natum debet nobis. Est at populo labore principes, quo no choro legere. Sed novum mazim dolor ad, te ullum sonet maluisset mel. Pri eu sanctus utroque euripidis, id novum denique sit, congue cetero utamur qui eu. Cum agam eros maiorum id. Ut modus reque malis est, veri graeci ea usu.',
          title: 'Product 2',
        },
        {
          key: '3',
          icon: '../../assets/images/icons8-product-80.png',
          description: 'Description 3. Lorem ipsum dolor sit amet, ea vis natum debet nobis. Est at populo labore principes, quo no choro legere. Sed novum mazim dolor ad, te ullum sonet maluisset mel. Pri eu sanctus utroque euripidis, id novum denique  sit, congue cetero utamur qui eu. Cum agam eros maiorum id. Ut modus reque malis est, veri graeci ea usu. Lorem ipsum dolor sit amet, ea vis natum debet nobis. Est at populo labore principes, quo no choro legere. Sed novum mazim dolor ad, te ullum sonet maluisset mel. Pri eu sanctus utroque euripidis, id novum denique sit, congue cetero utamur qui eu. Cum agam eros maiorum id. Ut modus reque malis est, veri graeci ea usu.',
          title: 'Product 3',
        },
        {
          key: '4',
          icon: '../../assets/images/icons8-product-80.png',
          description: 'Description 4. Lorem ipsum dolor sit amet, ea vis natum debet nobis. Est at populo labore principes, quo no choro legere. Sed novum mazim dolor ad, te ullum sonet maluisset mel. Pri eu sanctus utroque euripidis, id novum denique  sit, congue cetero utamur qui eu. Cum agam eros maiorum id. Ut modus reque malis est, veri graeci ea usu. Lorem ipsum dolor sit amet, ea vis natum debet nobis. Est at populo labore principes, quo no choro legere. Sed novum mazim dolor ad, te ullum sonet maluisset mel. Pri eu sanctus utroque euripidis, id novum denique sit, congue cetero utamur qui eu. Cum agam eros maiorum id. Ut modus reque malis est, veri graeci ea usu.',
          title: 'Product 4',
        },
        {
          key: '5',
          icon: '../../assets/images/icons8-product-80.png',
          description: 'Description 5. Lorem ipsum dolor sit amet, ea vis natum debet nobis. Est at populo labore principes, quo no choro legere. Sed novum mazim dolor ad, te ullum sonet maluisset mel. Pri eu sanctus utroque euripidis, id novum denique  sit, congue cetero utamur qui eu. Cum agam eros maiorum id. Ut modus reque malis est, veri graeci ea usu. Lorem ipsum dolor sit amet, ea vis natum debet nobis. Est at populo labore principes, quo no choro legere. Sed novum mazim dolor ad, te ullum sonet maluisset mel. Pri eu sanctus utroque euripidis, id novum denique sit, congue cetero utamur qui eu. Cum agam eros maiorum id. Ut modus reque malis est, veri graeci ea usu.',
          title: 'Product 5',
        },
        {
          key: '6',
          icon: '../../assets/images/icons8-product-80.png',
          description: 'Description 6. Lorem ipsum dolor sit amet, ea vis natum debet nobis. Est at populo labore principes, quo no choro legere. Sed novum mazim dolor ad, te ullum sonet maluisset mel. Pri eu sanctus utroque euripidis, id novum denique  sit, congue cetero utamur qui eu. Cum agam eros maiorum id. Ut modus reque malis est, veri graeci ea usu. Lorem ipsum dolor sit amet, ea vis natum debet nobis. Est at populo labore principes, quo no choro legere. Sed novum mazim dolor ad, te ullum sonet maluisset mel. Pri eu sanctus utroque euripidis, id novum denique sit, congue cetero utamur qui eu. Cum agam eros maiorum id. Ut modus reque malis est, veri graeci ea usu.',
          title: 'Product 6',
        },
        {
          key: '7',
          icon: '../../assets/images/icons8-product-80.png',
          description: 'Description 7. Lorem ipsum dolor sit amet, ea vis natum debet nobis. Est at populo labore principes, quo no choro legere. Sed novum mazim dolor ad, te ullum sonet maluisset mel. Pri eu sanctus utroque euripidis, id novum denique  sit, congue cetero utamur qui eu. Cum agam eros maiorum id. Ut modus reque malis est, veri graeci ea usu. Lorem ipsum dolor sit amet, ea vis natum debet nobis. Est at populo labore principes, quo no choro legere. Sed novum mazim dolor ad, te ullum sonet maluisset mel. Pri eu sanctus utroque euripidis, id novum denique sit, congue cetero utamur qui eu. Cum agam eros maiorum id. Ut modus reque malis est, veri graeci ea usu.',
          title: 'Product 7',
        },
        {
          key: '8',
          icon: '../../assets/images/icons8-product-80.png',
          description: 'Description 8. Lorem ipsum dolor sit amet, ea vis natum debet nobis. Est at populo labore principes, quo no choro legere. Sed novum mazim dolor ad, te ullum sonet maluisset mel. Pri eu sanctus utroque euripidis, id novum denique  sit, congue cetero utamur qui eu. Cum agam eros maiorum id. Ut modus reque malis est, veri graeci ea usu. Lorem ipsum dolor sit amet, ea vis natum debet nobis. Est at populo labore principes, quo no choro legere. Sed novum mazim dolor ad, te ullum sonet maluisset mel. Pri eu sanctus utroque euripidis, id novum denique sit, congue cetero utamur qui eu. Cum agam eros maiorum id. Ut modus reque malis est, veri graeci ea usu.',
          title: 'Product 8',
        },
      ]
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.listView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View>
            <FlatList
              data = {this.state.products}
                 
              renderItem={({item}) =>
                  (
                    <View style={{flexDirection: "row"}}>
                      <Image
                        style={styles.productImageProductsScreen}
                        label="Product"
                        source={require('../../assets/images/icons8-product-80.png')}
                      />
                      <Text style={styles.item}
                      onPress={() =>
                        navigate('ProductDetailsScreen', { productDescription: item.description,  productName: item.title, productImage: item.icon})
                      }>{item.title}</Text>
                    </View>
                  )
                }
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

