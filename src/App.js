import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Slide, AppBar, Toolbar, Typography } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

import './App.css';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <HideOnScroll>
        <AppBar>
          {/* <Toolbar>
            <Typography variant="h6">Scroll to Hide App Bar</Typography>
          </Toolbar> */}
          <Navbar />

        </AppBar>
        </HideOnScroll>
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
