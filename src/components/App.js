import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";
import {GameContext} from "./GameContext";
import useInterval from "../hooks/use-interval.hook";

function App(props) {
  const { numCookies, setNumCookies, 
          purchasedItems,
          calculateCookiesPerSecond} = useContext(GameContext);

  useInterval(() => {
    setNumCookies(numCookies + calculateCookiesPerSecond(purchasedItems));
  }, 1000);     
  
  useEffect(()=>{
    let currentTime = (new Date()).getTime();
    if(localStorage.getItem("lastTime")){
      setNumCookies(numCookies + localStorage.getItem("lastCookiePerSec")
      *Math.round((currentTime - localStorage.getItem("lastTime"))/1000) );
    }

  },[]);

  useEffect(()=>{
    return ()=>{
      localStorage.setItem("lastTime",(new Date()).getTime());
      localStorage.setItem("lastCookiePerSec", calculateCookiesPerSecond(purchasedItems));
    };
  });

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
