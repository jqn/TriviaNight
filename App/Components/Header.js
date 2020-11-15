import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

const Header = ({ headerTitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{headerTitle}</Text>
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
  headerTitle: "Welcome to the Trivia Challenge",
};

headerTitle: "Welcome to the Trivia Challenge",
  (Header.propTypes = { headerTitle: PropTypes.string });

export default Header;
