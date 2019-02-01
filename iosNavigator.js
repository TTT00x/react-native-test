import React from 'react';
import PropTypes from 'prop-types';
import { Button, NavigatorIOS, Text, View } from 'react-native';

export default class IosNavigator extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'My Initial Scene',
          passProps: {index: 1},
        }}
        style={{flex: 1}}
      />
    );
  }
}

class Test extends React.Component {
  render() {
    return (
      <View style={{paddingTop: 70}}>
        <Text>test</Text>
        <Text>test</Text>
        <Text>test</Text>
        <Text>test</Text>
        <Text>test</Text>
        <Text>test</Text>
        <Text>test</Text>
        <Text>test</Text>
        <Text>test</Text>
        <Text>test</Text>
        <Text>test</Text>
      </View>
    )
  }
}

class MyScene extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    navigator: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: Test,
      title: 'Scene ' + nextIndex,
      passProps: {index: nextIndex},
    });
  }

  render() {
    return (
      <View style={{paddingTop: 70}}>
        <Text>Current Scene: {this.props.title}</Text>
        <Button
          onPress={this._onForward}
          title="Tap me to load the next scene"
        />
      </View>
    );
  }
}
