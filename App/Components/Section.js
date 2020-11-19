import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Section = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

Section.defaultProps = { children: null };

Section.propTypes = { children: PropTypes.node };

export default Section;
