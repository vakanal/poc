import * as React from "react";
import * as ReactDOM from "react-dom";

import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";

import thunk from "redux-thunk";
import * as reducers from "./ducks";
import services from "./services";

import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(
  combineReducers({
    ...reducers,
    form: formReducer
  }),
  applyMiddleware(thunk.withExtraArgument(services))
);

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App history={history} />
    </Router>
  </Provider>,
  document.getElementById("root") as HTMLElement
);

registerServiceWorker();
