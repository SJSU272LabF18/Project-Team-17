import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from "./screens/TabNavigator";
import Requests from './screens/Requests';
import App from "./App";
import LoginScreen from './screens/LoginScreen';
import LoginDetails from './screens/LoginDetails';
import UserRequest from './screens/UserRequest';
import ModifyConsent from './screens/ModifyConsent';
import ContractConfirmation from './screens/ContractConfirmation';
import DenyConsent from './screens/DenyConsent';
import TabNavigator from './screens/TabNavigator';
import Browse from './screens/Browse';
import UserProfile from './screens/UserProfile';
import RequestConfirmation from './screens/RequestConfirmation';
import BreachConfirmation from './screens/BreachConfirmation';
import SignUpScreen from './screens/SignUpScreen';
import OverLay from './screens/OverLay';


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  SignUp:{
    screen:SignUpScreen
  },
  Login:{
    screen:LoginScreen
  },
  Requests: {
    screen: Requests
  },
  LoginDetails:{
    screen:LoginDetails
  },
  userRequest:{
   screen:UserRequest 
  },
  ContractConfirmation:{
    screen:ContractConfirmation
  },
  DenyConsent:{
    screen:DenyConsent
  },
  Browse:{
    screen:Browse
  },
  OverLay:{
    screen:OverLay
  },
  UserProfile:{
    screen:UserProfile
  },
  RequestConfirmation:{
    screen:RequestConfirmation
  },
  BreachConfirmation:{
    screen:BreachConfirmation
  },
  Dapp:{
    screen: App
  },
  ModifyConsent:{
    screen:ModifyConsent
  },
  TabNavigator:{
    screen:TabNavigator
  }
}, {
    headerMode: 'none',
    initialRouteName: 'Login',
});

export default createAppContainer(AppNavigator);