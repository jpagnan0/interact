
import 'babel-polyfill'
import React from "react";
import ReactDOM from "react-dom";
import Root from "./containers/Root";
import * as serviceWorker from "./serviceWorker";

const render = () => {
  ReactDOM.render(
    <Root />,
    document.getElementById("root")
  );
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// // Hot reloading
render()

if (module.hot) {
  // Reload components
  module.hot.accept('./containers/App', () => {
    render()
  })
}
serviceWorker.register();
