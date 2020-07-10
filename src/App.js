import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';


function App() {

  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </ThemeProvider>
      </Router>

    </div>
  );
}

export default App;
