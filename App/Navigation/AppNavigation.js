import React from "react";
import Home from "../Containers/Home";
import Quiz from "../Containers/Quiz";
import Results from "../Containers/Results";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Quiz" component={Quiz} />
        <RootStack.Screen name="Results" component={Results} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
