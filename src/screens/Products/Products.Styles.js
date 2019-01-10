import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    listView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        borderTopColor: Colors.Graphite,
        borderTopWidth: 1,
        transform: [{
            translateY: 5,
        }]
    },
    productImageProductsScreen: {
        width: 45,
        height: 45,
        marginLeft: 10,
        resizeMode: 'contain',
    },
    item: {
        margin: 6,
        //borderBottomWidth: 1,
        //borderBottomColor: '#222222', //Colors.Graphite
        fontFamily: "cylburn",
        fontSize: 32,
    },
    button: {
        marginHorizontal: '5%',
        backgroundColor: Colors.EpamBlue,
        borderRadius: 5,
    }    
});

export default styles;
