import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./src/store/saga/videosSaga";
import videosReducer from "./src/store/reducers/videosReducer";
import { SafeAreaView } from "react-native";
import Navigator from "./src/Navigation/Navigator";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Octicon from "react-native-vector-icons/Octicons";

Icon.loadFont();
Octicon.loadFont();

const App = () => {
  const rootReducer = combineReducers({ videoList: videosReducer });
  const middleWare = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(middleWare));
  middleWare.run(rootSaga);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
