import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import PropTypes from "prop-types";

const Button = ({ buttonTitle, onButtonPress }) => {
  return (
    <Pressable
      onPress={onButtonPress}
      style={({ pressed }) => [
        styles.button,
        pressed ? styles.pressed : styles.default,
      ]}
    >
      <Text style={styles.title}>{buttonTitle}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "System",
    fontWeight: "600",
    textAlign: "center",
    textTransform: "uppercase",
  },
  button: {
    padding: 16,
    alignSelf: "center",
    width: 164,
    alignContent: "center",
    borderRadius: 4,
    paddingVertical: 16,
    marginHorizontal: 8,
    marginTop: 16,
  },
  default: { backgroundColor: "#F57C00" },
  pressed: { backgroundColor: "#78909C" },
});

Button.defaultProps = { buttonTitle: "", onButtonPress: () => {} };

Button.propTypes = {
  buttonTitle: PropTypes.string,
  onButtonPress: PropTypes.func,
};

export default Button;
