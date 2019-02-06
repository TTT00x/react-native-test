import React, { Component } from 'react';
import { View, ScrollView, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { switchMode } from '../store/actions/mode'
import MorningView from './MorningView'
import NightView from './NightView'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <View style={{backgroundColor: 'gray', height: 40}}/>
        <ScrollView>
          <View style={{
            backgroundColor: 'gray',
            width: '100%',
            height: 50,
            flex: 1,
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 20,
          }}>
            <Text>Header</Text>
            <Button
              onPress={() => {this.props.switchMode(this.props.mode)}}
              title="SWITCH"
            />
          </View>
          { this.layout() }
        </ScrollView>
      </View>
    );
  }
  layout() {
    if (this.props.mode === 0) {
      return <MorningView/>
    } else {
      return <NightView/>
    }
  }
}

const mapStateToProps = state => ({
  mode: state.mode.mode
})

const mapDispatchToProps = {
  switchMode
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
