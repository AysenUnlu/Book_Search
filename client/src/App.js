import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search/>
          </Route>
          <Route exact path="/saved">
            <Saved/>
          </Route>
          <Route>
            <NoMatch/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
