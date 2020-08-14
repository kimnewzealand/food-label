import React from "react"
import { Route} from "react-router-dom"
require('dotenv').config()

import AddFood from './AddFood'
import Header from './Header'
import Welcome from './Welcome'
import Butter from './Butter'
import FoodArrow from './FoodArrow'

const App = () => {
  console.log('Confirm env variables available', process.env)
  return (
    <>
        <Route path="/" component={Header} />
        <Route path="/" exact component={Welcome} />
        <Route path="/foodarrow" exact component={FoodArrow} />
        <Route path="/new" exact component={AddFood} />
        <Route path="/butter" exact component={Butter} />
    </>
  )
}
export default App