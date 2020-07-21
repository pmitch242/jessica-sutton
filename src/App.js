import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Slide, AppBar, useScrollTrigger, makeStyles } from '@material-ui/core';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

import './App.css';

const useStyle = makeStyles({
  navbar: {
    backgroundColor: '#001639d1',
  }
})

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function App() {
  const classes = useStyle();

  return (
    <div className="App">
      <Router>
        <HideOnScroll>
          <AppBar className={classes.navbar}>
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
