import React from "react";
import { StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";

import Header from "../Components/Header";
import Card from "../Components/Card";
import Button from "../Components/Button";
import Hint from "../Components/Hint";
import Section from "../Components/Section";

import { Metrics, Colors } from "../Themes";

const Home = ({ navigation }) => {
  const beginTrivia = () => {
    navigation.navigate("Quiz");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Welcome To The Trivia Challenge" underLine />
      <Section>
        <Card
          fill={true}
          body="You will be presented with 10 True of False questions."
          cardWidth="100%"
          cardHeight="50%"
          icon
        />
        <Hint text="Can you score 100%?" underLine />
      </Section>
      <Button onButtonPress={beginTrivia} buttonTitle="Begin" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Metrics.largeMargin,
  },
  lightText: {
    color: Colors.graphite,
  },
});

export default connect(null)(Home);
