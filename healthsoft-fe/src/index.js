import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from "react-router-dom";
import View from "./components/view/view";
import Add from "./components/add/add";
import Edit from "./components/edit/edit";
import List from "./components/list/list";
import Home from "./components/home";

const routing = (
    <Router>
        <div>
            <Route path="/" component={Home} />
            <Route path="/view/:id" component={View} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/list" component={List} />
            <Route path="/add" component={Add} />
        </div>
    </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
