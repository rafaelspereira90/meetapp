import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/dashboard";
import Search from "../pages/search";
import newMeetup from "../pages/newMeetup";
import Meetup from "../pages/meetup";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Profile from "../pages/profile";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/buscar" component={Search} />
    <Route path="/novoMeetup" component={newMeetup} />
    <Route path="/meetup/1" component={Meetup} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/profile" component={Profile} />
  </Switch>
);

export default Routes;
