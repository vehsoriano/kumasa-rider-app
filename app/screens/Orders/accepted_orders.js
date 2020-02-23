import React, {Component} from 'react';
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
      data: [
        {
          id: 1,
          name: 'Mark Doe',
          order_number: 'KUMASA_ORDER001',
          address: '#232 brgy. Tulay na Bato Bongabon Nueva Ecija',
          order_branch: 'Mcdo Angeles',
          total_amount: '2500',
        },
        {
          id: 2,
          name: 'John Doe',
          order_number: 'KUMASA_ORDER002',
          image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
          about:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        },
        {
          id: 3,
          name: 'Clark Man',
          order_number: 'KUMASA_ORDER003',
          image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
          about:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        },
        {
          id: 4,
          name: 'Jaden Boor',
          order_number: 'KUMASA_ORDER004',
          image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
          about:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        },
        {
          id: 5,
          name: 'Srick Tree',
          order_number: 'KUMASA_ORDER005',
          image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
          about:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        },
        {
          id: 6,
          name: 'John Doe',
          order_number: 'KUMASA_ORDER006',
          image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
          about:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        },
        {
          id: 7,
          name: 'John Doe',
          order_number: 'KUMASA_ORDER007',
          image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
          about:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        },
        {
          id: 8,
          name: 'John Doe',
          order_number: 'KUMASA_ORDER008',
          image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
          about:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        },
        {
          id: 9,
          name: 'John Doe',
          order_number: 'KUMASA_ORDER009',
          image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
          about:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        },
        {
          id: 10,
          name: 'John Doe',
          order_number: 'KUMASA_ORDER0010',
          image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
          about:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        },
      ],
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

  clickEventListener = item => {
    // this.setState({userSelected: item}, () => {
    //   this.setModalVisible(true);
    // });
    this.props.navigation.navigate('OrderDetail');
    console.log(item);
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
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => {
                  this.clickEventListener(item);
                }}>
                {/* <Image style={styles.image} source={{uri: item.image}} /> */}
                <View style={styles.cardContent}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.position}>{item.order_number}</Text>
                  {/* <TouchableOpacity
                    style={styles.followButton}
                    onPress={() => this.clickEventListener(item)}>
                    <Text style={styles.followButtonText}>Follow</Text>
                  </TouchableOpacity> */}
                </View>
              </TouchableOpacity>
            );
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
    alignSelf: 'center',
    color: '#008080',
    fontWeight: 'bold',
  },
  position: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
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
