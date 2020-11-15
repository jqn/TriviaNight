import React from "react";
import { View, StatusBar, StyleSheet, Text } from "react-native";

import RootNavigator from "../Navigation/AppNavigation";

const Root = () => {
  return (
    <View style={styles.container}>
      <RootNavigator />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});

export default Root;
