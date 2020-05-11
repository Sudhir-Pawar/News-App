import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DrawerBar from "./components/HomePage/DrawerBar";
import NewsContainer from "./components/HomePage/NewsContainer";
function App() {
  
  return (
    <div>
     
      <Router>
        <Switch>
          <Route exact path="/">
          <DrawerBar> <NewsContainer></NewsContainer> </DrawerBar>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
