import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SavedBooks from "./pages/SavedBooks";
import NoMatch from "./pages/NoMatch";

function App() {
    return (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/saved" component={SavedBooks}/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>
    );
  }

export default App;
