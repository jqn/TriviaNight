import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Header from "../Components/Header";
import List from "../Components/List";
import Button from "../Components/Button";
import Hint from "../Components/Hint";
import Section from "../Components/Section";

const Results = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"You scored\n3/10"} />
      <Section>
        <List />
      </Section>
      <Button
        onButtonPress={() => navigation.navigate("Home")}
        buttonTitle="Play Again?"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

Results.defaultProps = {};

Results.propTypes = {};

export default Results;
