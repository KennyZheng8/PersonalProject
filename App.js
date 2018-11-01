import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FetchLocation from './src/components/FetchLocation';

export default class App extends Component<Props> {
    getUserLocationHandler = () => {
        console.log("pressed");
    }

  render() {
    return (
      <View>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
      </View>
    );
  }
}
