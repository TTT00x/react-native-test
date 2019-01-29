import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const name = this.props.navigation.getParam("name", "---")
    return (
      <View>
        <Text>{ name }</Text>
      </View>
    );
  }
}
