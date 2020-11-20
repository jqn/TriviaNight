import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import { FontAwesome5 } from "@expo/vector-icons";

import { Colors, Metrics, Fonts } from "../Themes";

const Card = ({ body, fill, cardWidth, cardHeight, textStyle, icon }) => {
  return (
    <View
      style={[
        styles.container,
        fill ? styles.fill : styles.default,
        { width: cardWidth, height: cardHeight },
      ]}
    >
      {icon && (
        <FontAwesome5
          name="question"
          size={60}
          color={Colors.graphite}
          style={styles.icon}
        />
      )}
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
    marginBottom: Metrics.largeMargin,
  },
  bodyText: {
    ...Fonts.style.h4,
    textAlign: "center",
    fontWeight: "700",
    color: Colors.graphite,
  },
  fill: {
    backgroundColor: Colors.secondaryLight,
    borderRadius: 4,
  },
  default: {
    backgroundColor: Colors.transparent,
  },
  icon: {
    padding: Metrics.largeMargin,
  },
});

Card.defaultProps = {
  body: "",
  border: true,
  cardWidth: 200,
  cardHeight: 200,
  textStyle: {},
  icon: false,
};

Card.propTypes = {
  body: PropTypes.string,
  border: PropTypes.bool,
  cardWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cardHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textStyle: PropTypes.object,
  icon: PropTypes.bool,
};

export default Card;
