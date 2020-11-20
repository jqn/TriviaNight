import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { connect } from "react-redux";
import { setQuestions } from "../Actions/Questions";
import { setAnswer, setCorrectAnswered } from "../Actions/User";

import Header from "../Components/Header";
import CardSlider from "../Components/CardSlider";
import Section from "../Components/Section";
import Button from "../Components/Button";
import Loader from "../Components/Loader";
import MaterialAlert from "../Components/MaterialAlert";

import { triviaFetch } from "../Services/TriviaApi";

import { Metrics, Colors } from "../Themes";

const Quiz = ({ navigation, dispatch, questions }) => {
  const [loading, setLoading] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(null);
  const [cardTitle, setCardTitle] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState(
    "Something went wrong, Please try again!"
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await triviaFetch(
          "?amount=10&difficulty=hard&type=boolean",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const { response_code, results } = response;

        if (response_code === 1) {
          throw new Error("No results");
        }

        if (response_code > 1) {
          throw new Error("Something went wrong, Please try again!");
        }

        let questions = results.map((r) => ({
          ...r,
          id: `${Math.floor(Math.random() * 1000)}-${Date.now()}`,
        }));
        dispatch(setQuestions(questions));
      } catch (error) {
        setAlertVisible(true);
        setAlertMessage(error.message);
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

  const handleError = () => {
    setAlertVisible(false);
    navigation.navigate("Home");
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
      <MaterialAlert
        visible={alertVisible}
        title="Error:"
        message={alertMessage}
        onCancelPress={handleError}
        onConfirmPress={handleError}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Metrics.largeMargin,
  },
  group: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const mapStateToProps = (state) => ({
  questions: state.questionData.questions,
});

export default connect(mapStateToProps)(Quiz);
