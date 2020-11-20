import React from "react";
import { Modal, View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

import { Colors, Metrics, Fonts } from "../Themes";

import Button from "./Button";

const MaterialAlert = ({
  visible,
  title,
  message,
  onCancelPress,
  onConfirmPress,
  confirmTitle,
  cancelTitle,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      supportedOrientations={["portrait", "landscape"]}
    >
      <View style={styles.container}>
        <View style={[styles.alertContainer, styles.portrait]}>
          {!!title && (
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
          )}
          <Text style={styles.message}>{message}</Text>
          <View style={styles.group}>
            <Button buttonTitle={cancelTitle} onButtonPress={onCancelPress} />
            <Button buttonTitle={confirmTitle} onButtonPress={onConfirmPress} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  alertContainer: {
    backgroundColor: Colors.white,
    marginHorizontal: 16,
    padding: 16,
  },
  button: {
    marginHorizontal: 8,
  },
  buttonTitle: {
    color: Colors.secondary,
  },
  container: {
    backgroundColor: Colors.windowTint,
    flex: 1,
    justifyContent: "center",
  },
  group: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: Metrics.baseMargin,
    marginTop: Metrics.largeMargin,
  },
  landscape: { alignSelf: "center", width: "50%" },
  message: {
    ...Fonts.style.h5,
    fontSize: Fonts.size.h4,
    fontWeight: "400",
    paddingBottom: Metrics.doubleBaseMargin,
  },
  portrait: { alignSelf: "center", width: "90%" },
  title: {
    ...Fonts.style.h4,
    fontWeight: "bold",
  },
  titleContainer: {
    paddingBottom: 16,
  },
});

MaterialAlert.defaultProps = {
  visible: false,
  onCancelPress: () => {},
  onConfirmPress: () => {},
  title: "Message title",
  message: "Message body",
  cancelTitle: "Cancel",
  confirmTitle: "Ok",
};

MaterialAlert.propTypes = {
  visible: PropTypes.bool,
  onCancelPress: PropTypes.func,
  onConfirmPress: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string,
  confirmTitle: PropTypes.string,
  cancelTitle: PropTypes.string,
};

export default MaterialAlert;
