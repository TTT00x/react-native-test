import {AppRegistry} from 'react-native';
import React, { Component } from 'react';
import { store } from './store/index'
import { Provider } from 'react-redux'
import App from "./space/App";
import { name as appName } from './app.json';

class Index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => Index);


