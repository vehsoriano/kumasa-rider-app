import React, {Component} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

let id_token = '';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      textStatus: '',
      rider_id: '',
      rider_code: '',
      rider_name: '',
      rider_address: '',
      total_spend: '',
      total_earned: '',
      items: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    AsyncStorage.getItem('id_token').then(res => {
      id_token = res;
      // console.log(id_token);
      // get the user detail
      axios
        .get(`${global.server}/api/auth`, {headers: {'x-auth-token': id_token}})
        .then(res => {
          console.log(res.data);
          const userData = res.data;

          // get riders profile
          axios
            .get(`${global.server}/api/users/riders/${userData._id}`)
            .then(res => {
              const riderProfileData = res.data.rider;
              const riderWalletData = res.data.wallet;
              this.setState({
                status: userData.status,
                textStatus: riderProfileData.status,
                rider_id: userData._id,
                rider_code: riderProfileData.rider_id,
                rider_name: userData.first_name + ' ' + userData.last_name,
                rider_address: userData.address + ', ' + userData.city,
                total_spend: riderWalletData.total_spend,
                total_earned: riderWalletData.total_earned,
              });
            });
        });
    });
  }
  handleLogout = async () => {
    // Alert.alert('you clicked me')
    await AsyncStorage.clear();
    const req = {
      status: 'Offline',
    };
    axios
      .put(
        `${global.server}/api/users/rider_update_status/${this.state.rider_id}`,
        req,
      )
      .then(res => {
        console.log(res.data);
        // this.getData();
      });
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        {/* <Image
          style={styles.avatar}
          source={{
            uri:
              'https://www.bootdey.com/img/Content/avatar/avatar6.png',
          }}
        /> */}
        <Image
          style={styles.avatar}
          source={require('../../images/avatar1.png')}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{this.state.rider_name}</Text>
            <Text style={styles.info}>{this.state.rider_code}</Text>
            <Text style={styles.description}>{this.state.rider_address}</Text>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.handleLogout}>
              <Text style={styles.btnText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f4511e',
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#cb4335',
  },
  btnText: {
    color: '#fff',
  },
});
