import React, { Component } from "react";

import {FlatList} from 'react-native';
import {ListItem } from 'react-native-elements';

const PAGE_SIZE = 15;

export default class Products extends Component {
  state = {
    pageIdx: 0,
    items: [],
    isLoading: false,
    isRefreshing: false,
    totalCount: 0,
};

handleRefresh = () => {
    this.setState({
        isRefreshing: true,
        items: [],
    }), () => {

        this.loadProducts(0)
            .then(() => this.setState({ isRefreshing: false }))
            .catch((e) => {
                this.setState({
                    isRefreshing: false,
                    items: [],
                })
        });
    }
}

onScroll(isScrolling) {
    this.setState({ isScrolling });
}

handleLoadMore = () => {
    const { isScrolling, pageIdx, totalCount } = this.state;
        const maxCount = (pageIdx - 1) * PAGE_SIZE;

        if (isScrolling || maxCount >= totalCount) {
            return;
        }

        this.loadProducts(pageIdx + 1).catch(e => console.error(e));
};

componentDidMount() {

    this.loadProducts(this.state.pageIdx).catch(e => console.error(e));
};

loadProducts(pageIdx) {    
    return this.fetchItems({ pageSize: PAGE_SIZE, pageIdx })
        .then(({ items, totalCount }) => {
            this.setState({
                items: this.state.items.concat(items),
                pageIdx,
                totalCount,
            });
        });
}

async fetchItems(options) {
    const { pageIdx, pageSize } = options;

    const response = await fetch(`http://ecsc00a02fb3.epam.com/rest/V1/products?searchCriteria[pageSize]=${pageSize}&searchCriteria[currentPage]=${pageIdx + 1}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const response_1 = await response.json();
    if (response_1.message) {
        return Promise.reject(response_1.message);
    }
    return {
        items: response_1.items.map(item => Object.assign( item)),
        totalCount: response_1.total_count,
    };
}

render() {
    const { items, isRefreshing } = this.state;
    const { navigate } = this.props.navigation;
    return (
        <FlatList
            renderItem={({item}) => (
                <ListItem                            
                    title={item.name}
                    price={item.price}
                    //avatar={{uri: item.picture.thumbnail}}
                    //roundAvatar
                    onPress={() =>
                        navigate('ProductDetailsScreen', { productDescription: 'Lorem ipsum dolor sit amet, ea vis natum debet nobis. Est at populo labore principes, quo no choro legere. Sed novum mazim dolor ad, te ullum sonet maluisset mel. Pri eu sanctus utroque euripidis, id novum denique  sit, congue cetero utamur qui eu. Cum agam eros maiorum id. Ut modus reque malis est, veri graeci ea usu. Lorem ipsum dolor sit amet, ea vis natum debet nobis. Est at populo labore principes, quo no choro legere. Sed novum mazim dolor ad, te ullum sonet maluisset mel. Pri eu sanctus utroque euripidis, id novum denique sit, congue cetero utamur qui eu. Cum agam eros maiorum id. Ut modus reque malis est, veri graeci ea usu.',  productName: item.name, productImage: '../../assets/images/icons8-product-80.png'})                                
                    }
                />
            )}
            data={items}
            keyExtractor={item => `${item.id}`}
            refreshing={isRefreshing}
            onRefresh={this.handleRefresh}
            onEndReached={this.handleLoadMore}
            onEndThreshold={0.01}
            onMomentumScrollBegin={() => this.onScroll(true)}
            onMomentumScrollEnd={() => this.onScroll(false)}
        />
    )
}
}
