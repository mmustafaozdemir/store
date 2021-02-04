import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./configureStore";

import Main from "./containers/main/main";

const { persistor, store } = configureStore();

const App = ({ history }) => {
  return (
    <Provider store={store}>
        <Main />
    </Provider>
  );
};

export default App;
