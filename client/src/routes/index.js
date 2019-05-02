import React from 'react'
import { Route, Switch } from 'react-router'
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
