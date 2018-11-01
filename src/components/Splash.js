import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Splash extents Component {
    render() {
        return (
            <View>
                <Text>Hello World!</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('Splash', () => Splash);
