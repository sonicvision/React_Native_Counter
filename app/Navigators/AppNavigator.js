import Counter from "../Containers/Counter";
import Coffee from "../Containers/Coffee";

import { StackNavigator } from "react-navigation";

const StackApp = StackNavigator(
  {
    Coffee: { screen: Coffee },
    Counter: { screen: Counter }
  },
  {
    initialRouteName: "Coffee"
  }
);

export default StackApp;
