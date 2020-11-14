import React, { useState, useEffect } from "react";
import About from "./Pages/About";
import Nav from "./components/Nav";
import "./portfolio.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";

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
          <Footer/>
      </div>
    </Router>

)}

export default App;
