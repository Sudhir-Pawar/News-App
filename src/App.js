import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DrawerBar from "./components/HomePage/DrawerBar";
import NewsContainer from "./components/HomePage/NewsContainer";
function App() {
  
  return (
    <div>
      <DrawerBar> <NewsContainer></NewsContainer> </DrawerBar>
      <Router>
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
