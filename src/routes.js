import React from 'react'
import {Switch, Route} from 'react-router-dom'
import App from './App' 
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Product from './Components/Product/Product'
import Form from './Components/Form/Form'

export default(
  <Switch>
    <Route exact path='/' component={Dashboard}/>
    <Route path='/product' component={Product}/>
    <Route path='/addInventory' component={Form}/>
  </Switch>
)