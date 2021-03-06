import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class HomeScreen extends React.Component {

    //Note: Appbar has been place at one place for both screen, which is
    //Alternate of this code. This code is also right.
  
    // static navigationOptions = {
    //   title: 'Home',
    //   headerStyle: {
    //     backgroundColor: '#f4511e',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    // };
  
    static navigationOptions = {
      title: 'Home',
      /* No more header config here! */
    };
  
    render() {
  
      return (
        <View style={styles.container}>
          <Text>Home Screen</Text>
          <Button
            title='Go To Profile'
  
            // both navigate() & push are working
            //onPress={() => this.props.navigation.navigate('About')}
            onPress={() => this.props.navigation.push('Profile',{text: 'Hello Profile'})}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });