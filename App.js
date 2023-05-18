import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import ResultsList from "./src/components/ResultsList";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{ title: "Default Title" }}
      >
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: "Business Search",
            cardStyle: { backgroundColor: "#FFFFFF" },
          }} // override defautl title
        />
        <Stack.Screen
          name="Results"
          component={ResultsList}
          options={{
            title: "Results",
            cardStyle: { backgroundColor: "#FFFFFF" },
          }} // override default title
        />
        <Stack.Screen
          name="Details"
          component={ResultsShowScreen}
          options={{
            title: "Details",
            cardStyle: { backgroundColor: "#FFFFFF" },
          }} // override default title
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
