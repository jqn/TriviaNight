import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

import { Html5Entities } from "html-entities";
import { Ionicons } from "@expo/vector-icons";

const Item = ({ title, correct }) => (
  <View style={styles.item}>
    <Ionicons
      name={
        correct === "True"
          ? "md-checkmark-circle-outline"
          : "md-close-circle-outline"
      }
      size={35}
      color={correct === "True" ? "#F57C00" : "#4b636e"}
      style={styles.icon}
    />
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

const List = ({ data }) => {
  const entities = new Html5Entities();
  const renderItem = ({ item }) => (
    <Item
      title={entities.decode(item.question)}
      correct={item.correct_answer}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontFamily: "System",
    fontWeight: "500",
  },
  icon: {
    paddingRight: 16,
    paddingTop: 8,
  },
  content: {
    width: "90%",
    // backgroundColor: "#ECEFF1",
    padding: 8,
  },
});

export default List;
