import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import CoffeeOutlet from "../Components/CoffeeOutlet";

class PlainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchOutlets();
  }
  render() {
    return (
      <FlatList
        data={this.props.outlets}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CoffeeOutlet outlet={item} />}
      />
    );
  }
}

const mapStateToProps = ({ coffee }) => ({ outlets: coffee.outlets });

const mapDispatchToProps = dispatch => ({
  fetchOutlets: () => dispatch({ type: "OUTLET_FETCH_REQUESTED" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlainPage);
