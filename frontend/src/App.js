import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/header/Navbar/Navbar'
import Home from './components/body/Home/Home'
import About from './components/body/About/About'
import Error from './components/body/Error/Error'
import Test from './components/test/Test'
import Products from './components/body/Products/Products'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/test'>
          <Test />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
