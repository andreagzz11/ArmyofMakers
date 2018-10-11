import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from './views/profile';
import MainContainer from './components/MainContainer';
import * as serviceWorker from './serviceWorker';

render(
  <Router>
    <App>
      <Switch>
        <Route path={"/profile/:id"} render={() => ( <Profile /> )} />
        <Route path="/" render={() => ( <MainContainer /> )} />
      </Switch>
    </App>
  </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
