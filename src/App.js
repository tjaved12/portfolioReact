import React, { useState, useEffect } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import "./portfolio.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {

return(
<Router>
      <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={About} />
             <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
      </div>
    </Router>
)}

export default App;
