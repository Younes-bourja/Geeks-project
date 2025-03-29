import React, { useState } from "react";

import logo from "./logo.svg";
import poweredBy from "./powered-by-vitawind-dark.png";
 import Sections from "./components/Sections"
import Article from "./Article"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0);

  return (

      <Router>
    
         <Switch>
        <Route exact  path="/" component={Sections} />
        <Route exact path="/article/:id" component={Article} />
      </Switch>
    </Router>
   
  );
}

export default App;
