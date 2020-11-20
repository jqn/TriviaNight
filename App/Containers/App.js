import "react-native-gesture-handler";
import React from "react";
import { SplashScreen } from "expo";

import { Provider } from "react-redux";
import store from "../Store";

import RootContainer from "./RootContainer";

const App = () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
};

export default App;
