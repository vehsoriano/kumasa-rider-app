/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
console.ignoredYellowBox = ['Warning: ReactNative.createElement'];
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
