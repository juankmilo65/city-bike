import React from "react";
import { Route, Switch } from "react-router-dom";
import useBikeMap from "./components/useBikesMap"

function App() {
  return <Switch><Route exact path="/" component={useBikeMap} /></Switch>
}

export default App