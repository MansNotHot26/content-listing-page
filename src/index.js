import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import reducer1 from "./reducers/reducer1";
import reducer2 from "./reducers/reducer2";
import reducer3 from "./reducers/reducer3";

import * as serviceWorker from "./serviceWorker";

const rootReducer = combineReducers({
  page1: reducer1,
  page2: reducer2,
  page3: reducer3,
});
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
