
import React, { Component } from 'react';
import {
  Text
  ,View
  ,StyleSheet
} from 'react-native';

import MapView from 'react-native-maps';
class Map extends Component {

  constructor(props){
    super(props);
    this.state = {
      region: {
        latitude: 13.764884,
        longitude: 100.538265,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }
    };
    this.onRegionChange = this.onRegionChange.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        console.log(initialPosition);
        // this.setState({initialPosition});
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );

  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render () {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
          >

          <MapView.Marker
            coordinate={{latitude: 13.764884, longitude: 100.538265}}
            title="Victory Monument"
            description="A large military monument in Bangkok, Thailand."
            />
        </MapView>
        <View style={styles.container}>
          <Text>
            Latitude: {this.state.region.latitude}{'\n'}
            Longitude: {this.state.region.longitude}{'\n'}
            LatitudeDelta: {this.state.region.latitudeDelta}{'\n'}
            LongitudeDelta: {this.state.region.longitudeDelta}
          </Text>
        </View>
      </View>
    );
  }

}

module.exports = Map;
