import React, { Component } from "react"
import { Route} from "react-router-dom";

import AddFood from './AddFood'
import Header from './Header'
import Welcome from './Welcome'

const App = () => {
  return (
    <>
        <Route path="/" component={Header} />
        <Route path="/" exact component={Welcome} />
        <Route path="/addfood" exact component={AddFood} />
    </>
  )
}
export default App