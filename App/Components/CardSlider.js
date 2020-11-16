import React, { useState, useRef } from "react";
import {
  FlatList,
  Image,
  LayoutAnimation,
  Dimensions,
  NativeModules,
  StyleSheet,
  View,
} from "react-native";

import { Html5Entities } from "html-entities";

import Card from "./Card";

const { UIManager } = NativeModules;
const entities = new Html5Entities();

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#454545",
  },
  photo: {
    width: Math.round(Dimensions.get("window").width - 32),
    height: 200,
  },
});

const Item = ({ content }) => {
  console.log("Item -> content", content);
  // Use html-entities to decode entity characters in string
  return (
    <Card
      body={entities.decode(content)}
      cardWidth={Math.round(Dimensions.get("window").width - 32)}
      cardHeight={Math.round(Dimensions.get("window").width - 32)}
    />
  );
};

const CardSlider = ({
  data,
  indexCallback,
  indicator = true,
  initialIndex,
}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  const itemWidth = Math.round(Dimensions.get("window").width - 32);
  const separatorWidth = 0;
  const totalItemWidth = itemWidth + separatorWidth;

  const slider = useRef(null);

  const viewConfigRef = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
    waitForInteraction: true,
    minimumViewTime: 5,
  });

  const onViewRef = React.useRef(({ viewableItems, changed }) => {
    if (viewableItems.length > 0) {
      let currentIndex = viewableItems[0].index;
      setSelectedIndex(currentIndex);

      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

      if (indexCallback) {
        indexCallback(currentIndex);
      }
    }
  });

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#727272" : "#3a3a3a";

    const setIndex = (selectedItem) => {
      setSelectedId(selectedItem.id);
      indexCallback(selectedItem.id);
    };

    return (
      <Item
        content={item.question}
        onPress={() => setIndex(item)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <FlatList
      ref={slider}
      data={data}
      horizontal
      pagingEnabled={true}
      snapToInterval={totalItemWidth}
      decelerationRate="fast"
      bounces={false}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      windowSize={1}
      initialNumToRender={1}
      maxToRenderPerBatch={1}
      removeClippedSubviews={true}
      initialScrollIndex={initialIndex}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
      getItemLayout={(data, index) => ({
        length: totalItemWidth,
        offset: totalItemWidth * index,
        index,
      })}
      onViewableItemsChanged={onViewRef.current}
      viewabilityConfig={viewConfigRef.current}
    />
  );
};

export default CardSlider;
