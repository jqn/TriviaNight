import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import { Colors } from "../Themes";

import RootNavigator from "../Navigation/AppNavigation";

const Root = () => {
  return (
    <View style={styles.container}>
      <RootNavigator />
      <StatusBar barStyle="dark-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backGround,
  },
});

export default Root;
