import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

import PropTypes from "prop-types";

import { Colors, Metrics, Fonts } from "../Themes";

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
    color: Colors.white,
    ...Fonts.style.h5,
    fontWeight: "500",
    textAlign: "center",
    textTransform: "uppercase",
  },
  button: {
    padding: Metrics.largeMargin,
    alignSelf: "center",
    width: 164,
    alignContent: "center",
    borderRadius: 4,
    paddingVertical: Metrics.largeMargin,
    marginHorizontal: Metrics.baseMargin,
    marginTop: Metrics.largeMargin,
    marginBottom: Metrics.baseMargin,
  },
  default: { backgroundColor: Colors.secondary },
  pressed: { backgroundColor: Colors.primaryDark },
});

Button.defaultProps = { buttonTitle: "", onButtonPress: () => {} };

Button.propTypes = {
  buttonTitle: PropTypes.string,
  onButtonPress: PropTypes.func,
};

export default Button;
