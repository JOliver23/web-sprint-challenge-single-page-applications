import React, { useState, useEffect} from "react";
import { Route, Switch, Link } from "react-router-dom";
import Form from "./Form";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pizza">Order Now!</Link>
      </nav>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>

      <Switch>
        <Route path="/pizza">
          <Form />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
      
    </div>
  );
};
export default App;
