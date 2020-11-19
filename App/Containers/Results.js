import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { connect } from "react-redux";
import { resetUserData } from "../Actions/User";
import { setQuestions } from "../Actions/Questions";

import Header from "../Components/Header";
import List from "../Components/List";
import Button from "../Components/Button";
import Hint from "../Components/Hint";
import Section from "../Components/Section";

const Results = ({ navigation, dispatch, questions }) => {
  const restart = () => {
    dispatch(resetUserData());
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"You scored\n3/10"} />
      <Section>
        <List data={questions} />
      </Section>
      <Button onButtonPress={restart} buttonTitle="Play Again?" />
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

const mapStateToProps = (state) => ({
  questions: state.questionData.questions,
});

export default connect(mapStateToProps)(Results);
