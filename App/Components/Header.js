import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

import { Colors, Metrics, Fonts } from "../Themes";

const Header = ({ title, titleStyle, underLine }) => {
  return (
    <View style={[styles.container, underLine && styles.underLine]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Metrics.baseMargin,
    height: 100,
  },
  title: {
    ...Fonts.style.h3,
    textAlign: "center",
    fontWeight: "500",
    color: Colors.graphite,
  },
  underLine: {
    borderBottomColor: Colors.secondaryLight,
    borderBottomWidth: 1,
  },
});

Header.defaultProps = {
  title: "",
  titleStyle: {},
  underLine: false,
};

Header.propTypes = {
  title: PropTypes.string,
  titleStyle: PropTypes.object,
  underLine: PropTypes.bool,
};

export default Header;
