import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TemporaryDrawer from './components/navbars/TemporaryDrawer';
import TopNav from './components/navbars/TopNav';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <TemporaryDrawer />
      <TopNav />

      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
