import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import App from "./App";
import "./styles/index.scss";
import { getPost } from "./actions/post.action";
import { getUser } from "./actions/user.action";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)) // Enlever en production
);

store.dispatch(getPost());
store.dispatch(getUser());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById("root"));
