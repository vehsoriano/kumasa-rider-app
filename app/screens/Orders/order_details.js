import React, {Component} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  AsyncStorage,
  Button,
} from 'react-native';
let id_token = '';
export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      rider_id: '',
      order_id: this.props.navigation.state.params.order_id,
      name: this.props.navigation.state.params.name,
      address: this.props.navigation.state.params.address,
      total: this.props.navigation.state.params.total,
      action: this.props.navigation.state.params.action,
    };
  }

  getOrderList = () => {
    axios
      .get(`${global.server}/api/order/ordersItem/${this.state.order_id}`)
      .then(res => {
        console.log(res.data);
        const orderData = res.data;
        this.setState({
          data: orderData,
        });

        // setOrderData(res.data);
        // setCurrentOrder(res.data);
        // setLoader(true)
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  componentDidMount() {
    AsyncStorage.getItem('id_token').then(res => {
      id_token = res;
      // console.log(id_token);
      // get the user detail
      axios
        .get(`${global.server}/api/auth`, {headers: {'x-auth-token': id_token}})
        .then(res => {
          // console.log(res.data);
          const userData = res.data;
          this.setState({
            rider_id: userData._id,
          });
          this.getOrderList();
        });
    });
  }

  clickEventListener() {
    const body = {order_id: this.state.order_id};
    axios
      .put(`${global.server}/api/order/accept/${this.state.rider_id}`, body)
      .then(res => {
        console.log(res.data);
        // const orderData = res.data;
        // this.setState({
        //   data: orderData,
        // });
        Alert.alert('Success', 'Order Accepted');
        this.props.navigation.navigate('Dashboard');

        // setOrderData(res.data);
        // setCurrentOrder(res.data);
        // setLoader(true)
      })
      .catch(err => {
        console.log(err.response);
      });
  }

  render() {
    console.log(this.state.order_id);
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{alignItems: 'center', marginHorizontal: 30}}>
            <Text style={styles.name}>{this.state.name}</Text>
            <Text style={styles.price}>P{this.state.total}</Text>
            <Text style={styles.description}>{this.state.address}</Text>
          </View>
          <View style={styles.separator}></View>
          <Text style={styles.title}>LIST OF ORDERS</Text>
          <View style={styles.separator}></View>
          <View style={styles.ordersContainer}>
            {/* <Text>List of Orders here</Text> */}

            <FlatList
              style={styles.userList}
              columnWrapperStyle={styles.listContainer}
              data={this.state.data}
              keyExtractor={item => {
                return item.id;
              }}
              renderItem={({item}) => {
                return (
                  <View style={styles.cardContent}>
                    <Text style={styles.itemName}>{item.item_name}</Text>
                    {/* <Text style={styles.subName}>{item.order_number}</Text> */}
                    <Text style={styles.subName}>Quantity: {item.qty}</Text>
                    <Text style={styles.subName}>P {item.price}</Text>
                    <Text style={styles.subName}>Total: {item.total}</Text>
                  </View>
                );
              }}
            />
          </View>
          {/* <View style={styles.contentColors}></View>
          <View style={styles.contentSize}></View> */}
          {this.state.action == 'not accepted' ? (
            <>
              <View style={styles.separator}></View>
              <View style={styles.addToCarContainer}>
                <TouchableOpacity
                  style={styles.shareButton}
                  onPress={() => this.clickEventListener()}>
                  <Text style={styles.shareButtonText}>Accept</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : null}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  productImg: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: 'bold',
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: '#696969',
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: '#778899',
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: 'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    // marginLeft: 25,
    marginTop: 10,
    alignSelf: 'center',
  },
  ordersContainer: {
    justifyContent: 'center',
    marginHorizontal: 5,
    flexDirection: 'row',
    marginTop: 20,
  },
  userList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 3,
  },
  itemName: {
    fontSize: 18,
    // flex: 1,
    // alignSelf: 'center',
    color: '#008080',
    fontWeight: 'bold',
  },
  subName: {
    fontSize: 14,
    // flex: 1,
    // alignSelf: 'center',
    color: '#696969',
  },
  contentColors: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentSize: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: '#eeeeee',
    marginTop: 10,
    marginHorizontal: 30,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30,
  },
});
