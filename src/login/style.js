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
welcomeImage: {
  width: 300,
  height: 300,
  resizeMode: 'contain',
  marginTop: 30,
  marginLeft: 30,
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
