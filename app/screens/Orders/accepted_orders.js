import React, {Component} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Modal,
  ScrollView,
} from 'react-native';
// import {Table, Row, Rows} from 'react-native-table-component';

export default class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      userSelected: [],
      data: [],
      orderList: [
        {
          id: 1,
          name: 'Mcdo Fries',
          qty: '2',
          price: '200',
        },
      ],
    };
  }

  componentDidMount() {
    this.getData();
  }

  clickEventListener = item => {
    // this.setState({userSelected: item}, () => {
    //   this.setModalVisible(true);
    // });
    console.log(item);
    this.props.navigation.navigate('OrderDetail', {
      order_id: item.order_id,
      name: item.first_name + ' ' + item.last_name,
      address: item.order_address + ' ' + item.order_city,
      total: item.order_total,
      action: 'accepted',
    });
  };

  getData = () => {
    axios
      .get(`${global.server}/api/order/orders`)
      .then(res => {
        // console.log(res.data);
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

  // setModalVisible(visible) {
  //   this.setState({modalVisible: visible});
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>LIST OF ORDERS</Text>
        <FlatList
          style={styles.userList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={({item}) => {
            if (item.status == 'Accepted') {
              return (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => {
                    this.clickEventListener(item);
                  }}>
                  {/* <Image style={styles.image} source={{uri: item.image}} /> */}
                  <View style={styles.cardContent}>
                    <Text style={styles.name}>
                      {item.first_name + ' ' + item.last_name}
                    </Text>
                    <Text style={styles.position}>{item.order_number}</Text>
                    {/* <TouchableOpacity
                      style={styles.followButton}
                      onPress={() => this.clickEventListener(item)}>
                      <Text style={styles.followButtonText}>Follow</Text>
                    </TouchableOpacity> */}
                  </View>
                </TouchableOpacity>
              );
            }
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  title: {
    padding: 10,
    marginLeft: 12,
    fontWeight: '400',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
    flex: 1,
  },
  detailContent: {
    top: 80,
    height: 500,
    width: Dimensions.get('screen').width - 90,
    marginHorizontal: 30,
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#ffffff',
  },
  userList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 3,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: 'white',
    flexBasis: '46%',
    padding: 10,
    flexDirection: 'row',
  },

  name: {
    fontSize: 18,
    flex: 1,
    // alignSelf: 'center',
    color: '#008080',
    fontWeight: 'bold',
  },
  position: {
    fontSize: 14,
    flex: 1,
    // alignSelf: 'center',
    color: '#696969',
  },
  about: {
    marginHorizontal: 10,
  },

  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  followButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  /************ modals ************/
  popup: {
    backgroundColor: 'white',
    marginTop: 150,
    marginHorizontal: 20,
    borderRadius: 7,
  },
  popupOverlay: {
    backgroundColor: '#00000057',
    flex: 1,
    marginTop: 0,
  },
  popupContent: {
    //alignItems: 'center',
    margin: 5,
    height: 250,
  },
  popupHeader: {
    marginBottom: 45,
  },
  popupButtons: {
    marginTop: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#eee',
    justifyContent: 'center',
  },
  popupButton: {
    flex: 1,
    marginVertical: 16,
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    margin: 20,
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
    fontWeight: '200',
  },
  btnSuccess: {
    backgroundColor: '#2ecc71',
  },
  btnDanger: {
    backgroundColor: '#cb4335',
  },
  btnContainer: {
    alignItems: 'center',
    // alignSelf: 'center',
    height: 50,
    justifyContent: 'center',
  },
});
