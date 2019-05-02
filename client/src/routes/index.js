import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavigationBar from "../containers/NavigationBar";
import DashBoardContainer from "../containers/DashBoardContainer"
import SignUp from "../components/SignUp";
import Login from "../components/Login";
const routes = (
  <div>
    <NavigationBar />
    <Switch>

      <Route exact path="/dashboard" component={DashBoardContainer} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />

    </Switch>
  </div>
)

export default routes;
