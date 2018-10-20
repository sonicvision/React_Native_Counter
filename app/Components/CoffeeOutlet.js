import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./Styles/CoffeeOutletStyles";

const CoffeeOutlet = ({ outlet }) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={{
        uri: outlet.image_url
      }}
    />
    <Text style={styles.name}>{outlet.name}</Text>
  </View>
);

export default CoffeeOutlet;
