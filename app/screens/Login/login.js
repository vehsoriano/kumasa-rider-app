import React, {Component} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  AsyncStorage,
  Alert,
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onClickListener = viewId => {
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post(`${global.server}/api/auth`, user)
      .then(res => {
        // return console.warn(res.data)
        const userData = res.data;
        if (userData.data.status == 'success') {
          _store('id_token', userData.token);
          // this.props.sample.navigate('Dashboard');
          this.props.navigation.navigate('Dashboard');
        } else {
          Alert.alert(
            'Warning',
            userData.data.msg,
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
          this.setState({spinner: false});
        }
      })
      .catch(err => {
        this.setState({spinner: false});
        Alert.alert(
          'Error',
          err.message,
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
        console.warn(err.message);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/logo.png')}
          />
          <Text style={styles.title}>
            An app to order food anywhere you are.
          </Text>
        </View>
        <View style={styles.inputContainer}>
          {/* <Image
            style={styles.inputIcon}
            source={{
              uri: 'https://png.icons8.com/message/ultraviolet/50/3498db',
            }}
          /> */}
          <Image
            style={styles.inputIcon}
            source={require('../../images/mail.png')}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({email})}
          />
        </View>

        <View style={styles.inputContainer}>
          {/* <Image
            style={styles.inputIcon}
            source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}
          /> */}
          <Image
            style={styles.inputIcon}
            source={require('../../images/key.png')}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({password})}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonTextContainer}
          onPress={() => null}>
          <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonTextContainer}
          onPress={() => null}>
          <Text>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d68910',
  },
  logoContainer: {
    // alignItems: 'center',
    marginBottom: 25,
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    color: '#fff',
    width: 160,
    textAlign: 'center',
    opacity: 0.8,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: 250,
    borderRadius: 30,
  },
  buttonTextContainer: {
    margin: 5,
  },
  loginButton: {
    backgroundColor: '#00b5ec',
  },
  loginText: {
    color: 'white',
  },
});

const _store = async (key, value) => {
  await AsyncStorage.setItem(key, value);
};
