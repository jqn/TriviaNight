import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Header from "../Components/Header";
import Card from "../Components/Card";
import Button from "../Components/Button";
import StepsTracker from "../Components/StepsTracker";
import Section from "../Components/Section";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Section>
        <Card border={false} />
        <StepsTracker />
      </Section>
      <Button />
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
