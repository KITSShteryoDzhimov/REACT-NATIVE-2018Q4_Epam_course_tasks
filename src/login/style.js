const React = require("react-native");

const { StyleSheet } = React;

export default {

containerView: {
  flex: 1,

},
loginScreenContainer: {
  flex: 1,
  justifyContent: 'space-between',
},
productDetailsButton: {

},
productLabelText: {
  fontSize: 28,
  fontWeight: "800",
  marginTop:  40,
  textAlign: 'left',
},
productDescriptionText: {
  marginLeft: 40,
  marginRight: 70,
  marginTop:  40,
},
containerProductDetails: {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignContent: 'center',
  alignItems: 'flex-end',
},
welcomeImage: {
  width: 50,
  height: 50,
    marginLeft: 10,
    marginTop:  10,
  resizeMode: 'contain',
  flexDirection: 'row',
  justifyContent: 'flex-start',

},
logoText: {
  fontSize: 28,
  fontWeight: "800",
  marginTop:  40,
  marginBottom: 55,
  textAlign: 'center',
},
userLabelText: {
  fontSize: 14,
  fontWeight: "800",
  textAlign: 'left',
  marginLeft: 40,
  marginTop:  40,
},
loginFormView: {
  flex: 1
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 45,
  marginRight: 45,
  marginTop: 5,
  marginBottom: 5,
  justifyContent: 'center',
},
loginButton: {
  backgroundColor: '#76cdd8',
  borderRadius: 5,
  height: 45,
  marginTop: 30,
},
forgotButton: {
  height: 45,
  marginTop: 10,
  backgroundColor: 'transparent',
},
tcText: {
  fontSize: 13,
  fontWeight: "400",
  marginTop:  30,
  marginBottom: 15,
  textAlign: 'left',
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
  padding: 10,
  fontSize: 18,
  height: 44,
},
};
