import React from "react";
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

ReactDOM.render(
  <HashRouter>
    <main>
      <Switch onUpdate={() => window.scrollTo(0, 0)} >
        <Route exact path='/' component={LandingPage}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/portfolio' component={PortfolioPage}/>
        <Route path='/contact' component={ContactPage}/>
      </Switch>
    </main>
  </HashRouter>,
  document.getElementById('app')
);
