import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Form from "./Components/Form";
import Home from "./Components/Home";
import { SCon, SNav, WelcomeSign, Title1, NavBtn } from "./Styled/StyledComps";

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
    <SCon>
      <SNav>
        <Link to="/">
          <NavBtn>Home</NavBtn>
          </Link>
        <Link to="/pizza">
          <NavBtn>Order Now!</NavBtn>
          </Link>
      </SNav>
      
      <WelcomeSign className="title-banner">
        <Title1>Lambda Eats</Title1>
        <p>You can remove this code and create your own header</p>
      </WelcomeSign>
      
      <Switch>
        <Route path="/pizza">
          <Form order={addMyOrder}/>
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
      
    </SCon>
  );
};
export default App;
