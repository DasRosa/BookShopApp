import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/header/Navbar/Navbar'
import Home from './components/body/Home/Home'
import About from './components/body/About/About'
import Error from './components/body/Error/Error'
import Test from './components/test/Test'
import Product from './components/body/Product/Product'
import Products from './components/body/Products/Products'
import Login from './components/body/Login/Login'
import Register from './components/body/Register/Register'
import Cart from './components/body/Cart/Cart'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route>
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
            <Route path='/products/:id' children={<Product />}></Route>
            <Route path='/products'>
              <Products />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
