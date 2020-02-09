import React, {PureComponent} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
// const {navigation} = this.props;
class Navigation extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      navigation: props.navigation, //here you assign the navigation props to a state
    };
  }
  navigate = location => {
    this.state.navigation.navigate(location);
  };
  render() {
    return (
      <View style={styles.bodyContent}>
        <TouchableOpacity>
          <View style={styles.menuBox}>
            <Image
              style={styles.icon}
              source={require('../../images/map.png')}
            />
            {/* <Text style={styles.info}>Icon</Text> */}
          </View>
        </TouchableOpacity>
        <TouchableHighlight
          onPress={() => {
            this.navigate('Dashboard');
          }}>
          <View style={styles.menuBox}>
            <Image
              style={styles.icon}
              source={require('../../images/orders.png')}
            />
            {/* <Text style={styles.info}>Icon</Text> */}
          </View>
        </TouchableHighlight>
        <TouchableOpacity>
          <View style={styles.menuBox}>
            <Image
              style={styles.icon}
              source={require('../../images/settings.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.menuBox}>
            <Image
              style={styles.icon}
              source={require('../../images/profile.png')}
            />
            {/* <Text style={styles.info}>Icon</Text> */}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Navigation;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    width: 10,
    padding: 5,
  },
  bodyContent: {
    paddingTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 25,
  },
  menuBox: {
    backgroundColor: '#DCDCDC',
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 2,
      width: -2,
    },
    elevation: 4,
    borderRadius: 10,
  },
  icon: {
    width: 60,
    height: 60,
  },
});
