import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

const StepTracker = ({ text }) => {
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

StepTracker.defaultProps = { text: "Can you score 100%?" };

StepTracker.propTypes = { text: PropTypes.string };

export default StepTracker;
