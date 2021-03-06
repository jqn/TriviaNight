import React, { useState, useRef, useEffect } from "react";
import {
  FlatList,
  LayoutAnimation,
  Dimensions,
  NativeModules,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import PropTypes from "prop-types";

import Card from "./Card";
import Hint from "./Hint";
import { Colors } from "../Themes";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const Item = ({ content }) => {
  return (
    <Card
      body={content}
      cardWidth={Math.round(Dimensions.get("window").width - 32)}
      cardHeight={Math.round(Dimensions.get("window").width - 32)}
      fill
      textStyle={styles.cardText}
    />
  );
};

const CardSlider = ({ data, indexCallback, initialIndex, index }) => {
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
    const backgroundColor =
      item.id === selectedId ? Colors.primary : Colors.graphite;

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

CardSlider.defaultProps = {
  data: [],
  indexCallback: () => {},
  initialIndex: 0,
  index: 0,
};

CardSlider.propTypes = {
  data: PropTypes.array,
  indexCallback: PropTypes.func,
  initialIndex: PropTypes.number,
  index: PropTypes.number,
};

export default CardSlider;
