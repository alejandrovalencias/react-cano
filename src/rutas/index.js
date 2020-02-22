import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rutas from './routes';

class Routes extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
              {Rutas.map((props, key) => <Route key={key} exact path={props.url} component={props.component} />)}
        </Switch>
      </Router>
    );
  }
}

export default Routes;