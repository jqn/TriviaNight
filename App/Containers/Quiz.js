import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { setQuestions } from "../Actions/Questions";
import { setAnswer, setCorrectAnswered } from "../Actions/User";

import Header from "../Components/Header";
import CardSlider from "../Components/CardSlider";
import Section from "../Components/Section";
import Button from "../Components/Button";
import Loader from "../Components/Loader";

const Quiz = ({ navigation, dispatch, questions }) => {
  const [loading, setLoading] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(null);
  const [cardTitle, setCardTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
        );
        console.log("Quiz -> response", response);
        const { status, data } = response;
        if (status !== 200) {
          throw new Error("Something went wrong!");
        }

        let questions = data.results.map((r) => ({
          ...r,
          id: `${Math.floor(Math.random() * 1000)}-${Date.now()}`,
        }));
        dispatch(setQuestions(questions));
      } catch (error) {
        console.log("Quiz -> error", error);
      } finally {
        setLoading(false);
        setQuestionIndex(0);
      }
    };

    if (questions.length === 0) {
      fetchData();
      return;
    }
    setLoading(false);
    setQuestionIndex(0);
  }, []);

  useEffect(() => {
    if (questionIndex !== null && questions.length !== 0) {
      setCardTitle(questions[questionIndex].category);
    }
  }, [questionIndex]);

  const next = (answer) => {
    if (questionIndex < questions.length - 1) {
      let correctAnswer =
        questions[questionIndex].correct_answer === "True" ? true : false;

      let isCorrect = false;

      if (correctAnswer === answer) {
        dispatch(setCorrectAnswered());
        isCorrect = true;
      }

      dispatch(
        setAnswer({
          id: questions[questionIndex].id,
          answer: answer,
          question: questions[questionIndex].question,
          correct: isCorrect,
        })
      );

      setQuestionIndex((questionIndex) => questionIndex + 1);

      return;
    }
    navigation.navigate("Results");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={cardTitle} />
      <Section>
        <CardSlider data={questions} index={questionIndex} />
      </Section>
      <View style={styles.group}>
        <Button buttonTitle="true" onButtonPress={() => next(true)} />
        <Button buttonTitle="false" onButtonPress={() => next(false)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  group: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

Quiz.defaultProps = {};

Quiz.propTypes = {};

const mapStateToProps = (state) => ({
  questions: state.questionData.questions,
});

export default connect(mapStateToProps)(Quiz);
