import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

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
    paddingVertical: 8,
  },
  title: {
    fontFamily: "System",
    fontSize: 34,
    textAlign: "center",
    fontWeight: "bold",
  },
});

Header.defaultProps = {
  title: "",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;