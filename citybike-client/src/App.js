import React from "react";
import { Route, Switch } from "react-router-dom";
import useBikeMap from "./components/useBikesMap"
import useMapHistory from "./components/useMapHistory";

function App() {
  return <Switch>
    <Route exact path="/" component={useBikeMap} />
    <Route path="/history" component={useMapHistory} />
  </Switch>
}

export default App