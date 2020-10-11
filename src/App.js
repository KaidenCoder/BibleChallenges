import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import About from './challenge/About';
import Sixty from './challenge/sixty';
import Testimonials from './challenge/Testimonials';
import Thirty from './challenge/thirty';
import Header from './components/Header';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router >

      <Navbar />
      <Header />
      <Route exact path='/' component={Thirty} />
      <Route exact path='/testimonials' component={Testimonials} />
      <Route exact path='/about' component={About} />
    </Router>
  );
}

export default App;
