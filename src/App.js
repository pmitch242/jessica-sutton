import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/services' component={Services} />
                <Route exact path='/contact' component={Contact} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
