import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

const Hint = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bodyText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  bodyText: {
    fontFamily: "System",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "500",
  },
});

Hint.defaultProps = { text: "" };

Hint.propTypes = { text: PropTypes.string };

export default Hint;
