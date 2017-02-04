'use-strict'

import {
  StyleSheet,
  Dimensions,
} from 'react-native';
var {height, width} = Dimensions.get('window');

var styles = StyleSheet.create ({
  map:{
    width: width,
    height: height*2/3
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navigationBarStyle : {
     backgroundColor : '#29B1DD',
  },
  buttonContainer: {
    position:'absolute',
      bottom: 0,
      height:40,
      backgroundColor:'blue',
      justifyContent:'center',
      width: 120
   },
});

module.exports = styles;
