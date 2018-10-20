import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import CounterApp from "../Components/CounterApp";
import styles from "./Styles/CounterStyles";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.counterContainer}>
        {this.props.counter.counters.map((counter, index) => (
          <CounterApp
            key={counter.id}
            index={index}
            counter={counter}
            increment={this.props.increment}
            decrement={this.props.decrement}
            removeCounter={this.props.removeCounter}
          />
        ))}
        <TouchableOpacity
          onPress={this.props.addCounter}
          style={styles.buttonContainer}
          title="Add Counter"
        >
          <Text>Add Counter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("Home")}
          style={styles.buttonContainer}
          title="Go to Plain"
        >
          <Text>Go to Plain</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = ({ counter }) => ({
  counter
});

const mapDispatchToProps = dispatch => ({
  addCounter: () => dispatch({ type: "ADD_COUNTER" }),
  removeCounter: index => dispatch({ type: "REMOVE_COUNTER", index }),
  increment: id => dispatch({ type: "INCREMENT", id }),
  decrement: id => dispatch({ type: "DECREMENT", id })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
