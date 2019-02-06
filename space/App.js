import React, { Component } from 'react';
import { View, ScrollView, Text, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { setName, deleteName } from '../store/actions/user'
import { switchMode } from '../store/actions/mode'
import { store } from '../store/index'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name
    }
  }
  render() {
    return (
      <ScrollView>
        <View style={{backgroundColor: 'gray', height: 40}}/>
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
        <View style={{marginTop: 100}}>
          <Text>My name is {this.props.name}.</Text>
          <Text style={{marginTop: 20}}>name is {this.state.name}.</Text>
          <Text style={{marginTop: 20}}>mode is {this.props.mode}.</Text>
        </View>
        <TextInput
          onChangeText={(name) => this.setState({name})}
          style={{width: '80%', height: 40, padding: 5 ,borderColor: 'gray', borderWidth: 1}}
        />
        <View style={{flexDirection: 'row'}}>
          <Button
            onPress={this.props.deleteName}
            title="deleteName"
          />
          <Button
            onPress={() => this.props.setName(this.state.name)}
            title="setName"
          />
        </View>
        <Text style={{marginBottom: 100}}>現在のstore: {JSON.stringify(store.getState())}</Text>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  name: state.user.name,
  mode: state.mode.mode
})

const mapDispatchToProps = {
  setName,
  deleteName,
  switchMode
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
