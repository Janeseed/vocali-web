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
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/home" component={Home} />
          <Route path="/info" component={InfoSet} />
          <Route path="/songpref" component={SongPref} />
          <Route path="/pitch" component={Pitch} />
          <Route path="/result" component={Result} />
          {/* <Route path="/weight" component={Weight} /> */}
          <Route path="/likelist" component={LikeList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
