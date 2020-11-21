import React from "react";
import { ActivityIndicator, View, StyleSheet, Text } from "react-native";
import { Colors } from "../Themes";

import PropTypes from "prop-types";

const Loader = ({ message }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.graphite} />
      <Text style={styles.text}>{message}</Text>
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

Loader.defaultProps = { message: "Loading" };

Loader.propTypes = {
  message: PropTypes.string,
};

export default Loader;
