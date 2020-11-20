import React from "react";
import { StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { connect } from "react-redux";
import { resetUserData } from "../Actions/User";
import { resetQuestions } from "../Actions/Questions";

import Header from "../Components/Header";
import List from "../Components/List";
import Button from "../Components/Button";
import Section from "../Components/Section";

import { Metrics } from "../Themes";

const Results = ({ navigation, dispatch, answers, correct }) => {
  const restart = () => {
    dispatch(resetUserData());
    dispatch(resetQuestions());
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={`You scored\n${correct}/${answers.length}`} />
      <Section>
        <List data={answers} />
      </Section>
      <Button onButtonPress={restart} buttonTitle="Play Again?" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Metrics.largeMargin,
  },
});

const mapStateToProps = (state) => ({
  answers: state.userData.answers,
  correct: state.userData.correctAnswered,
});

export default connect(mapStateToProps)(Results);
