import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={ProductDetails} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
