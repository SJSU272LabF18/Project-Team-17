import React from "react";
import { View, Text, Button } from "react-native";
import {
  StackActions,
  NavigationActions,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import NotificationScreen from "./NotificationScreen";
import Requests from "./Requests";
import Contracts from "./Contracts";

// const TabNavigator = createBottomTabNavigator({
//   Requests: { screen: Requests },
//   NotificationScreen: { screen: NotificationScreen },
// });
// export default createAppContainer(TabNavigator);

import Ionicons from "react-native-vector-icons/Ionicons";
import OverLay from "./OverLay";

export default createBottomTabNavigator(
  {
    Home: Requests,
    Notification: NotificationScreen,
    Contracts: Contracts,
    Help: OverLay
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-home${focused ? "" : ""}`;
        } else if (routeName === "Notification") {
          iconName = `ios-notifications${focused ? "" : ""}`;
        } else if (routeName === "Contracts") {
          iconName = `ios-contract${focused ? "" : ""}`;
        }else if (routeName === "Help") {
          iconName = `ios-information-circle${focused ? "" : ""}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      }
    }),
    tabBarOptions: {
      style: {
        backgroundColor: "#00adff"
      },
      activeTintColor: "white",
      inactiveTintColor: "black"
    }
  }
);
