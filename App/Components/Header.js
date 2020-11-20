import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

import { Colors, Metrics, Fonts } from "../Themes";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
    ...Fonts.style.h2,
    textAlign: "center",
    fontWeight: "500",
    color: Colors.black,
  },
});

Header.defaultProps = {
  title: "",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
