import * as React from "react";
import * as ReactDOM from "react-dom";

import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducer as formReducer } from "redux-form";

import thunk from "redux-thunk";
import * as reducers from "./ducks";
import services from "./services";

import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk.withExtraArgument(services))
);

const reducer = combineReducers({
  ...reducers,
  form: formReducer
});

const store = createStore(reducer, enhancer);

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
