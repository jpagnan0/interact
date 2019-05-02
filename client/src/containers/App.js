import React from "react";

import routes from "../routes";
import { ConnectedRouter } from 'connected-react-router'

// console.log(colors)
const App = ({history}) => {
  return (
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  );
}

export default App
