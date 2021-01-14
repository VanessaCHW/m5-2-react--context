import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";
import usePersistedState from "../hooks/use-persistedState.hook";
import items from "../data";

function App(props) {

  const [numCookies, setNumCookies] = usePersistedState(1000, "num-cookies");
  const [purchasedItems, setPurchasedItems] = React.useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
  });

  const calculateCookiesPerSecond = (purchasedItems) => {
    return Object.keys(purchasedItems).reduce((acc, itemId) => {
      const numOwned = purchasedItems[itemId];
      const item = items.find((item) => item.id === itemId);
      const value = item.value;
  
      return acc + value * numOwned;
    }, 0);
  };

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
