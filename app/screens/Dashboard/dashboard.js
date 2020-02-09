// import React, {Component} from 'react';
// import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

// export default class Profile extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.header}></View>
//         <Image
//           style={styles.avatar}
//           source={require('../images/avatar1.png')}
//         />
//         <View style={styles.body}>
//           <View style={styles.bodyContent}>
//             <Text style={styles.name}>John Doe</Text>
//             <Text style={styles.info}>UX Designer / Mobile developer</Text>
//             <Text style={styles.description}>
//               Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
//               electram expetendis, omittam deseruisse consequuntur ius an,
//             </Text>

//             <TouchableOpacity style={styles.buttonContainer}>
//               <Text>Opcion 1</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.buttonContainer}>
//               <Text>Opcion 2</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: '#00BFFF',
//     height: 200,
//   },
//   avatar: {
//     width: 130,
//     height: 130,
//     borderRadius: 63,
//     borderWidth: 4,
//     borderColor: 'white',
//     marginBottom: 10,
//     alignSelf: 'center',
//     position: 'absolute',
//     marginTop: 130,
//   },
//   name: {
//     fontSize: 22,
//     color: '#FFFFFF',
//     fontWeight: '600',
//   },
//   body: {
//     marginTop: 40,
//   },
//   bodyContent: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 30,
//   },
//   name: {
//     fontSize: 28,
//     color: '#696969',
//     fontWeight: '600',
//   },
//   info: {
//     fontSize: 16,
//     color: '#00BFFF',
//     marginTop: 10,
//   },
//   description: {
//     fontSize: 16,
//     color: '#696969',
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   buttonContainer: {
//     marginTop: 10,
//     height: 45,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//     width: 250,
//     borderRadius: 30,
//     backgroundColor: '#00BFFF',
//   },
// });

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
// import Navigation from '../../components/BottomTabBar/navigation';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
    };
  }

  componentDidMount() {
    this.setState({
      status: 'Offline',
    });
  }

  onStatusChange = () => {
    if (this.state.status == 'Online') {
      this.setState({
        status: 'Offline',
      });
      this.props.navigation.navigate('Orders');
    } else {
      this.setState({
        status: 'Online',
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            {/* <Image
              style={styles.avatar}
              source={{
                uri: 'https://bootdey.com/img/Content/avatar/avatar1.png',
              }}
            /> */}
            <Image
              style={styles.avatar}
              source={require('../../images/avatar1.png')}
            />
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.subName}>KUMASARIDER01</Text>
          </View>
        </View>
        <View style={styles.profileDetail}>
          <View style={styles.detailContent}>
            <Text style={styles.title}>Wallet</Text>
            <Text style={styles.count}>200</Text>
          </View>
          <View style={styles.detailContent}>
            <Text style={styles.title}>Earnings</Text>
            <Text style={styles.count}>200</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.buttonStatusHolder}>
            <TouchableOpacity
              style={[
                styles.buttonContainer,
                this.state.status == 'Online'
                  ? styles.btnSuccess
                  : styles.btnDanger,
              ]}
              onPress={() => this.onStatusChange()}>
              <Text style={styles.buttonText}>{this.state.status}</Text>
            </TouchableOpacity>
          </View>
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
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Orders');
              }}>
              <View style={styles.menuBox}>
                <Image
                  style={styles.icon}
                  source={require('../../images/orders.png')}
                />
                {/* <Text style={styles.info}>Icon</Text> */}
              </View>
            </TouchableOpacity>
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
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#f4511e',
    // flex: 1,
  },
  headerContent: {
    paddingTop: 60,
    marginBottom: 80,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  subName: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: '500',
  },
  profileDetail: {
    alignSelf: 'center',
    marginTop: 300,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#d4ac0d',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  detailContent: {
    margin: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  count: {
    fontSize: 18,
  },
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
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: '#696969',
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
  info: {
    fontSize: 22,
    color: '#696969',
  },
  buttonStatusHolder: {
    alignItems: 'center',
    marginTop: 15,
  },
  buttonContainer: {
    width: 200,
    height: 50,
    paddingTop: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  btnSuccess: {
    backgroundColor: '#2ecc71',
  },
  btnDanger: {
    backgroundColor: '#cb4335',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
  },
});
