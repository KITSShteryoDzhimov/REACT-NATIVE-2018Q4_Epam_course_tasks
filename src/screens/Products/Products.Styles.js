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
        //marginRight: 50,
        resizeMode: 'contain',
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        padding: 6,
        //borderBottomWidth: 1,
        //borderBottomColor: '#222222', //Colors.Graphite
        fontFamily: "cylburn",
        fontSize: 32,
        height: '9%',
        justifyContent: 'center',
    },
});

export default styles;
