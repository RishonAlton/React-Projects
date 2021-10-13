import React from 'react'
import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import MovieInfo from "./MovieInfo"


const App = () => {

  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies/:id" children={<MovieInfo />} />
    </Switch>
  )

}


export default App
