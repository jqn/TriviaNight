import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import PropTypes from "prop-types";

import Header from "../Components/Header";
import Card from "../Components/Card";
import CardSlider from "../Components/CardSlider";
import Hint from "../Components/Hint";
import Section from "../Components/Section";
import Button from "../Components/Button";
import Loader from "../Components/Loader";

const Quiz = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
        );
        // console.log(
        //   "Quiz -> response",
        //   decodeURIComponent(JSON.parse(response))
        // );
        const { status, data } = response;
        if (status !== 200) {
          throw new Error("Something went wrong!");
        }

        setData(data.results);
      } catch (error) {
        console.log("Quiz -> error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={data[0].category} />
      <Section>
        <CardSlider data={data} />
      </Section>
      <View style={styles.group}>
        <Button buttonTitle="true" />
        <Button buttonTitle="false" />
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
    justifyContent: "space-evenly",
  },
});

Quiz.defaultProps = {};

Quiz.propTypes = {};

export default Quiz;
