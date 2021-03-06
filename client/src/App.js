import React, { Component } from 'react';
import './App.css';
import Home from './Component/Home';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './history';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="">
        <Router history={history}>
          <div>
            
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/posts/:id" exact component={Home} />
              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
        
        
      </div>
     );
  }
}
 
export default App;