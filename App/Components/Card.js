import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

import { Colors, Metrics, Fonts } from "../Themes";

const Card = ({ body, fill, cardWidth, cardHeight, textStyle }) => {
  return (
    <View
      style={[
        styles.container,
        fill ? styles.fill : styles.default,
        { width: cardWidth, height: cardHeight },
      ]}
    >
      <Text style={[styles.bodyText, textStyle]}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: Metrics.largeMargin,
    alignSelf: "center",
    backgroundColor: Colors.backGround,
  },
  bodyText: {
    ...Fonts.style.h4,
    textAlign: "center",
    fontWeight: "700",
    color: Colors.black,
  },
  fill: {
    backgroundColor: Colors.placeHolder,
  },
  default: {
    backgroundColor: Colors.transparent,
  },
});

Card.defaultProps = {
  body: "",
  border: true,
  cardWidth: 200,
  cardHeight: 200,
  textStyle: {},
};

Card.propTypes = {
  body: PropTypes.string,
  border: PropTypes.bool,
  cardWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cardHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textStyle: PropTypes.object,
};

export default Card;
