import React, {Component} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  StatusBar,
  AsyncStorage,
} from 'react-native';
export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      email: '',
    };
  }
  onSubmit = () => {
    try {
      const user = {
        email: this.state.email,
        password: this.state.password,
      };
      console.log(user);
      // axios
      //   .post(`${global.server}/api/auth`, user)
      //   .then(res => {
      //     // return console.warn(res.data)
      //     console.log(res.data);
      //     // if (res.data.data.status == 'success') {
      //     //   // console.warn(res.data.token);
      //     //   _store('id_token', res.data.token);
      //     //   // this.setState({spinner: false});
      //     //   return this.props.navigation.navigate('BusinessDashboard');
      //     // } else {
      //     //   Alert.alert(
      //     //     'Warning',
      //     //     res.data.data.msg,
      //     //     [
      //     //       {
      //     //         text: 'Cancel',
      //     //         onPress: () => console.log('Cancel Pressed'),
      //     //         style: 'cancel',
      //     //       },
      //     //       {text: 'OK', onPress: () => console.log('OK Pressed')},
      //     //     ],
      //     //     {cancelable: false},
      //     //   );
      //     //   this.setState({spinner: false});
      //     // }
      //   })
      //   .catch(err => {
      //     // this.setState({spinner: false});
      //     // Alert.alert(
      //     //   'Error',
      //     //   err.message,
      //     //   [
      //     //     {
      //     //       text: 'Cancel',
      //     //       onPress: () => console.log('Cancel Pressed'),
      //     //       style: 'cancel',
      //     //     },
      //     //     {text: 'OK', onPress: () => console.log('OK Pressed')},
      //     //   ],
      //     //   {cancelable: false},
      //     // );
      //     console.warn(err.message);
      //   });
    } catch (error) {}
    // _store('id_token', 'in');
    // this.props.sample.navigate('Dashboard');
  };
  render() {
    // console.log();
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TextInput
          placeholder="Email"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          returnKeyType="next"
          style={styles.input}
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          returnKeyType="go"
          placeholder="Password"
          style={styles.input}
          ref={input => (this.passwordInput = input)}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.onSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 10,
    color: '#fff',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#d68910',
    paddingVertical: 15,
    marginBottom: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
  },
});
const _store = async (key, value) => {
  await AsyncStorage.setItem(key, value);
};
