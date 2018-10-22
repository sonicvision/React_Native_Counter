import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import CoffeeOutlet from "../Components/CoffeeOutlet";
import actions from "../Actions/coffee";

class Coffee extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchOutlets();
  }
  render() {
    return this.props.isLoading ? (
      <ActivityIndicator size="large" color="#774023" />
    ) : (
      <FlatList
        data={this.props.outlets}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CoffeeOutlet outlet={item} />}
      />
    );
  }
}

const mapStateToProps = ({ coffee }) => ({
  outlets: coffee.outlets,
  isLoading: coffee.isLoading
});

// const mapDispatchToProps = dispatch => ({
//   fetchOutlets: () => dispatch({ type: "OUTLET_FETCH_REQUESTED" })
// });

export default connect(
  mapStateToProps,
  actions
)(Coffee);
