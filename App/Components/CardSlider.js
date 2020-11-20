import React, { useState, useRef, useEffect } from "react";
import {
  FlatList,
  LayoutAnimation,
  Dimensions,
  NativeModules,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { Html5Entities } from "html-entities";

import Card from "./Card";
import Hint from "./Hint";
import { Colors } from "../Themes";

const { UIManager } = NativeModules;
const entities = new Html5Entities();

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const Item = ({ content }) => {
  // Use html-entities to decode entity characters in string
  return (
    <Card
      body={entities.decode(content)}
      cardWidth={Math.round(Dimensions.get("window").width - 32)}
      cardHeight={Math.round(Dimensions.get("window").width - 32)}
      fill
      textStyle={styles.cardText}
    />
  );
};

const CardSlider = ({ data, indexCallback, initialIndex, index = 0 }) => {
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

  const onViewRef = React.useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      let currentIndex = viewableItems[0].index;
      setSelectedIndex(currentIndex);

      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

      if (indexCallback) {
        indexCallback(currentIndex);
      }
    }
  });

  useEffect(() => {
    setSelectedIndex(index);
    if (index > 0) {
      slider.current.scrollToIndex({ animated: true, index: index });
    }
  }, [index]);

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
    <SafeAreaView>
      <FlatList
        ref={slider}
        data={data}
        horizontal
        pagingEnabled={true}
        scrollEnabled={false}
        snapToInterval={totalItemWidth}
        decelerationRate="fast"
        bounces={false}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        windowSize={1}
        initialNumToRender={1}
        maxToRenderPerBatch={1}
        removeClippedSubSafeAreaViews={true}
        initialScrollIndex={initialIndex}
        keyExtractor={({ id }) => id}
        extraData={selectedId}
        getItemLayout={(data, index) => ({
          length: totalItemWidth,
          offset: totalItemWidth * index,
          index,
        })}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
      <Hint text={`${selectedIndex + 1} of ${data.length}`} underLine />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardText: {
    color: Colors.graphite,
  },
});

export default CardSlider;
