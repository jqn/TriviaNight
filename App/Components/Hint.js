import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

import { Colors, Metrics, Fonts } from "../Themes";

const Hint = ({ text, textStyle, underLine }) => {
  return (
    <View style={[styles.container, underLine && styles.underLine]}>
      <Text style={[styles.bodyText, textStyle]}>{text}</Text>
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
    color: Colors.graphite,
    fontWeight: "600",
  },
  underLine: {
    borderBottomColor: Colors.secondaryLight,
    borderBottomWidth: 1,
  },
});

Hint.defaultProps = { text: "", textStyle: {}, underLine: false };

Hint.propTypes = {
  text: PropTypes.string,
  textStyle: PropTypes.object,
  underLine: PropTypes.bool,
};

export default Hint;
