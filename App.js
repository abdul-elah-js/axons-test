import React, { Component } from 'react';
import { Text } from 'react-native';
import Router from '@utils/router';
import Home from '@layouts/home';
import Login from '@layouts/login';

class App extends Component {

  render() {
    return <Router />
  }
}

export default App;
