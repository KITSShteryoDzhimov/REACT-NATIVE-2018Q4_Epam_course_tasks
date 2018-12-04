const React = require("react-native");

const { StyleSheet } = React;

export default {

containerView: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
  justifyContent: 'center',
},
productLabelText: {

  textAlign: 'left',
  fontFamily: "cylburn",
  fontSize: 46,
},
productDescriptionText: {
  marginLeft: 40,
  marginRight: 70,
  textAlign: 'left',
  fontFamily: "cylburn",
  fontSize: 30,
},
containerProductsProductDetails: {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignContent: 'center',
  alignItems: 'flex-end',
},
containerProductDetails: {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignContent: 'center',
  alignItems: 'flex-end',
  marginTop: 20,
  marginBottom: 40,
  marginLeft: 20,
},
welcomeImageView: {
  flexDirection: 'row',
  alignSelf: 'center',
},
welcomeImage: {
  width: 50,
  height: 50,
  marginTop:  20,
  resizeMode: 'contain',
  flexDirection: 'row',
},
productImageProductDetails: {
  width: 65,
  height: 65,
  marginRight: 20,
  resizeMode: 'contain',
  flexDirection: 'row',
},
productImageProductsScreen: {
  width: 55,
  height: 55,
  marginRight: 50,
  resizeMode: 'contain',
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
  marginTop: 10,
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
allProductsButton: {
  backgroundColor: '#76cdd8',
  borderRadius: 5,
  height: 45,
  width: 160,
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
  padding: 12,
  fontFamily: "cylburn",
  fontSize: 32,
  height: 50,
},
};
