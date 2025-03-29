import React, { useState } from "react";

// import logo from "./logo.svg";
// import poweredBy from "./powered-by-vitawind-dark.png";
import Sections from "./components/Sections"
import Article from "./Article"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>

      {/* <Switch>
        <Route exact path="/" component={Sections} />
        <Route exact path="/article/:id" component={Article} />
      </Switch> */}
      <Switch>
        <Route exact path="/">
          <Sections />
        </Route>
        <Route path="/article/:aticleId">
          <Article />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
