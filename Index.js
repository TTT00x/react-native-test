import Expo from 'expo';
import React, { Component } from 'react';
import { store } from './redux'
import { Provider } from 'react-redux'
import App from "./space/App";

class Index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Expo.registerRootComponent(Index);
