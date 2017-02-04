
import React, { Component } from 'react';
import {
  View
  ,TextInput
  ,Text
  ,StyleSheet
} from 'react-native';

import {
  Scene
  ,Router
  ,Actions
} from 'react-native-router-flux';

import Map from '../components/Map';
import Launch from '../components/Launch';


//-------------------------------- start class
export default class GYMsClient extends Component {

  render() {

    return(
      <Router>
        <Scene key="launch" component={Launch}  title="Launch" initial={true} navigationBarStyle={styles.navigationBarStyle}/>
        <Scene key="map" component={Map}  title="Map" navigationBarStyle={styles.navigationBarStyle}/>
      </Router>
    );


  }


} // end class
