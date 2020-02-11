/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Routes from './Routes';

export default class Onboarding extends React.Component {
  constructor() {
    super();
    //Setting up global variable
    // global.server = 'http://ipc-webapp.herokuapp.com';
    // global.server = 'http://192.168.0.114:5000';
  }
  render() {
    return <Routes />;
  }
}
