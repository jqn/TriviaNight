import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const Item = ({ title, correct }) => (
  <View style={styles.item}>
    <Ionicons
      name={correct ? "md-checkmark-circle-outline" : "md-close-circle-outline"}
      size={35}
      color={correct ? "#F57C00" : "#4b636e"}
      style={styles.icon}
    />
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

const List = ({ data }) => {
  const renderItem = ({ item }) => (
    <Item title={item.question} correct={item.correct} />
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
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#cfd8dc",
  },
});

export default List;
