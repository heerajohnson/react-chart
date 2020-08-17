import React, { useEffect, useState } from "react";
import Graph2 from "./pages/Graph2";
import Graph1 from "./pages/Graph1";
import Graph from "./pages/Graph";
// import Nav from "./Nav";


import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
       
          <Route exact path="/" component={Graph2} />
         
          <Route path="/graph" component={Graph} />
          <Route path="/about" component={Graph1} />
        </Switch>
     
      </div>
    </Router>
  );
}

export default App;
