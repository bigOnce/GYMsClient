
import React, { Component } from 'react';
import {
  Text
  ,View
  ,Button
  ,Alert
} from 'react-native';
import {Actions} from 'react-native-router-flux'



class Launch extends Component {

  _handlePress() {
    console.log("change to Map ...");
    Actions.map();
  }

  render () {

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
                 <Button onPress={this._handlePress} title="Go to Map" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
        </View>
      </View>
    );

  }

}

module.exports = Launch;
