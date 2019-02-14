import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
          <Router>
            <div className="App">
              <Header branding="ExampleCoach"/>
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Main}/>
                </Switch>
              </div>
            </div>
          </Router>
    );
  }
}

export default App;
