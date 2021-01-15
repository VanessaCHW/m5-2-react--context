import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";
import {GameContext} from "./GameContext";
import useInterval from "../hooks/use-interval.hook";

function App(props) {
  const { numCookies, setNumCookies, 
          purchasedItems, setPurchasedItems,
          calculateCookiesPerSecond} = useContext(GameContext);

  useInterval(() => {
    setNumCookies(numCookies + calculateCookiesPerSecond(purchasedItems));
  }, 1000);        

  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Router>
    </>
  );
}

export default App;
