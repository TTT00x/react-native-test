import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { setName, deleteName } from '../redux'
import { store } from '../redux'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name
    }
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
        <View style={{marginTop: 100}}>
          <Text>My name is {this.props.name}.</Text>
          <Text style={{marginTop: 20}}>this.state is {this.state.name}.</Text>
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
      </View>
    );
  }
}

const mapStateToProps = state => ({
  name: state.user.name
})

const mapDispatchToProps = {
  setName,
  deleteName
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
