import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    header: {
        flex: 4,
        marginBottom: 2,
        borderBottomColor: Colors.Graphite,
        borderBottomWidth: 1
    },
    body: {
        flex: 14,
        borderTopColor: Colors.Graphite,
        borderTopWidth: 1,
        borderBottomColor: Colors.Graphite,
        borderBottomWidth: 1
    },
    caption: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    captionImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    captionImage: {
        flex: 1,
        resizeMode: 'contain',
        width: '80%',
        height: '80%'
    },
    captionTextContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    captionText: {
        fontFamily: 'cylburn',
        fontSize: 56,
        marginLeft: '5%'
    },
    descriptionContainer: {
        flex: 7,
        alignItems: 'flex-start'
    },
    description: {
        marginLeft: '13%',
        marginRight: '33%',
        fontFamily: 'cylburn',
        fontSize: 30
    },
    buttonContainer: {
        flex: 5,
        alignItems: 'flex-start',
        marginLeft: '8%'
    },
    buttonText: {
        marginHorizontal: '5%',
        backgroundColor: Colors.EpamBlue,
        borderRadius: 5,
    },
    footer: {
        flex: 5
    },
    mapImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapImage: {
        flex: 1,
        resizeMode: 'contain',
        width: '80%',
        height: '80%'
    },    
});

export default styles;
