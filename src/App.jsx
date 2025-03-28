import React, { useState } from "react";

import logo from "./logo.svg";
import poweredBy from "./powered-by-vitawind-dark.png";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sections from "./components/Sections"
import Hero from "./components/Hero"
import Article from "./Article"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0);

  return (

      <Router>
    
         <Switch>
        <Route exact  path="/" component={Sections} />
        <Route exact path="/article" component={Article} />
      </Switch>
    </Router>
   
  );
}

export default App;
