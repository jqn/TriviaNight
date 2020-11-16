import React from "react";
import { useWindowDimensions, View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

const Card = ({ body, border, cardWidth, cardHeight }) => {
  const window = useWindowDimensions();

  return (
    <View
      style={[
        styles.container,
        border ? styles.border : styles.borderless,
        { width: cardWidth, height: cardHeight },
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
    padding: 16,
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
  body: "",
  border: true,
  cardWidth: 200,
  cardHeight: 200,
};

Card.propTypes = {
  body: PropTypes.string,
  border: PropTypes.bool,
  cardWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cardHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Card;
