import React from "react";
import { Text, View, Button } from "react-native";
import styles from "./Styles/CounterAppStyles";

const CounterApp = ({ counter, increment, decrement, removeCounter }) => (
  <View style={styles.container}>
    <Button title="-" onPress={() => decrement(counter.id)} />
    <Text style={styles.welcome}>{counter.value}</Text>
    <Button title="+" onPress={() => increment(counter.id)} />
    <Button title="X" onPress={() => removeCounter(counter.id)} />
  </View>
);

export default CounterApp;
