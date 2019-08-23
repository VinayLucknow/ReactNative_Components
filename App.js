import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/HomeScreen'
import ProfileScreen from './components/ProfileScreen'


const AppNavigator = createStackNavigator(
  
  //This is also a write code. Below is its alternative
   
 //   {
 //   Home: {
 //     screen: HomeScreen
 //   },
 
 //   About: {
 //     screen: AboutScreen
 //   }
 // },
 
 {
   Home: HomeScreen,
   Profile: ProfileScreen
 },
 
 {
   initialRouteName: 'Home',
   /* The header config from HomeScreen is now here */
   defaultNavigationOptions: {
     headerStyle: {
       backgroundColor: '#f4511e',
     },
     headerTintColor: '#fff',
     headerTitleStyle: {
       fontWeight: 'bold',
     },
   },
 }
 
 );

 export default class App extends React.Component {

  render(){
    return <AppContainer/>;
  }
}

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
