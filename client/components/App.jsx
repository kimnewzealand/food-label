import React, { Component } from "react"
import { Route} from "react-router-dom";
import AddFood from './AddFood'

const App = () => {
  return (
    <>
        <h1> Welcome to the Food Label Data Viz Project!</h1>
        <Route path="/addfood" exact component={AddFood} />
    </>
  )
}

export default App
