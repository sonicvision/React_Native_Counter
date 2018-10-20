/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import Counter from "./Counter";
import PlainPage from "./PlainPage";
import { Provider } from "react-redux";
import store from "../Store";
import { StackNavigator } from "react-navigation";

const StackApp = StackNavigator(
  {
    Home: { screen: PlainPage },
    Counter: { screen: Counter }
  },
  {
    initialRouteName: "Counter"
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StackApp />
      </Provider>
    );
  }
}
