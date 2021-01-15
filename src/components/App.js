import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";
import items from "../data";
import {GameContext} from "./GameContext";

function App(props) {
  const { numCookies, setNumCookies, 
          purchasedItems, setPurchasedItems,
          calculateCookiesPerSecond} = useContext(GameContext);


  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game 
          numCookies={numCookies} 
          setNumCookies={setNumCookies}
          purchasedItems={purchasedItems}
          setPurchasedItems={setPurchasedItems}
          calculateCookiesPerSecond={calculateCookiesPerSecond}
          />
        </Route>
      </Router>
    </>
  );
}

export default App;
