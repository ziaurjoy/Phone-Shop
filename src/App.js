import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'
import Bands from './components/Bands'
import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Company/:id" component={Bands} />
          <Route exact path="/Profile/" component={Profile} />
          <Route exact path="/Register/" component={Register} />
          <Route exact path="/Login/" component={Login} />
          <Route exact path="/product/:id" component={ProductDetails} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
