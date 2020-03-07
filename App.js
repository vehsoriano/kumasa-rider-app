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
    // global.server = 'http://192.168.43.188:5000';
    global.server = 'https://kumasa-admin.herokuapp.com';
  }
  render() {
    return <Routes />;
  }
}
