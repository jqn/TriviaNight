import React from "react";
import { useWindowDimensions, View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

const Card = ({ body, border }) => {
  const window = useWindowDimensions();

  return (
    <View
      style={[
        styles.container,
        border ? styles.border : styles.borderless,
        { width: window.width - 68, height: window.width - 68 },
      ]}
    >
      <Text style={styles.bodyText}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    alignSelf: "center",
  },
  bodyText: {
    fontFamily: "System",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "600",
  },
  border: {
    borderWidth: 1,
    borderColor: "#78909C",
  },
});

Card.defaultProps = {
  body: "You will be presented with 10 True of False questions.",
  border: true,
};

Card.propTypes = { body: PropTypes.string, border: PropTypes.bool };

export default Card;
