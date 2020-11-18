import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { addPlayQuestions } from "../Actions/Play";

import Header from "../Components/Header";
import CardSlider from "../Components/CardSlider";
import Section from "../Components/Section";
import Button from "../Components/Button";
import Loader from "../Components/Loader";

const Quiz = ({ navigation, dispatch, questions }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
        );
        const { status, data } = response;
        if (status !== 200) {
          throw new Error("Something went wrong!");
        }

        let questions = data.results.map((r) => ({
          ...r,
          id: `${Math.floor(Math.random() * 1000)}`,
        }));
        setData(questions);
        dispatch(addPlayQuestions(questions));
      } catch (error) {
        console.log("Quiz -> error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // if (!activePlay) {
    //   fetchData();
    // } else {
    //   setLoading(false);
    // }
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={questions[0].category} />
      <Section>
        <CardSlider data={questions} />
      </Section>
      <View style={styles.group}>
        <Button buttonTitle="true" />
        <Button
          buttonTitle="false"
          onButtonPress={() => navigation.navigate("Results")}
        />
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
  // activePlay: state.play.active,
  questions: state.questionData.questions,
});

export default connect(mapStateToProps)(Quiz);
