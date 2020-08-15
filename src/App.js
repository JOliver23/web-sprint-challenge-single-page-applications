import React, { useState, useEffect} from "react";
import { Route, Switch, Link } from "react-router-dom";
import Form from "./Components/Form";
import Home from "./Components/Home";

const App = () => {
  const [order, setOrder] = useState([]);

  const addMyOrder = order => {
    const newOrder = {
      id: Date.now(),
      name: order.name,
      address: order.address
    };
    setOrder([...order, newOrder])
  };

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
          <Form order={addMyOrder}/>
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
      
    </div>
  );
};
export default App;
