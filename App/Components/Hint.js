import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

import { Colors, Metrics, Fonts } from "../Themes";

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
    padding: Metrics.largeMargin,
  },
  bodyText: {
    ...Fonts.style.h4,
    textAlign: "center",
    color: Colors.black,
    fontWeight: "600",
  },
});

Hint.defaultProps = { text: "" };

Hint.propTypes = { text: PropTypes.string };

export default Hint;
