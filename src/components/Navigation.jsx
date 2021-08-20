import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Content from "./Content";
export default function Navigation() {
  return (
    <Router>
      <Link to="/home">Home</Link>
      <Switch>
        <Route path="/">
          <Content />
        </Route>
      </Switch>
    </Router>
  );
}
