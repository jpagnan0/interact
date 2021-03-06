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
      <Route exact path="/" render={() => <Login />}/>
      <Route path="/dashboard" render={()=> <DashBoardContainer />} />
      <Route path="/signup" render={()=> <SignUp />} />
      <Route path="/login" render={()=> <Login />} />

    </Switch>
  </div>
)

export default routes;
