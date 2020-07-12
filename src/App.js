import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/contact' component={Contact} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
