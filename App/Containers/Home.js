import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Header from "../Components/Header";
import Card from "../Components/Card";
import Button from "../Components/Button";
import Hint from "../Components/Hint";
import Section from "../Components/Section";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Welcome to the Trivia Challenge" />
      <Section>
        <Card
          border={false}
          body="You will be presented with 10 True of False questions."
          cardWidth="100%"
          cardHeight="50%"
        />
        <Hint text="Can you score 100%?" />
      </Section>
      <Button
        onButtonPress={() => navigation.navigate("Quiz")}
        buttonTitle="Begin"
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

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
