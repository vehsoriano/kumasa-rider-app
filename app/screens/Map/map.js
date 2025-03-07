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
// import MapboxGL from '@mapbox/react-native-mapbox-gl';
// import StoreLocatorKit from '@mapbox/store-locator-react-native';
// const mapboxClient = new MapboxClient(
//   pk.eyJ1IjoibXJqZXJhbGQwNCIsImEiOiJjazc4cHoyMjMwM2xxM3JzNmJ6c2kyZDl2In0.VRfsRdc4f72NogKny_EplA,
// );
export default class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      userSelected: [],
    };
  }

  clickEventListener = item => {
    this.setState({userSelected: item}, () => {
      this.setModalVisible(true);
    });
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  // for mapbox

  async fetchDirections(origin, destination) {
    const originLatLng = {
      latitude: origin[1],
      longitude: origin[0],
    };

    const destLatLng = {
      latitude: dest[1],
      longitude: dest[0],
    };

    const requestOptions = {
      profile: this.props.type,
      geometry: 'polyline',
    };

    let res = null;
    try {
      res = await mapboxClient.getDirections(
        [originLatLng, destLatLng],
        requestOptions,
      );
    } catch (e) {
      console.log(e);
    }

    if (res !== null) {
      const directions = res.entity.routes[0];
      this.setState({directions: directions});
    }
  }

  render() {
    return <View style={{flex: 1}}></View>;
    // const directions = this.state.directions;

    // if (!directions) {
    //   return null;
    // }

    // return (
    //   <MapboxGL.ShapeSource
    //     id="mapbox-directions-source"
    //     shape={directions.geometry}>
    //     <MapboxGL.LineLayer
    //       id="mapbox-directions-line"
    //       belowLayerID={Places.UnselectedSymbolID}
    //       style={[styles.directionsLine, this.props.style]}
    //     />
    //   </MapboxGL.ShapeSource>
    // );
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
  modalInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
