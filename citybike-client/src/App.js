import React from "react";
import { Route, Switch } from "react-router-dom";
import useBikeMap from "./components/useBikesMap"
import useMapHistory from "./components/useMapHistory";
import useCheckHistory from "./components/useChekHistory"

function App() {
  return <Switch>
    <Route exact path="/" component={useBikeMap} />
    <Route path="/history" component={useMapHistory} />
    <Route path="/mapHistory" component={useCheckHistory} />
  </Switch>
}

export default App