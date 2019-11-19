import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";

import Header from "./Components/Header";
import CardContainer from "./Components/CardContainer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <br />
      <br />
      <br />
      {/* <Route exact path="/" render={home}>
        <CardContainer />
      </Route>
      <Route exact path="/student$[id]" render={STB}>
        <StudentDashboard />
      </Route> */}
      {/* <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/logout" component={LogOut} /> */}
    </div>
  );
};

export default App;
