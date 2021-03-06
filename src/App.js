import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Start from "./Start";
import InfoSet from "./InfoSet";
import SongPref from "./SongPref";
import Pitch from "./PitchDetect";
import Home from "./Home";
import Result from "./Result";
// import Weight from "./Weight";
import LikeList from "./List";

function App() {
  return (
    <>
      <Router basename="/vocali-web">
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/info" component={InfoSet} />
          <Route exact path="/songpref" component={SongPref} />
          <Route exact path="/pitch" component={Pitch} />
          <Route exact path="/result" component={Result} />
          {/* <Route exact path="/weight" component={Weight} /> */}
          <Route exact path="/likelist" component={LikeList} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
