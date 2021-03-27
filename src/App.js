import React, { useEffect } from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'
import Bands from './components/Bands'
import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'
import axios from 'axios'
import { useGlobalState } from './state/provider'
import { profile } from './state/reducer'
const App = () => {
  const userToken = window.localStorage.getItem('token')

  const [{ profile, pagereload }, dispatch] = useGlobalState()
  // console.log(profile, 'profile')
  useEffect(() =>{
    if (userToken !== null){
      const getData = async() =>{
        await axios({
          method: 'get',
          url: 'http://localhost:8000/userprofile/api/proflie/view',
          headers:{
            Authorization: `token ${userToken}`
          }
        }).then(response=>{
          // console.log(response.data, "response user")
          dispatch({
            type: "ADD_PROFILE",
            profile: response.data
          })
        })
        
      }
      getData()
    }
  },[pagereload])
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
