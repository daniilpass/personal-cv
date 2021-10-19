import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index.js";

import App from "./App.js";

const root = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(root,  document.getElementById("root"));
