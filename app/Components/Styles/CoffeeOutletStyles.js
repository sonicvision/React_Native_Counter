import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    elevation: 10,
    shadowColor: "grey",
    shadowOpacity: 1,
    shadowOffset: { width: 5, height: 5 },
    padding: 10
  },
  image: {
    flex: 1,
    height: 250,
    flexDirection: "row",
    marginBottom: -30
  },
  name: {
    flex: 1,
    flexDirection: "row",
    textAlign: "left",
    color: "white",
    padding: 5,
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    opacity: 0.8
  }
});

export default styles;
