import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Start from "./Start";
import InfoSet from "./InfoSet";
import SongPref from "./SongPref";
import Pitch from "./PitchDetect";
import Home from "./Home";
import Result from "./Result";
import Weight from "./Weight";

function App() {
  return (
    <Router>
      <div>
        {/*
                <NavLink exact activeClassName="active" to="/">Start</NavLink>
                <NavLink activeClassName="active" to="/info">Information Setting</NavLink>
                <NavLink activeClassName="active" to="/songpref">Song Preference</NavLink>
                <NavLink activeClassName="active" to="/pitch">Pitch Detector</NavLink>
                */}

        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/home" component={Home} />
          <Route path="/info" component={InfoSet} />
          <Route path="/songpref" component={SongPref} />
          <Route path="/pitch" component={Pitch} />
          <Route path="/result" component={Result} />
          <Route path="/weight" component={Weight} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
