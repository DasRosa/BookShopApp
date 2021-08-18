import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './components/header/Navbar/Navbar'
import Home from './components/body/Home/Home'
import Products from './components/body/Products/Products'
import Error from './components/body/Error/Error'

import Product from './components/body/Product/Product'
import EditProduct from './components/body/EditProduct/EditProduct'
import AddProduct from './components/body/AddProduct/AddProduct'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route path='/products/add'>
          <AddProduct />
        </Route>
        <Route exact path='/products/:id' children={<Product />}></Route>
        {/* <Route path='/products/:id/edit'>
          <EditProduct />
        </Route> */}
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
