import React from "react";
import { ActivityIndicator, View, StyleSheet, Text } from "react-native";
import { Colors } from "../Themes";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.graphite} />
      <Text style={styles.text}>Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontFamily: "System",
    fontWeight: "600",
    textTransform: "uppercase",
    paddingTop: 8,
    color: Colors.graphite,
  },
});

export default Loader;
