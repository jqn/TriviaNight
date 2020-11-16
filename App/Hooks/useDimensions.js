import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState({ width: 200, height: 200 });

  useEffect(() => {
    const updateState = () => {
      const { height, width } = Dimensions.get("window");
      if (height >= width) {
        setDeviceOrientation("PORTRAIT");
      } else {
        setDeviceOrientation("LANDSCAPE");
      }
    };

    updateState(); // for initial render
    Dimensions.addEventListener("change", updateState);
    return () => Dimensions.removeEventListener("change", updateState);
  }, []);

  return deviceOrientation;
};
