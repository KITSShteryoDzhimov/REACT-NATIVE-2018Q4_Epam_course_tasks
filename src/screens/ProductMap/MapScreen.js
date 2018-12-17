import React, { Component } from "react";
import { View, ActivityIndicator} from 'react-native';

//import { MapView,Marker } from 'expo'
import MapView from 'react-native-map-clustering';;
import { Marker } from 'react-native-maps';

import call from 'react-native-phone-call'
import Geocoder from 'react-native-geocoding';

const args = {
  number: '+359888123456', // String value with the number to call
  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}
 
export default class MapScreen extends Component {
    state = {
        mapLoaded: false,
        mapRegion: {
          latitude: 42.6972,
          longitude: 23.3167,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
    };
    
    componentDidMount() {
        this.setState({ mapLoaded: true });
    }      

    onRegionChange = (mapRegion) => {
        this.setState({ mapRegion });
      }

    getAddressData() {
        Geocoder.setApiKey('AIzaSyBIyjtZgAIxGn7CbdOOLwFwe8jSxxSSaug')
        Geocoder.from({
            latitude: this.state.mapRegion.latitude,
            longitude: this.state.mapRegion.longitude
        })
        .then(json => {
            addressFull = json.results[0].formatted_address;
            this.setState({address: addressFull})            
        })
        .catch(error => console.warn(error));
    }

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        {this.getAddressData()}
        <MapView
            region={this.state.mapRegion}
            onRegionChange={this.onRegionChange}
            style={{ flex: 1 }}>
            <Marker coordinate={{latitude: this.state.mapRegion.latitude, longitude: this.state.mapRegion.longitude}} cluster={false} 
                title={this.state.address}
                onPress={() =>    
                    call(args).catch(console.error)
                }
            />
        </MapView>   
      </View>
    );
  }
}

