import React, {Component} from 'react';
import {
  View,
  ActivityIndicator,
  StatusBar,
  AsyncStorage,
  StyleSheet,
} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// import Home from './app/screens/home';
// import Orders from './app/screens/orders';
import Login from './app/screens/Login/login';
import Profile from './app/screens/Profile/profile';
import Dashboard from './app/screens/Dashboard/dashboard';
import Orders from './app/screens/Orders/orders';
import Navigation from './app/components/BottomTabBar/navigation';

const Auth = createStackNavigator(
  {
    Dashboard: Dashboard,
  },
  {
    headerMode: 'none',
  },
);

const App = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      header: null,
    },
  },
  Profile: Profile,
  Orders: {
    screen: Orders,

    navigationOptions: {
      title: 'Orders',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
    },
  },
  Navigation: Navigation,
});

const Project = createSwitchNavigator({
  Auth: Auth,
  App: App,
});
// created by jerald
const AuthStack = createStackNavigator(
  {
    Login: Login,
  },
  {
    headerMode: 'none',
  },
);
class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._loadData();
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
  _loadData = async () => {
    const id_token = await AsyncStorage.getItem('id_token');
    this.props.navigation.navigate(id_token === null ? 'Auth' : 'App');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: Project,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
