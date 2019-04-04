import React from "react"
import ReactDOM from 'react-dom';
import App from "./App"
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import Vehicles from "./Vehicles";

ReactDOM.render((
    <Router>
      <div>
        <Switch>
          <Route exact path="/" exact component={App} />
          <Route exact path="/vehicles" component={Vehicles} />
        </Switch>
      </div>
    </Router>
    )
,document.getElementById('root'));