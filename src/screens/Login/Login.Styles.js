import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flex: 5
    },
    welcomeImage: {
        flex: 2,
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    appNameContainer: {
        flex: 10,
        justifyContent: 'center'
    },
    appWelcomeText: {
        fontFamily: "cylburn",
        fontSize: 56,
    },
    loginContainer: {
        flex: 13,
        width: '100%',

    },
    loginFormTextInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.LightGray2,
        backgroundColor: Colors.LightGray3,
        paddingLeft: 10,
        marginLeft: 45,
        marginRight: 45,
        marginTop: 10,
        marginBottom: 5,
    },
    loginButton: {
        backgroundColor: Colors.EpamBlue,
        borderRadius: 5,
        marginTop: 20,
        width: '20%',
        height: '35%',
        alignSelf: 'center',
    },
    footer: {
        flex: 13
    },
    modalContainer: {
        padding: 20,     
        backgroundColor: "white",
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalButton: {
        alignSelf: 'center',
        marginTop: 10,
        marginHorizontal: '5%',
        backgroundColor: Colors.EpamBlue,
        borderRadius: 10,      
    },
});

export default styles;
