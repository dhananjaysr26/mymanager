import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home"
import Profile from "./components/Profile"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App; 