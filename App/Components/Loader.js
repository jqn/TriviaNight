import React from "react";
import { ActivityIndicator, View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#4B636E" />
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
    color: "#4B636E",
  },
});

Loader.defaultProps = {};

Loader.propTypes = {};

export default Loader;
