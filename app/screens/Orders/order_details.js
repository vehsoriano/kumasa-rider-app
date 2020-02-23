import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: 'Fries',
          order_number: 'Mcdonalds Angeles',
        },
        {
          id: 2,
          name: '2pcs Chicken Joy',
          order_number: 'Mcdonalds Angeles',
        },
      ],
    };
  }

  clickEventListener() {
    Alert.alert('Success', 'Product has beed added to cart');
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{alignItems: 'center', marginHorizontal: 30}}>
            <Text style={styles.name}>Jerald Dela Cruz</Text>
            <Text style={styles.price}>P450</Text>
            <Text style={styles.description}>Angeles City</Text>
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
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.position}>{item.order_number}</Text>
                  </View>
                );
              }}
            />
          </View>
          {/* <View style={styles.contentColors}></View>
          <View style={styles.contentSize}></View> */}
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity
              style={styles.shareButton}
              onPress={() => this.clickEventListener()}>
              <Text style={styles.shareButtonText}>Accept</Text>
            </TouchableOpacity>
          </View>
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
