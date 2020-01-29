import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import RootStore from "./stores";

const root = new RootStore();

ReactDOM.render(
  <Provider {...root}>
    {/* *** ...root 으로 스토어 모두 자동으로 설정 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
